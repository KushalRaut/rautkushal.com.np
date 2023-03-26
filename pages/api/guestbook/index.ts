import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "lib/prisma";

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

  return res.send("Method not allowed.");
}
