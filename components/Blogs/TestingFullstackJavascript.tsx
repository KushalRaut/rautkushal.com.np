import Container from "components/Container";
import React from "react";

const TestingFullstackJavascript = () => {
  return (
    <Container
      title="Testing Full-Stack JavaScript Applications – Kushal Raut"
      description="Learn how to test full-stack JavaScript applications using tools like Jest, Supertest, Cypress, and Playwright. Cover unit, integration, and end-to-end testing strategies."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 text-black dark:text-white">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Testing Full-Stack JavaScript Applications
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

        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-fuchsia-600 to-indigo-700 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧪</span>
            </div>
            <p className="text-lg font-medium">
              Reliable Code Starts with Reliable Tests
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Testing is the backbone of software quality. In full-stack
            JavaScript applications, a strong testing strategy spans unit,
            integration, and end-to-end (E2E) testing across both frontend and
            backend components.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            1. Unit Testing with Jest
          </h2>

          <p>
            Unit tests check small, isolated pieces of code like functions or
            utilities.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`}</code>
            </pre>
          </div>

          <p>
            Jest is the go-to choice for unit testing in JavaScript. It works
            for both frontend and backend logic.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            2. Backend Integration Testing with Supertest
          </h2>

          <p>
            Supertest is ideal for testing your Express or Node.js API
            endpoints.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`import request from 'supertest';
import app from '../app';

describe('GET /api/users', () => {
  it('should return users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(3);
  });
});`}</code>
            </pre>
          </div>

          <p>
            These tests spin up your server and test the API endpoints without
            mocking the internals.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            3. Frontend Component Testing with React Testing Library
          </h2>

          <p>
            Use React Testing Library (RTL) to test UI components from the
            user’s perspective.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders the button with text', () => {
  render(<Button text="Click Me" />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});`}</code>
            </pre>
          </div>

          <p>
            Avoid testing implementation details. Focus on what the user sees
            and interacts with.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            4. End-to-End Testing with Cypress or Playwright
          </h2>

          <p>
            E2E tests simulate real user flows in the browser. Cypress and
            Playwright are popular modern choices.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`// Cypress example
describe('Login flow', () => {
  it('should log in the user', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});`}</code>
            </pre>
          </div>

          <p>
            Use E2E tests sparingly—they’re powerful but slower. Focus on
            critical user flows like signup, login, and checkout.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Structure your tests as a pyramid: lots of unit tests, fewer
              integration tests, and a handful of E2E tests.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Use Jest for unit and backend testing, RTL for UI testing, and
                Cypress/Playwright for E2E.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Write tests that mimic real user interactions—not component
                internals.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Automate tests in your CI pipeline for consistent quality.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default TestingFullstackJavascript;
