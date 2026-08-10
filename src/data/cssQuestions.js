export const cssQuestions = [
  {
    id: 301,
    title: "What is CSS?",
    answer:
      "CSS stands for Cascading Style Sheets and controls how HTML content looks. It defines colors, spacing, typography, layout, and responsive behavior. CSS separates presentation from document structure.",
    category: "CSS",
    difficulty: "Easy",
  },
  {
    id: 302,
    title: "What is the CSS box model?",
    answer:
      "The box model describes how an element's content, padding, border, and margin are calculated. Content is the inner area, padding adds space inside the border, border wraps the padding, and margin creates outside space. box-sizing can change how width and height are calculated.",
    category: "CSS",
    difficulty: "Easy",
  },
  {
    id: 303,
    title: "What is the difference between margin and padding?",
    answer:
      "Margin creates space outside an element's border. Padding creates space inside the border between the content and edge. Padding affects the element's background area, while margin separates it from nearby elements.",
    category: "CSS",
    difficulty: "Easy",
  },
  {
    id: 304,
    title: "What are CSS selectors?",
    answer:
      "Selectors target the HTML elements that a CSS rule should style. Common selectors include element, class, id, attribute, pseudo-class, and descendant selectors. Clear selector choices make styles easier to maintain.",
    category: "CSS",
    difficulty: "Easy",
  },
  {
    id: 305,
    title: "What is the difference between class and id selectors?",
    answer:
      "A class selector can style many elements and is written with a dot, such as .card. An id selector targets a unique element and is written with a hash, such as #header. Classes are usually preferred for reusable styling.",
    category: "CSS",
    difficulty: "Easy",
  },
  {
    id: 306,
    title: "What are media queries?",
    answer:
      "Media queries apply CSS only when certain conditions are true, such as viewport width or device orientation. They are a core tool for responsive design. For example, a layout can switch from one column on mobile to multiple columns on desktop.",
    category: "CSS",
    difficulty: "Easy",
  },
  {
    id: 307,
    title: "What is z-index?",
    answer:
      "z-index controls the stacking order of positioned elements. Higher values usually appear above lower values within the same stacking context. It only works as expected when stacking contexts are understood.",
    category: "CSS",
    difficulty: "Easy",
  },
  {
    id: 308,
    title: "What is CSS specificity?",
    answer:
      "Specificity determines which CSS rule wins when multiple rules target the same element. Inline styles, IDs, classes, attributes, pseudo-classes, and element selectors all contribute different weights. When specificity ties, the later rule usually wins.",
    category: "CSS",
    difficulty: "Medium",
  },
  {
    id: 309,
    title: "What is Flexbox?",
    answer:
      "Flexbox is a one-dimensional layout system for arranging items in a row or column. It makes alignment, spacing, wrapping, and distribution easier than older float-based layouts. It is ideal for nav bars, form rows, and component-level alignment.",
    category: "CSS",
    difficulty: "Medium",
  },
  {
    id: 310,
    title: "What is CSS Grid?",
    answer:
      "CSS Grid is a two-dimensional layout system for rows and columns. It is useful for page layouts, dashboards, galleries, and any structure that needs control in both directions. Grid and Flexbox often work together rather than replacing each other.",
    category: "CSS",
    difficulty: "Medium",
  },
  {
    id: 311,
    title: "What is the difference between relative, absolute, fixed, and sticky positioning?",
    answer:
      "relative positions an element relative to where it would normally be. absolute positions it relative to the nearest positioned ancestor, fixed positions it relative to the viewport, and sticky switches between normal flow and fixed behavior based on scroll. Each option affects layout and stacking differently.",
    category: "CSS",
    difficulty: "Medium",
  },
  {
    id: 312,
    title: "What are pseudo-classes and pseudo-elements?",
    answer:
      "Pseudo-classes select elements in a state, such as :hover, :focus, or :nth-child. Pseudo-elements style a specific part of an element, such as ::before, ::after, or ::first-line. They help add interaction and detail without extra markup.",
    category: "CSS",
    difficulty: "Medium",
  },
  {
    id: 313,
    title: "What is the difference between em, rem, px, and percent?",
    answer:
      "px is an absolute CSS pixel unit. em is relative to the current element's font size, rem is relative to the root font size, and percent is relative to the parent or context. Relative units are helpful for scalable and accessible layouts.",
    category: "CSS",
    difficulty: "Medium",
  },
  {
    id: 314,
    title: "What is the cascade in CSS?",
    answer:
      "The cascade is the algorithm browsers use to decide which styles apply. It considers origin, importance, specificity, order, and newer concepts like cascade layers. Understanding the cascade helps avoid overusing !important.",
    category: "CSS",
    difficulty: "Medium",
  },
  {
    id: 315,
    title: "What are CSS transitions?",
    answer:
      "Transitions animate changes between property values over a duration. They are commonly used for hover states, opacity changes, transforms, and color changes. Good transitions are subtle and support usability rather than distracting from content.",
    category: "CSS",
    difficulty: "Medium",
  },
  {
    id: 316,
    title: "What creates a stacking context in CSS?",
    answer:
      "A stacking context is a group of elements stacked together independently from the rest of the page. It can be created by positioned elements with z-index, opacity below 1, transforms, filters, isolation, and other properties. Many z-index bugs come from unexpected stacking contexts.",
    category: "CSS",
    difficulty: "Hard",
  },
  {
    id: 317,
    title: "How would you approach responsive design?",
    answer:
      "Start with flexible layouts, scalable units, and content that works on small screens. Use media queries to adjust layout when the content needs more space. Test real breakpoints based on design behavior rather than only targeting specific devices.",
    category: "CSS",
    difficulty: "Hard",
  },
  {
    id: 318,
    title: "How can CSS affect web performance?",
    answer:
      "Large stylesheets, complex selectors, heavy animations, and layout-triggering changes can slow rendering. Animating transform and opacity is usually cheaper than animating layout properties. Keeping CSS organized and avoiding unnecessary rules improves maintainability and performance.",
    category: "CSS",
    difficulty: "Hard",
  },
  {
    id: 319,
    title: "What are CSS custom properties?",
    answer:
      "CSS custom properties are variables declared with names like --brand-color. They can be reused with var() and updated at runtime, including through themes or JavaScript. They participate in the cascade, which makes them powerful for design systems.",
    category: "CSS",
    difficulty: "Hard",
  },
  {
    id: 320,
    title: "What is containment in CSS?",
    answer:
      "CSS containment lets developers tell the browser that part of a page is independent from the rest. Properties like contain can limit layout, paint, or size calculations. Used carefully, containment can improve performance for complex interfaces.",
    category: "CSS",
    difficulty: "Hard",
  },
];
