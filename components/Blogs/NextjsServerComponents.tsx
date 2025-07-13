import Container from "components/Container";
import React from "react";

// Blog Component 4: Next.js 14
const NextjsServerComponents = () => {
  return (
    <Container
      title="Next.js 14: Server Components and App Router Deep Dive – Kushal Raut"
      description="Explore Next.js 14's revolutionary Server Components, App Router, and how they change the way we build React applications."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Next.js 14: Server Components and App Router
          </h1>
          <div className="flex items-center mt-6 font-mono text-sm text-gray-600 dark:text-gray-400">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              May 5, 2022
            </div>
            <div className=" h-[0.2em] bg-neutral-50 dark:bg-neutral-700 mx-2" />
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              5 min read
            </div>
          </div>
        </div>

        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-black to-gray-700 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">▲</span>
            </div>
            <p className="text-lg font-medium">Next.js App Router</p>
          </div>
        </div>

        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Next.js 14 introduces Server Components and App Router,
            fundamentally changing how we build React applications with better
            performance and developer experience.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            App Router Structure
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`app/
├── layout.tsx      // Root layout
├── page.tsx        // Home page
├── about/
│   └── page.tsx    // About page
└── blog/
    ├── page.tsx    // Blog list
    └── [slug]/
        └── page.tsx // Dynamic blog post`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Server Components
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Server Component (default in app directory)
async function BlogPost({ params }: { params: { slug: string } }) {
  // This runs on the server
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`);
  const data = await post.json();

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </article>
  );
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Client Components
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`'use client'; // Mark as client component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
            </pre>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-8">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              🎯 When to use Client Components
            </h4>
            <p className="text-yellow-700 dark:text-yellow-300">
              Use client components for interactivity, state, effects, and
              browser APIs. Keep them minimal for better performance.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Data Fetching
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Parallel data fetching
async function Page() {
  const [posts, users] = await Promise.all([
    fetch('https://api.example.com/posts'),
    fetch('https://api.example.com/users')
  ]);

  return (
    <div>
      <PostList posts={await posts.json()} />
      <UserList users={await users.json()} />
    </div>
  );
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Advantages
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Smaller bundle sizes with server-side rendering
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Better SEO and initial page load performance
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Simplified data fetching with async/await
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default NextjsServerComponents;
