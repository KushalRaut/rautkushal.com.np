import Container from "components/Container";
import React from "react";

const ReactStateManagement = () => {
  return (
    <Container
      title="React State Management: From useState to Redux and Beyond – Kushal Raut"
      description="Explore how to manage state effectively in React using useState, useReducer, Context API, Redux, and modern tools like Zustand or Jotai."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 text-black dark:text-white">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            React State Management: From useState to Redux and Beyond
          </h1>
          <div className="flex items-center mt-6 font-mono text-sm text-gray-600 dark:text-gray-400">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              July 13, 2025
            </div>
            <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-700 mx-2" />
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              7 min read
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-sky-500 to-violet-700 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <p className="text-lg font-medium">
              Managing Data Flow, The React Way
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            State management is one of the most crucial aspects of building
            dynamic and responsive applications in React. From simple
            component-level state with <code>useState</code> to global state
            with Redux, let’s explore the options, when to use them, and how to
            decide which is right for your app.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            1. useState – Local and Simple
          </h2>
          <p>
            Best for local component state like form inputs, toggle states, etc.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`const [count, setCount] = useState(0);`}</code>
            </pre>
          </div>

          <p>
            Limit useState to isolated logic. For complex or deeply nested
            updates, consider <code>useReducer</code>.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            2. useReducer – For Complex Logic
          </h2>

          <p>
            Great for managing related pieces of state or toggling between
            states with clear actions.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);`}</code>
            </pre>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            3. Context API – Prop Drilling Killer
          </h2>

          <p>
            Context allows global state sharing without manually passing props.
            Best for themes, authentication state, or user info.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}`}</code>
            </pre>
          </div>

          <p>
            Avoid using Context for frequently updated values (e.g., form
            fields) to prevent unnecessary re-renders.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            4. Redux – Global and Predictable
          </h2>

          <p>
            Redux excels at handling large-scale app state with predictable
            updates through actions and reducers. Add Redux Toolkit for cleaner
            setup.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`// Example using Redux Toolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});`}</code>
            </pre>
          </div>

          <p>
            Redux is powerful but can be overkill for small to medium projects.
            Use it when you need shared state + middleware + devtools.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            5. Modern Alternatives: Zustand, Jotai, Recoil
          </h2>

          <p>
            Libraries like Zustand and Jotai offer lightweight and scalable
            state management with less boilerplate.
          </p>

          <div className="bg-gray-900 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm">
              <code>{`// Zustand example
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              Use <code>useState</code> or <code>useReducer</code> until you
              outgrow them. Reach for global solutions only when needed.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-black dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-green-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Start simple with local state using <code>useState</code>.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Use <code>Context</code> or <code>Redux</code> when data must be
                shared deeply across components.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-gray-700 dark:text-gray-300">
                Consider modern tools like Zustand or Jotai for clean and
                reactive state logic.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default ReactStateManagement;
