export const htmlQuestions = [
  {
    id: 201,
    title: "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language and defines the structure of web pages. It uses elements and attributes to describe content such as headings, paragraphs, links, images, and forms. Browsers read HTML and render it into a document users can view and interact with.",
    category: "HTML",
    difficulty: "Easy",
  },
  {
    id: 202,
    title: "What is the basic structure of an HTML document?",
    answer:
      "A basic HTML document includes a doctype, html element, head element, and body element. The head contains metadata, title, and resource links. The body contains the visible page content.",
    category: "HTML",
    difficulty: "Easy",
  },
  {
    id: 203,
    title: "What are semantic HTML elements?",
    answer:
      "Semantic elements describe the meaning of the content they contain. Examples include header, nav, main, article, section, aside, and footer. They improve accessibility, SEO, and code readability.",
    category: "HTML",
    difficulty: "Easy",
  },
  {
    id: 204,
    title: "What is the difference between div and span?",
    answer:
      "div is a block-level element used to group larger sections of content. span is an inline element used to wrap small pieces of text or inline content. Both are generic elements and should be replaced with semantic tags when a meaningful element exists.",
    category: "HTML",
    difficulty: "Easy",
  },
  {
    id: 205,
    title: "Why is the alt attribute important for images?",
    answer:
      "The alt attribute provides text that describes an image for screen readers and fallback situations. It improves accessibility and helps users understand content when images fail to load. Decorative images can use an empty alt value.",
    category: "HTML",
    difficulty: "Easy",
  },
  {
    id: 206,
    title: "What is the difference between id and class attributes?",
    answer:
      "An id should identify one unique element on a page. A class can be reused across many elements for shared styling or behavior. In CSS, id selectors are also more specific than class selectors.",
    category: "HTML",
    difficulty: "Easy",
  },
  {
    id: 207,
    title: "What is the purpose of the label element?",
    answer:
      "The label element provides a text label for a form control. Connecting a label with an input improves accessibility and lets users click the label to focus or toggle the control. It is especially important for screen reader users.",
    category: "HTML",
    difficulty: "Easy",
  },
  {
    id: 208,
    title: "What is the viewport meta tag?",
    answer:
      "The viewport meta tag tells mobile browsers how to control page width and scaling. A common value is width=device-width, initial-scale=1. It is essential for responsive layouts to render correctly on phones and tablets.",
    category: "HTML",
    difficulty: "Medium",
  },
  {
    id: 209,
    title: "What are HTML forms used for?",
    answer:
      "Forms collect user input and submit it to a server or handle it with client-side JavaScript. They include controls like input, textarea, select, checkbox, radio, and button. Proper labels, validation, and input types make forms easier to use.",
    category: "HTML",
    difficulty: "Medium",
  },
  {
    id: 210,
    title: "What is the difference between localStorage and sessionStorage?",
    answer:
      "localStorage stores key-value data that remains until it is manually cleared. sessionStorage stores data only for the lifetime of a browser tab. Both store strings, so objects usually need JSON.stringify and JSON.parse.",
    category: "HTML",
    difficulty: "Medium",
  },
  {
    id: 211,
    title: "What are data attributes in HTML?",
    answer:
      "Data attributes are custom attributes that start with data-, such as data-user-id. They store extra information on elements without using nonstandard attributes. JavaScript can read them through the dataset property.",
    category: "HTML",
    difficulty: "Medium",
  },
  {
    id: 212,
    title: "What is the difference between script, async, and defer?",
    answer:
      "A normal script can block HTML parsing while it downloads and runs. async downloads independently and runs as soon as it is ready, which can be out of order. defer downloads while parsing and runs after the document is parsed, preserving order.",
    category: "HTML",
    difficulty: "Medium",
  },
  {
    id: 213,
    title: "What are block-level and inline elements?",
    answer:
      "Block-level elements usually start on a new line and take available width, such as div, p, and section. Inline elements flow within text and take only needed width, such as span, a, and strong. CSS can change layout behavior with display values.",
    category: "HTML",
    difficulty: "Medium",
  },
  {
    id: 214,
    title: "What is HTML validation?",
    answer:
      "HTML validation checks whether markup follows the rules of the HTML standard. It can catch missing attributes, incorrect nesting, duplicate IDs, and accessibility-related issues. Valid markup is easier for browsers, tools, and assistive technologies to interpret.",
    category: "HTML",
    difficulty: "Medium",
  },
  {
    id: 215,
    title: "What is the purpose of ARIA attributes?",
    answer:
      "ARIA attributes add accessibility information when native HTML is not enough. They can describe roles, states, and relationships for assistive technologies. Native semantic HTML should be preferred first because it is simpler and more reliable.",
    category: "HTML",
    difficulty: "Medium",
  },
  {
    id: 216,
    title: "How do you improve HTML accessibility?",
    answer:
      "Use semantic elements, meaningful headings, descriptive alt text, associated labels, and keyboard-friendly controls. Avoid using generic elements for interactive behavior unless proper roles and keyboard support are added. Accessibility should be considered from the start, not patched at the end.",
    category: "HTML",
    difficulty: "Hard",
  },
  {
    id: 217,
    title: "What is progressive enhancement in HTML?",
    answer:
      "Progressive enhancement starts with usable HTML content and adds CSS and JavaScript enhancements on top. This keeps core functionality available even if scripts fail or devices are limited. It is a strong approach for resilient, accessible web pages.",
    category: "HTML",
    difficulty: "Hard",
  },
  {
    id: 218,
    title: "How does browser parsing handle malformed HTML?",
    answer:
      "Browsers are forgiving and try to repair malformed HTML while building the DOM. They may automatically close tags, move elements, or create implied elements. This can lead to unexpected layouts, so writing valid markup remains important.",
    category: "HTML",
    difficulty: "Hard",
  },
  {
    id: 219,
    title: "What are custom elements in HTML?",
    answer:
      "Custom elements are part of the Web Components standard and allow developers to define new HTML tags. They encapsulate reusable behavior and can work with shadow DOM and templates. They are useful for framework-independent UI components.",
    category: "HTML",
    difficulty: "Hard",
  },
  {
    id: 220,
    title: "How would you optimize HTML for SEO?",
    answer:
      "Use meaningful title tags, meta descriptions, semantic structure, descriptive links, and proper heading hierarchy. Structured data can help search engines understand specific content types. Fast loading, accessible markup, and crawlable content also support SEO.",
    category: "HTML",
    difficulty: "Hard",
  },
];
