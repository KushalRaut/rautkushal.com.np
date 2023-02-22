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

  const session = await getSession({ req });
  const { email, name, image } = session.user;

  if (!session) {
    return res.status(403).send("Unauthorized");
  }

  if (req.method === "POST") {
    const newEntry = await prisma.comment.create({
      data: {
        authorName: name,
        authorEmail: email,
        message: req.body.body,
        authorDp: image,
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
