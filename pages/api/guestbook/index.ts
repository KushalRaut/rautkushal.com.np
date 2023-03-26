import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "lib/prisma";
import { getTimeDiffMinutes } from "utils/getTimeDifference";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const entries = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        createdAt: entry.createdAt.toISOString(),
        name: entry.authorName,
        email: entry.authorEmail,
        message: entry.message,
        picture: entry.authorDp,
      }))
    );
  }

  if (!req.body.session) {
    return res.status(403).send("Unauthorized");
  }
  const { authorName, authorEmail, authorDp, message } = req.body;

  if (req.method === "POST") {
    const latestComment = await prisma.comment.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const minDiff = getTimeDiffMinutes(latestComment.createdAt);

    if (minDiff < 15) {
      return res
        .status(403)
        .send(
          "You cannot add many comments at once. Please wait a few minutes or delete your latest comment."
        );
    }

    const newEntry = await prisma.comment.create({
      data: {
        authorName,
        authorEmail,
        message,
        authorDp,
      },
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      createdAt: newEntry.createdAt.toISOString(),
      name: newEntry.authorName,
      email: newEntry.authorEmail,
      message: newEntry.message,
      picture: newEntry.authorDp,
    });
  }

  if (req.method === "DELETE") {
    const { id } = req.body;

    const entry = await prisma.comment.delete({
      where: {
        id: parseInt(id),
      },
    });

    return res.status(200).json({
      message: "Comment deleted successfully.",
    });
  }

  return res.send("Method not allowed.");
}
