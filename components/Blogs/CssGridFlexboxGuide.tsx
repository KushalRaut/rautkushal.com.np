import Container from "components/Container";
import React from "react";

const CssGridFlexboxGuide = () => {
  return (
    <Container
      title="CSS Grid vs Flexbox: A Practical Guide – Kushal Raut"
      description="Understand the key differences between CSS Grid and Flexbox, and learn when to use each layout technique with hands-on examples."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            CSS Grid vs Flexbox: A Practical Guide
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
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-indigo-500 to-cyan-700 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <p className="text-lg font-medium">Layout Mastery Starts Here</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            CSS Grid and Flexbox are two powerful layout systems in CSS. Both
            are widely used, but they serve different purposes. Let’s explore
            their differences, use-cases, and how to choose between them.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            1. When to Use Flexbox
          </h2>

          <p>
            Flexbox is ideal for one-dimensional layouts — either row or column.
            It excels in aligning items along the main or cross axis.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`/* Flexbox example */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            2. When to Use CSS Grid
          </h2>

          <p>
            CSS Grid is best for two-dimensional layouts — both rows and
            columns. It’s perfect for complex layouts like dashboards or image
            galleries.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`/* CSS Grid example */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            3. Key Differences
          </h2>

          <ul>
            <li>
              <strong>Flexbox</strong>: One-dimensional (row OR column)
            </li>
            <li>
              <strong>Grid</strong>: Two-dimensional (rows AND columns)
            </li>
            <li>
              <strong>Flexbox</strong>: Content-first
            </li>
            <li>
              <strong>Grid</strong>: Layout-first
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            4. Can They Work Together?
          </h2>

          <p>
            Absolutely. You can use Grid for overall page layout and Flexbox for
            elements inside grid items.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Combine the two by using Grid for macro layouts and Flexbox for
              micro-level alignment.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Use Flexbox for aligning items in a row or column.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Use Grid when you need complex layouts with multiple rows and
                columns.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                They are not mutually exclusive—combine them for maximum
                flexibility.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default CssGridFlexboxGuide;
