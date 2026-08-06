const reactQuestions = [
  {
    id: 1,
    title: "What is React?",
    answer:
      "React is an open-source JavaScript library developed by Meta for building fast and interactive user interfaces using reusable components.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "What is JSX?",
    answer:
      "JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code inside JavaScript. It is transpiled into React.createElement() calls.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM. React compares changes using a diffing algorithm and updates only the required parts of the real DOM.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "What is the difference between the Virtual DOM and the Real DOM?",
    answer:
      "The Real DOM updates the entire page, while the Virtual DOM compares changes first and updates only the modified elements, improving performance.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 5,
    title: "What are React Components?",
    answer:
      "Components are reusable building blocks of a React application. They can be functional or class-based and return JSX.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 6,
    title: "What is the difference between Functional and Class Components?",
    answer:
      "Functional components are JavaScript functions and use Hooks for state and lifecycle features. Class components use ES6 classes and lifecycle methods.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 7,
    title: "What are Props in React?",
    answer:
      "Props (properties) are read-only values passed from a parent component to a child component to make components reusable.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 8,
    title: "What is State in React?",
    answer:
      "State is data managed inside a component. Updating state causes React to re-render the component.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 9,
    title: "What is the useState Hook?",
    answer:
      "useState is a Hook that lets functional components store and update state values.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 10,
    title: "What is the useEffect Hook?",
    answer:
      "useEffect is used to perform side effects such as fetching data, updating the DOM, or setting timers after rendering.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 11,
    title: "What is useRef?",
    answer:
      "useRef creates a mutable reference that persists across renders. It is commonly used to access DOM elements directly.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 12,
    title: "What is useMemo?",
    answer:
      "useMemo memoizes expensive calculations and only recalculates when dependencies change, improving performance.",
    category: "React",
    difficulty: "Hard",
  },
  {
    id: 13,
    title: "What is useCallback?",
    answer:
      "useCallback memoizes a function so that the same function instance is reused unless its dependencies change.",
    category: "React",
    difficulty: "Hard",
  },
  {
    id: 14,
    title: "What is Context API?",
    answer:
      "Context API allows data to be shared across multiple components without passing props manually through every level.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 15,
    title: "What is React Router?",
    answer:
      "React Router enables client-side routing, allowing navigation between pages without reloading the browser.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 16,
    title: "What are Controlled Components?",
    answer:
      "Controlled components are form elements whose values are controlled by React state.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 17,
    title: "What are Uncontrolled Components?",
    answer:
      "Uncontrolled components manage their own state using the DOM. Refs are typically used to access their values.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 18,
    title: "What is Lifting State Up?",
    answer:
      "Lifting state up means moving shared state to the nearest common parent so multiple child components can access it.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: 19,
    title: "What are React Fragments?",
    answer:
      "Fragments let you group multiple elements without adding an extra DOM node. Use <>...</> or <React.Fragment>.",
    category: "React",
    difficulty: "Easy",
  },
  {
    id: 20,
    title: "Why are Keys important in React?",
    answer:
      "Keys help React identify which list items have changed, been added, or removed, making rendering more efficient.",
    category: "React",
    difficulty: "Easy",
  }
];

export default reactQuestions;