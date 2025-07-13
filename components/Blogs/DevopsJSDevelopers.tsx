import Container from "components/Container";
import React from "react";

const DevopsJSDevelopers = () => {
  return (
    <Container
      title="DevOps for JavaScript Developers: CI/CD, Containers, and More – Kushal Raut"
      description="A practical guide for JavaScript developers to adopt DevOps practices like CI/CD, Docker, and automated testing to streamline their development workflow."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 text-black dark:text-white">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            DevOps for JavaScript Developers: CI/CD, Containers, and More
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
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-cyan-600 to-indigo-800 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <p className="text-lg font-medium">
              From Code to Cloud, the DevOps Way
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            DevOps is not just for infrastructure engineers anymore. As
            JavaScript developers, adopting DevOps practices like Continuous
            Integration/Delivery (CI/CD), containerization, and automated
            testing can drastically improve your development workflow and code
            reliability.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            1. What is DevOps?
          </h2>

          <p>
            DevOps is a culture and set of practices aimed at unifying software
            development (Dev) and operations (Ops). For JS developers, this
            means shorter feedback loops, faster deployments, and fewer
            production bugs.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            2. CI/CD with GitHub Actions
          </h2>

          <p>
            Automating your build, test, and deploy process is crucial. GitHub
            Actions makes it easy to set up workflows directly from your repo.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`# .github/workflows/deploy.yml
name: Deploy

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Deploy
        run: npm run deploy`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            3. Dockerizing Your App
          </h2>

          <p>
            Docker allows you to package your JavaScript app with its
            environment for consistent deployment across machines.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`# Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`}</code>
            </pre>
          </div>

          <p>
            This can be used with services like Render, Railway, or DigitalOcean
            to ship your app in minutes.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Always add `.dockerignore` and `.env` to prevent leaking secrets
              or large files into your container image.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            4. Monitoring and Logging
          </h2>

          <p>
            Use tools like Prometheus, Grafana, or simple console logging with
            Logtail/LogRocket to track performance and crashes post-deployment.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            5. Testing and Linting
          </h2>

          <p>
            Automate linting, type-checking, and unit tests to prevent bad code
            from reaching production.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// package.json scripts
{
  "scripts": {
    "lint": "eslint .",
    "test": "jest",
    "type-check": "tsc --noEmit"
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                CI/CD helps you deliver features faster and with confidence.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Docker ensures consistency across development and production.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Testing, logging, and monitoring complete the DevOps loop for
                JavaScript apps.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default DevopsJSDevelopers;
