import Container from "components/Container";
import React from "react";

const MicroservicesNodejsDocker = () => {
  return (
    <Container
      title="Building Microservices with Node.js and Docker – Kushal Raut"
      description="Learn how to design, containerize, and manage microservices architecture using Node.js and Docker for scalable backend systems."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 text-black dark:text-white">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Building Microservices with Node.js and Docker
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
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-green-600 to-blue-700 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧩</span>
            </div>
            <p className="text-lg font-medium">
              Scalable Systems, One Service at a Time
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Microservices architecture is all about breaking a monolithic app
            into smaller, independently deployable services. In this post, we’ll
            explore how to build microservices using Node.js, Docker, and some
            DevOps practices to keep everything scalable and maintainable.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            1. Why Microservices?
          </h2>

          <ul>
            <li>✅ Scalability: Scale services independently</li>
            <li>✅ Flexibility: Use different stacks per service if needed</li>
            <li>✅ Maintainability: Smaller codebases = easier updates</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            2. Creating a Simple Node.js Service
          </h2>

          <p>Let’s build a `users` service using Express:</p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// users/index.js
const express = require("express");
const app = express();
const port = 4000;

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

app.listen(port, () => {
  console.log(\`Users service running on port \${port}\`);
});`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            3. Dockerizing the Service
          </h2>

          <p>Next, create a `Dockerfile` to containerize the service:</p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`# Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]`}</code>
            </pre>
          </div>

          <p>
            You can now build the image using:
            <code className="text-pink-400 ml-1">
              docker build -t users-service .
            </code>
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            4. Connecting Services with Docker Compose
          </h2>

          <p>
            Let’s define two services (`users` and `orders`) using Docker
            Compose:
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`# docker-compose.yml
version: "3"
services:
  users:
    build: ./users
    ports:
      - "4000:4000"
  orders:
    build: ./orders
    ports:
      - "4001:4001"`}</code>
            </pre>
          </div>

          <p>
            This lets you manage all services with a single command:{" "}
            <code>docker-compose up</code>
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Keep your services loosely coupled. Use messaging queues like
              Redis or RabbitMQ for async communication between services.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            5. Scaling and Communication
          </h2>

          <ul>
            <li>
              <strong>REST or gRPC</strong> for communication
            </li>
            <li>
              <strong>Service Discovery</strong> with tools like Consul
            </li>
            <li>
              <strong>Logging</strong> with centralized tools like ELK or Loki
            </li>
            <li>
              <strong>Monitoring</strong> using Prometheus and Grafana
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Microservices improve scalability and flexibility.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Docker and Compose make services portable and isolated.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Use messaging systems and observability tools as your services
                grow.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default MicroservicesNodejsDocker;
