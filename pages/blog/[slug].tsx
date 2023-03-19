import Container from "components/Container";
import { Mdx } from "components/Mdx";
import { allBlogs } from "contentlayer/generated";
import { useRouter } from "next/dist/client/router";
import React from "react";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPage = () => {
  const { query } = useRouter();

  console.log(query);
  const post = allBlogs.find((post) => post.slug === query.slug);

  if (!post) return <div>404</div>;

  return (
    <Container
      title="Blog – Kushal Raut"
      description="See some of my side projects."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {post?.title}
        </h1>
        <section>
          <div className="flex items-center mt-4 mb-8 font-mono text-sm text-black dark:text-white">
            <div className=" bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              {post?.publishedAt}
            </div>
            <div className="min-w-[85%] h-[0.2em] bg-neutral-50 dark:bg-neutral-700 mx-2" />
          </div>
          <Mdx code={post?.body?.code} />
        </section>
      </div>
    </Container>
  );
};

export default BlogPage;
