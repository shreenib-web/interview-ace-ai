const reactQuestions = [
  {
    id: 1,
    title: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces with reusable components. It helps developers split complex screens into smaller pieces that manage their own rendering. React is commonly used for single-page applications and interactive web experiences.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "What is JSX in React?",
    answer:
      "JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. React tooling converts JSX into JavaScript function calls before it runs in the browser. It makes component templates easier to read and keep close to their logic.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "What are React components?",
    answer:
      "Components are reusable building blocks that return UI for a specific part of the screen. They can receive data through props and manage local data with state. Good components are focused, predictable, and easy to compose together.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "What are props in React?",
    answer:
      "Props are read-only values passed from a parent component to a child component. They allow the same component to render different content or behavior based on input. A child should not directly modify the props it receives.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 5,
    title: "What is state in React?",
    answer:
      "State is data that belongs to a component and can change over time. When state updates, React re-renders the component so the UI reflects the latest value. State is useful for form inputs, toggles, fetched data, and other changing UI data.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 6,
    title: "What is the useState hook?",
    answer:
      "useState is a React hook that adds local state to a functional component. It returns the current value and a setter function used to schedule updates. The setter should be used instead of mutating state directly.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 7,
    title: "Why are keys important when rendering lists?",
    answer:
      "Keys help React identify which list items changed, moved, were added, or were removed. Stable keys make list rendering more efficient and prevent state from being attached to the wrong item. IDs from data are usually better keys than array indexes.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 8,
    title: "What is the useEffect hook used for?",
    answer:
      "useEffect runs side effects after React renders, such as fetching data, subscribing to events, or updating the document title. Its dependency array controls when the effect runs again. Effects can also return cleanup functions for timers, subscriptions, and listeners.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 9,
    title: "What is the difference between controlled and uncontrolled components?",
    answer:
      "A controlled component stores form values in React state and updates them through event handlers. An uncontrolled component lets the DOM keep the current value and is usually read through a ref. Controlled inputs are preferred when validation, conditional UI, or live state is needed.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 10,
    title: "What is lifting state up?",
    answer:
      "Lifting state up means moving shared state to the nearest common parent of components that need it. The parent owns the data and passes values or callbacks down through props. This keeps related UI pieces in sync without duplicating state.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 11,
    title: "What is React Context?",
    answer:
      "React Context lets components read shared data without passing props through every level. It is useful for values like theme, language, or authenticated user details. Context should be used thoughtfully because frequent updates can cause many consumers to re-render.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 12,
    title: "What is useRef in React?",
    answer:
      "useRef creates a mutable object whose value persists across renders. It is often used to access DOM nodes, store timer IDs, or keep values that should not trigger a re-render. Updating a ref does not cause React to render again.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 13,
    title: "How does conditional rendering work in React?",
    answer:
      "Conditional rendering means showing different UI based on state, props, or other logic. Developers commonly use if statements, ternary expressions, or logical operators inside JSX. The goal is to keep each condition readable and avoid deeply nested markup.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 14,
    title: "What is React Router used for?",
    answer:
      "React Router manages navigation in React applications without full page reloads. It maps URL paths to components and supports nested routes, dynamic parameters, and redirects. This makes single-page apps feel like multi-page websites.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 15,
    title: "What are React fragments?",
    answer:
      "Fragments let a component return multiple elements without adding an extra wrapper node to the DOM. They are written as <>...</> or React.Fragment. This keeps the rendered HTML cleaner and avoids unnecessary layout elements.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 16,
    title: "How do useMemo and useCallback improve performance?",
    answer:
      "useMemo memoizes a computed value, while useCallback memoizes a function reference. They can reduce unnecessary recalculation or help memoized child components avoid re-rendering. They should be used for real performance problems, not added everywhere by default.",
    category: "React",
    difficulty: "Hard",
  },
  {
    id: 17,
    title: "What is reconciliation in React?",
    answer:
      "Reconciliation is React's process of comparing the previous render tree with the next one. React uses this comparison to decide the smallest set of DOM updates needed. Keys help reconciliation work correctly for lists.",
    category: "React",
    difficulty: "Hard",
  },
  {
    id: 18,
    title: "How would you prevent unnecessary re-renders in React?",
    answer:
      "Start by keeping state as local as possible and avoiding unnecessary state updates. React.memo, useMemo, and useCallback can help when props or calculations are expensive. Profiling should guide optimization so the code stays simple where performance is already fine.",
    category: "React",
    difficulty: "Hard",
  },
  {
    id: 19,
    title: "What are error boundaries in React?",
    answer:
      "Error boundaries catch rendering errors in their child component tree and show a fallback UI. They prevent the whole app from crashing because of one broken section. Traditionally they are implemented with class components, though frameworks often provide helpers around them.",
    category: "React",
    difficulty: "Hard",
  },
  {
    id: 20,
    title: "What is hydration in React applications?",
    answer:
      "Hydration is the process where React attaches event handlers and client-side behavior to HTML already rendered by the server. It is common in server-rendered React apps. Hydration works best when the server output and first client render match closely.",
    category: "React",
    difficulty: "Hard",
  },
];

export default reactQuestions;
