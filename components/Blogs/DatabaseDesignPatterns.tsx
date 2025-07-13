import Container from "components/Container";
import React from "react";

const DatabaseDesignPatterns = () => {
  return (
    <Container
      title="Database Design Patterns: Structuring Scalable Systems – Kushal Raut"
      description="Explore essential database design patterns including relational, document, and event sourcing models to build scalable and maintainable applications."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 text-black dark:text-white">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Database Design Patterns: Structuring Scalable Systems
          </h1>
          <div className="flex items-center mt-6 font-mono text-sm text-gray-600 dark:text-gray-400">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              July 13, 2025
            </div>
            <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-700 mx-2" />
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              6 min read
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-rose-500 to-yellow-600 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧱</span>
            </div>
            <p className="text-lg font-medium">
              Solid Foundations, Scalable Systems
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A strong database design is critical to building systems that scale
            efficiently and are easy to maintain. From normalized relational
            databases to flexible NoSQL models, choosing the right pattern is
            crucial.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            1. Relational Model (Normalized)
          </h2>

          <p>
            This traditional approach focuses on minimizing redundancy and
            maintaining data integrity through relationships and foreign keys.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Example: Users and Orders tables
User {
  id INT PRIMARY KEY,
  name VARCHAR
}

Order {
  id INT PRIMARY KEY,
  user_id INT FOREIGN KEY REFERENCES User(id),
  total DECIMAL
}`}</code>
            </pre>
          </div>

          <p>
            Best for transactional systems like banking, inventory, or ERPs.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            2. Document Model
          </h2>

          <p>
            Used in NoSQL systems like MongoDB, this pattern stores data in
            nested document formats like JSON. Ideal for fast reads and flexible
            schemas.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// MongoDB-style user with embedded orders
{
  _id: ObjectId("..."),
  name: "Alice",
  orders: [
    { id: 1, total: 50 },
    { id: 2, total: 75 }
  ]
}`}</code>
            </pre>
          </div>

          <p>Great for content-heavy platforms, CMS, and real-time feeds.</p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            3. Event Sourcing
          </h2>

          <p>
            In this model, all changes to data are stored as immutable events.
            The current state is derived by replaying these events.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Example event log
[
  { event: "UserCreated", data: { id: 1, name: "Bob" } },
  { event: "UserUpdated", data: { id: 1, name: "Robert" } }
]`}</code>
            </pre>
          </div>

          <p>
            Best used in systems requiring auditability or undo capabilities —
            like fintech or collaborative tools.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Choose the pattern based on your read-write ratio, consistency
              needs, and growth expectations.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Other Useful Patterns
          </h2>

          <ul>
            <li>
              <strong>Single Table Design (NoSQL)</strong>: Use one table for
              multiple entity types with indexing. Popular in DynamoDB.
            </li>
            <li>
              <strong>CQRS</strong>: Separate read and write models to optimize
              performance.
            </li>
            <li>
              <strong>Star Schema</strong>: Common in data warehouses for fast
              analytical queries.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Normalize relational data for transactional integrity.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Use document-based models for flexibility and speed.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Event sourcing adds traceability and historical state
                reconstruction.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default DatabaseDesignPatterns;
