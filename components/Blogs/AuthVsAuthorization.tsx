import Container from "components/Container";
import React from "react";

const AuthVsAuthorization = () => {
  return (
    <Container
      title="Authentication and Authorization in Full-Stack Applications – Kushal Raut"
      description="Implement secure authentication using JWT, OAuth, and session management in both frontend and backend applications."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 text-black dark:text-white">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Authentication and Authorization in Full-Stack Applications
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
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-green-600 to-emerald-800 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔐</span>
            </div>
            <p className="text-lg font-medium">Secure Access Matters</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {`In the ever-growing landscape of full-stack development, ensuring
            secure access to your application is not just a recommendation—it's
            a necessity. Authentication and authorization are two foundational
            pieces that every developer must understand and implement properly.`}
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Authentication vs Authorization
          </h2>

          <p>These terms are often confused but serve distinct purposes:</p>

          <ul>
            <li>
              <strong>Authentication</strong>{" "}
              {`is about verifying identity — "Who
              are you?"`}
            </li>
            <li>
              <strong>Authorization</strong> is about permissions — &quot;What
              are you allowed to do?&quot;
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Implementing Authentication
          </h2>

          <p>There are several strategies for authentication:</p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-black dark:text-white">
            JWT (JSON Web Tokens)
          </h3>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Signing a JWT in Node.js
const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-black dark:text-white">
            OAuth 2.0
          </h3>

          <p>
            OAuth is great for social logins. Instead of storing passwords, your
            app relies on trusted providers like Google or GitHub.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Example: Redirect to Google
https://accounts.google.com/o/oauth2/v2/auth?client_id=...`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-black dark:text-white">
            Session-Based Authentication
          </h3>

          <p>
            Useful in traditional web apps where the server stores session data
            and sets a cookie in the browser.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Express-session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              🔑 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Use HTTP-only cookies for storing tokens to protect against XSS
              attacks.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Implementing Authorization
          </h2>

          <p>
            Once a user is authenticated, you need to enforce **role-based** or
            **resource-based** permissions.
          </p>

          <div className="bg-gray-900 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// Role-based check
if (user.role !== 'admin') {
  return res.status(403).json({ message: 'Access denied' });
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Always separate authentication (who you are) from authorization
                (what you can do).
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Use HTTPS and secure cookies for all tokens.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                OAuth is ideal for third-party login; JWT is great for stateless
                APIs.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default AuthVsAuthorization;
