import prisma from "lib/prisma";
import Container from "components/Container";
import Guestbook from "components/Guestbook";

export default function GuestbookPage({ fallbackData }) {
  return (
    <Container
      title="Guestbook – Kushal Raut"
      description="Sign my digital guestbook and share some wisdom."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Guestbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Leave a comment below. It could be anything – appreciation,
          information, wisdom, or even humor. Surprise me!
        </p>
        <Guestbook fallbackData={fallbackData} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const entries = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    createdAt: entry.createdAt.toISOString(),
    name: entry.authorName,
    email: entry.authorEmail,
    message: entry.message,
    picture: entry.authorDp,
  }));

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  };
}
