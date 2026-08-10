export const javascriptQuestions = [
  {
    id: 101,
    title: "What is JavaScript?",
    answer:
      "JavaScript is a programming language used to add interactivity and dynamic behavior to web pages. It can run in browsers and also on servers through runtimes like Node.js. Modern JavaScript is used for full applications, APIs, tooling, and automation.",
    category: "JavaScript",
    difficulty: "Easy",
  },
  {
    id: 102,
    title: "What are the primitive data types in JavaScript?",
    answer:
      "JavaScript primitives include string, number, boolean, null, undefined, symbol, and bigint. Primitives are immutable values, while objects and arrays are reference types. Knowing the difference helps avoid bugs when comparing or copying data.",
    category: "JavaScript",
    difficulty: "Easy",
  },
  {
    id: 103,
    title: "What is the difference between let, const, and var?",
    answer:
      "var is function-scoped and can be redeclared, which can lead to confusing behavior. let and const are block-scoped, making them safer for modern code. Use const by default and let when a variable must be reassigned.",
    category: "JavaScript",
    difficulty: "Easy",
  },
  {
    id: 104,
    title: "What is the difference between == and ===?",
    answer:
      "== compares values after type coercion, while === compares both value and type without coercion. In interviews and real projects, === is generally preferred because it is more predictable. Loose equality is only useful when its coercion rules are intentional.",
    category: "JavaScript",
    difficulty: "Easy",
  },
  {
    id: 105,
    title: "What are arrays in JavaScript?",
    answer:
      "Arrays are ordered collections used to store multiple values in one variable. They support methods like map, filter, reduce, push, and slice. Arrays are objects, so copying them carefully matters when working with state or immutable updates.",
    category: "JavaScript",
    difficulty: "Easy",
  },
  {
    id: 106,
    title: "What is a function in JavaScript?",
    answer:
      "A function is a reusable block of code that can accept inputs and return a result. JavaScript supports function declarations, function expressions, and arrow functions. Functions are first-class values, so they can be passed around like other data.",
    category: "JavaScript",
    difficulty: "Easy",
  },
  {
    id: 107,
    title: "What is template literal syntax?",
    answer:
      "Template literals use backticks to create strings that can span multiple lines and include expressions. Expressions are inserted with ${...}. They are cleaner than manual string concatenation for dynamic messages.",
    category: "JavaScript",
    difficulty: "Easy",
  },
  {
    id: 108,
    title: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of processing declarations before code execution. Function declarations can be called before they appear, while let and const are hoisted but unavailable until initialized. Understanding hoisting helps explain many scope-related errors.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    id: 109,
    title: "What is a closure?",
    answer:
      "A closure happens when a function remembers variables from its outer scope even after that outer function has finished running. Closures are used in callbacks, event handlers, and private state patterns. They are powerful because functions keep access to the environment where they were created.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    id: 110,
    title: "What is the spread operator?",
    answer:
      "The spread operator expands arrays or objects into individual elements or properties. It is commonly used for copying arrays, merging objects, and passing arguments to functions. It performs a shallow copy, so nested objects still share references.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    id: 111,
    title: "What is destructuring in JavaScript?",
    answer:
      "Destructuring extracts values from arrays or properties from objects into variables. It makes code shorter when accessing multiple fields from the same data structure. It can also provide defaults and rename variables during extraction.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    id: 112,
    title: "What are promises?",
    answer:
      "A promise represents the eventual success or failure of an asynchronous operation. It can be pending, fulfilled, or rejected. Promises are handled with then, catch, finally, or the async/await syntax.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    id: 113,
    title: "What is async/await?",
    answer:
      "async/await is syntax for writing promise-based asynchronous code in a cleaner style. An async function returns a promise, and await pauses execution inside that function until the promise settles. Errors are usually handled with try/catch.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    id: 114,
    title: "What is the difference between map, filter, and reduce?",
    answer:
      "map transforms each item and returns a new array of the same length. filter returns only items that pass a condition. reduce combines array values into a single result, such as a sum, object, or grouped structure.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    id: 115,
    title: "What is event delegation?",
    answer:
      "Event delegation attaches one event listener to a parent instead of many listeners on child elements. The event bubbles up, and the handler checks which child triggered it. This is useful for performance and for elements added dynamically.",
    category: "JavaScript",
    difficulty: "Medium",
  },
  {
    id: 116,
    title: "How does the JavaScript event loop work?",
    answer:
      "The event loop coordinates the call stack, task queue, and microtask queue so asynchronous callbacks run at the right time. Synchronous code runs first, then microtasks like promise callbacks, then tasks like timers. This model lets JavaScript remain single-threaded while handling async work.",
    category: "JavaScript",
    difficulty: "Hard",
  },
  {
    id: 117,
    title: "What is prototypal inheritance?",
    answer:
      "JavaScript objects can inherit properties and methods from other objects through a prototype chain. When a property is not found on an object, JavaScript looks up the chain. Classes in JavaScript are mostly syntax over this prototype-based model.",
    category: "JavaScript",
    difficulty: "Hard",
  },
  {
    id: 118,
    title: "What is the difference between call, apply, and bind?",
    answer:
      "call invokes a function with a chosen this value and arguments passed individually. apply does the same but receives arguments as an array. bind returns a new function with this and optional arguments preset.",
    category: "JavaScript",
    difficulty: "Hard",
  },
  {
    id: 119,
    title: "What is debouncing and when would you use it?",
    answer:
      "Debouncing delays running a function until a certain time has passed without another call. It is useful for search inputs, resize handlers, and autocomplete requests. It reduces unnecessary work when events fire rapidly.",
    category: "JavaScript",
    difficulty: "Hard",
  },
  {
    id: 120,
    title: "What is memory leak risk in JavaScript applications?",
    answer:
      "A memory leak happens when unused objects are still referenced and cannot be garbage collected. Common causes include uncleared timers, lingering event listeners, large caches, and retained DOM references. Cleaning up subscriptions and avoiding accidental global references helps prevent leaks.",
    category: "JavaScript",
    difficulty: "Hard",
  },
];
