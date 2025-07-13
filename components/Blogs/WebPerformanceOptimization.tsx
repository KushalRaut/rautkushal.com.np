import Container from "components/Container";
import React from "react";

const WebPerformanceOptimization = () => {
  return (
    <Container
      title="Web Performance Optimization: Techniques for Faster Websites – Kushal Raut"
      description="Boost your site's speed and user experience with proven performance strategies like image optimization, lazy loading, code splitting, and Core Web Vitals improvements."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 text-black dark:text-white">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Web Performance Optimization: Techniques for Faster Websites
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

        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-emerald-500 to-sky-700 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-lg font-medium">Speed Up, Rank Better</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Website performance affects user experience, SEO, and conversions.
            In this article, we’ll look at practical ways to optimize
            performance for modern web applications—from asset handling to
            runtime behavior.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            1. Optimize Images
          </h2>

          <ul>
            <li>Use modern formats like WebP or AVIF</li>
            <li>Resize and compress images before deployment</li>
            <li>
              Lazy load offscreen images using <code>{`loading="lazy"`}</code>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            2. Minify and Bundle Your Assets
          </h2>

          <p>
            Minify HTML, CSS, and JS to reduce payload size. Use bundlers like
            Webpack, Vite, or esbuild with tree shaking enabled.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`// Example (Webpack config)
optimization: {
  minimize: true,
  splitChunks: {
    chunks: 'all',
  },
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            3. Use Code Splitting and Lazy Loading
          </h2>

          <p>
            Load only the JS required for the current view. React’s{" "}
            <code>React.lazy</code> and dynamic imports help:
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`const Hero = React.lazy(() => import('./Hero'));`}</code>
            </pre>
          </div>

          <p>
            This ensures faster initial load times and keeps bundle size under
            control.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            4. Cache Wisely
          </h2>

          <p>
            Enable proper HTTP caching headers. Use service workers (via Workbox
            or Next.js PWA plugins) for offline support and cache control.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            5. Monitor Core Web Vitals
          </h2>

          <ul>
            <li>
              <strong>LCP (Largest Contentful Paint):</strong> Optimize images,
              reduce render-blocking resources
            </li>
            <li>
              <strong>FID (First Input Delay):</strong> Avoid heavy JS on first
              load
            </li>
            <li>
              <strong>CLS (Cumulative Layout Shift):</strong> Set dimensions for
              images and embeds
            </li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Use tools like Lighthouse, WebPageTest, and Chrome DevTools to
              audit and benchmark your performance.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Images should be modern, compressed, and lazy loaded.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Split your JS bundles and load views lazily.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Always monitor Core Web Vitals and adjust accordingly.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default WebPerformanceOptimization;
