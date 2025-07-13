import Container from "components/Container";
import React from "react";

const GraphQLVsRest = () => {
  return (
    <Container
      title="GraphQL vs REST: Choosing the Right API Design – Kushal Raut"
      description="Understand the differences between REST and GraphQL APIs, including use-cases, pros, cons, and practical implementation tips."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 text-black dark:text-white">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            GraphQL vs REST: Choosing the Right API Design
          </h1>
          <div className="flex items-center mt-6 font-mono text-sm text-gray-600 dark:text-gray-400">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              July 13, 2025
            </div>
            <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-700 mx-2" />
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              5 min read
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔌</span>
            </div>
            <p className="text-lg font-medium">
              APIs Power the Web — Choose Wisely
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            APIs are the backbone of modern web and mobile applications. REST
            has been the de-facto standard for years, but GraphQL has emerged as
            a powerful alternative. This guide will help you understand the
            trade-offs between REST and GraphQL so you can pick the right tool
            for your project.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            What is REST?
          </h2>

          <p>
            REST (Representational State Transfer) is a resource-based
            architectural style that uses standard HTTP methods (GET, POST, PUT,
            DELETE).
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`GET /api/users/1
POST /api/users
DELETE /api/users/1`}</code>
            </pre>
          </div>

          <p>
            It&apos;s easy to cache, scale, and debug—but often leads to
            over-fetching or under-fetching data.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            What is GraphQL?
          </h2>

          <p>
            GraphQL is a query language and runtime for APIs. Instead of
            multiple endpoints, you send a single query to retrieve exactly what
            you need.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-pink-400 text-sm">
              <code>{`query {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}`}</code>
            </pre>
          </div>

          <p>
            GraphQL solves over-fetching by letting the client shape the
            response. It also supports real-time data with subscriptions.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Differences
          </h2>

          <ul>
            <li>
              <strong>Data Fetching:</strong> REST often requires multiple
              requests; GraphQL combines them into one.
            </li>
            <li>
              <strong>Flexibility:</strong> GraphQL lets clients define exactly
              what they want.
            </li>
            <li>
              <strong>Error Handling:</strong> REST uses HTTP status codes;
              GraphQL returns structured error responses.
            </li>
            <li>
              <strong>Versioning:</strong> REST often uses versioned URLs (e.g.,
              /v1/users), while GraphQL evolves without breaking changes.
            </li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Did You Know?
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              GitHub and Shopify use GraphQL for their public APIs to give
              developers more power and precision.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            When to Choose What?
          </h2>

          <ul>
            <li>
              ✅ <strong>Choose REST</strong> if: simplicity, cacheability, and
              broad tool support are your top concerns.
            </li>
            <li>
              ✅ <strong>Choose GraphQL</strong> if: you need flexibility,
              mobile-friendly APIs, or nested/related data fetching.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                REST is resource-oriented; GraphQL is query-oriented.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                GraphQL reduces over-fetching and under-fetching.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Choose based on your app’s complexity, team familiarity, and
                performance needs.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default GraphQLVsRest;
