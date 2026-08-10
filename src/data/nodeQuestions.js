export const nodeQuestions = [
  {
    id: 401,
    title: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine. It lets developers run JavaScript outside the browser, especially for servers, scripts, and command-line tools. Node.js is popular because it uses an event-driven, non-blocking model.",
    category: "Node.js",
    difficulty: "Easy",
  },
  {
    id: 402,
    title: "Why is Node.js used for backend development?",
    answer:
      "Node.js is efficient for I/O-heavy applications like APIs, chat apps, and real-time services. It lets teams use JavaScript across frontend and backend code. Its package ecosystem also gives developers many ready-made tools.",
    category: "Node.js",
    difficulty: "Easy",
  },
  {
    id: 403,
    title: "What is npm?",
    answer:
      "npm is the default package manager commonly used with Node.js. It installs, updates, and manages dependencies from the npm registry. It also runs project scripts defined in package.json.",
    category: "Node.js",
    difficulty: "Easy",
  },
  {
    id: 404,
    title: "What is package.json?",
    answer:
      "package.json stores project metadata, dependencies, scripts, and configuration. It helps other developers install and run the project consistently. It is one of the central files in most Node.js applications.",
    category: "Node.js",
    difficulty: "Easy",
  },
  {
    id: 405,
    title: "What is the difference between dependencies and devDependencies?",
    answer:
      "dependencies are packages needed for the app to run in production. devDependencies are packages used only for development, testing, linting, or building. This separation helps keep production installs smaller and clearer.",
    category: "Node.js",
    difficulty: "Easy",
  },
  {
    id: 406,
    title: "What is Express.js?",
    answer:
      "Express.js is a minimal web framework for Node.js. It simplifies routing, middleware, request handling, and API responses. Many Node APIs use Express because it is flexible and easy to understand.",
    category: "Node.js",
    difficulty: "Easy",
  },
  {
    id: 407,
    title: "What are environment variables?",
    answer:
      "Environment variables store configuration outside the source code. They are commonly used for ports, API keys, database URLs, and feature flags. This keeps sensitive or environment-specific values out of committed files.",
    category: "Node.js",
    difficulty: "Easy",
  },
  {
    id: 408,
    title: "What is middleware in Express?",
    answer:
      "Middleware is a function that runs during the request-response cycle. It can read or modify the request, send a response, or call next to continue to another handler. Middleware is commonly used for logging, authentication, validation, and error handling.",
    category: "Node.js",
    difficulty: "Medium",
  },
  {
    id: 409,
    title: "What is the Node.js event loop?",
    answer:
      "The event loop allows Node.js to handle asynchronous operations without blocking the main thread. It coordinates callbacks from timers, I/O, promises, and other async sources. This is a major reason Node can handle many concurrent connections efficiently.",
    category: "Node.js",
    difficulty: "Medium",
  },
  {
    id: 410,
    title: "What is the difference between synchronous and asynchronous code in Node.js?",
    answer:
      "Synchronous code blocks execution until it finishes. Asynchronous code starts an operation and lets Node continue running other work until a callback, promise, or event completes. For servers, async APIs usually improve responsiveness under load.",
    category: "Node.js",
    difficulty: "Medium",
  },
  {
    id: 411,
    title: "How do you handle errors in Express?",
    answer:
      "Synchronous errors can be passed to Express error middleware automatically or through next. Async route handlers should use try/catch or a wrapper to pass errors to centralized middleware. A good error handler sends consistent responses and avoids leaking sensitive details.",
    category: "Node.js",
    difficulty: "Medium",
  },
  {
    id: 412,
    title: "What is a REST API?",
    answer:
      "A REST API exposes resources through URLs and uses HTTP methods like GET, POST, PUT, PATCH, and DELETE. It usually returns JSON and uses status codes to describe results. REST APIs should have predictable resource naming and clear request-response behavior.",
    category: "Node.js",
    difficulty: "Medium",
  },
  {
    id: 413,
    title: "What is CORS?",
    answer:
      "CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether one origin can request resources from another origin. In Node APIs, CORS is often configured to allow trusted frontend URLs.",
    category: "Node.js",
    difficulty: "Medium",
  },
  {
    id: 414,
    title: "What is the difference between CommonJS and ES modules?",
    answer:
      "CommonJS uses require and module.exports, while ES modules use import and export. ES modules are the modern JavaScript standard and are enabled in Node through file extensions or type configuration. Projects should avoid mixing them casually because loading behavior differs.",
    category: "Node.js",
    difficulty: "Medium",
  },
  {
    id: 415,
    title: "What are streams in Node.js?",
    answer:
      "Streams process data piece by piece instead of loading everything into memory at once. They are useful for files, network data, uploads, and large responses. Streams can improve performance and memory usage for large data flows.",
    category: "Node.js",
    difficulty: "Medium",
  },
  {
    id: 416,
    title: "How does clustering work in Node.js?",
    answer:
      "Clustering allows a Node.js application to run multiple worker processes that can share server ports. This helps use multiple CPU cores because a single Node process runs JavaScript on one main thread. In production, process managers or container orchestration often handle similar scaling.",
    category: "Node.js",
    difficulty: "Hard",
  },
  {
    id: 417,
    title: "What is backpressure in Node.js streams?",
    answer:
      "Backpressure happens when data is being written faster than it can be consumed. Node streams provide signals to pause and resume flow so memory does not grow uncontrollably. Handling backpressure is important when processing large files or network responses.",
    category: "Node.js",
    difficulty: "Hard",
  },
  {
    id: 418,
    title: "How would you secure a Node.js API?",
    answer:
      "Validate input, sanitize output, use authentication and authorization, and avoid exposing secrets. Add rate limiting, secure headers, careful CORS settings, and safe error responses. Keep dependencies updated and audit packages for known vulnerabilities.",
    category: "Node.js",
    difficulty: "Hard",
  },
  {
    id: 419,
    title: "What is the difference between process.nextTick and setImmediate?",
    answer:
      "process.nextTick schedules a callback to run before the event loop continues to the next phase. setImmediate schedules a callback for the check phase of the event loop. Overusing nextTick can starve I/O, so it should be used carefully.",
    category: "Node.js",
    difficulty: "Hard",
  },
  {
    id: 420,
    title: "How do you debug performance issues in Node.js?",
    answer:
      "Start by measuring with logs, profiling tools, and metrics instead of guessing. Check slow database queries, blocking synchronous code, memory growth, high CPU usage, and excessive network calls. Tools like the Node inspector, heap snapshots, and APM dashboards can help identify bottlenecks.",
    category: "Node.js",
    difficulty: "Hard",
  },
];
