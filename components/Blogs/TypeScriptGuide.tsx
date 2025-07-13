import Container from "components/Container";
import React from "react";

// Blog Component 3: TypeScript Guide
const TypeScriptGuide = () => {
  return (
    <Container
      title="TypeScript for JavaScript Developers: A Practical Guide – Kushal Raut"
      description="Transition from JavaScript to TypeScript with practical examples, type definitions, interfaces, and advanced features that improve code quality."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            TypeScript for JavaScript Developers
          </h1>
          <div className="flex items-center mt-6 font-mono text-sm text-gray-600 dark:text-gray-400">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              April 18, 2022
            </div>
            <div className=" h-[0.2em] bg-neutral-50 dark:bg-neutral-700 mx-2" />
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              4 min read
            </div>
          </div>
        </div>

        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📘</span>
            </div>
            <p className="text-lg font-medium">TypeScript Types</p>
          </div>
        </div>

        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {`TypeScript adds static typing to JavaScript, catching errors at
            compile time and improving code quality. Here's how to get started.`}
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Basic Types
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Basic types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let items: string[] = ["apple", "banana"];
let user: { name: string; age: number } = { name: "John", age: 30 };`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Interfaces
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Function Types
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Function with typed parameters and return type
function greetUser(name: string): string {
  return \`Hello, \${name}!\`;
}

// Arrow function with types
const calculateTotal = (price: number, tax: number): number => {
  return price + (price * tax);
};`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Use union types (string | number) when a value can be multiple
              types.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Generics
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John", email: "john@example.com" },
  status: 200,
  message: "Success"
};`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Benefits
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Catches errors at compile time, not runtime
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Better IDE support with autocomplete and refactoring
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Improves code documentation and maintainability
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default TypeScriptGuide;
