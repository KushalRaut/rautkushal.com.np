import Container from "components/Container";
import React from "react";

// Blog Component 1: Mastering React Hooks (already provided)
const MasteringReactHooks = () => {
  return (
    <Container
      title="Mastering React Hooks: From useState to Custom Hooks – Kushal Raut"
      description="A comprehensive guide to React Hooks, including useState, useEffect, useContext, and how to build powerful custom hooks for reusable logic."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Mastering React Hooks: From useState to Custom Hooks
          </h1>
          <div className="flex items-center mt-6 font-mono text-sm text-gray-600 dark:text-gray-400">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              March 15, 2022
            </div>
            <div className=" h-[0.2em] bg-neutral-50 dark:bg-neutral-700 mx-2" />
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              4 min read
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <p className="text-lg font-medium">React Hooks Illustration</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {`React Hooks revolutionized functional components by bringing state and lifecycle features without classes. Let's dive into the essentials.`}
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Essential Hooks
          </h2>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-black dark:text-white">
            useState Hook
          </h3>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>
                {`const [count, setCount] = useState(0);

// Update state
setCount(prev => prev + 1);`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-black dark:text-white">
            useEffect Hook
          </h3>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`useEffect(() => {
  // Side effect logic
  fetchData();
}, [dependency]); // Don't forget dependencies!`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Always include dependencies in the useEffect array to avoid bugs.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Custom Hooks
          </h2>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Hooks must be called at the top level of components
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Custom hooks enable powerful code reuse
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Always manage dependencies carefully
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default MasteringReactHooks;
