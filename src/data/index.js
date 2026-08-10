export { default as reactQuestions } from './reactQuestions.js';
export { javascriptQuestions } from './javascriptQuestions.js';
export { htmlQuestions } from './htmlQuestions.js';
export { cssQuestions } from './cssQuestions.js';
export { nodeQuestions } from './nodeQuestions.js';
export { sqlQuestions } from './sqlQuestions.js';

import reactQuestions from './reactQuestions.js';
import { javascriptQuestions } from './javascriptQuestions.js';
import { htmlQuestions } from './htmlQuestions.js';
import { cssQuestions } from './cssQuestions.js';
import { nodeQuestions } from './nodeQuestions.js';
import { sqlQuestions } from './sqlQuestions.js';

export const allQuestions = [
  ...reactQuestions,
  ...javascriptQuestions,
  ...htmlQuestions,
  ...cssQuestions,
  ...nodeQuestions,
  ...sqlQuestions,
];
