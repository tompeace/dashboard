import * as monaco from 'monaco-editor'

// bigfinite meta-language helpers go her
export const name = 'custom-language'

export const rules = {
  provideCompletionItems: (model, position) => ({
    suggestions: [
      {
        label: 'lodash',
        kind: monaco.languages.CompletionItemKind.Function,
        documentation: "The Lodash library exported as Node.js modules.",
        insertText: '"lodash": "*"'
      },
      {
        label: 'express',
        kind: monaco.languages.CompletionItemKind.Function,
        documentation: "Fast, unopinionated, minimalist web framework",
        insertText: '"express": "*"'
      },
      {
        label: 'mkdirp',
        kind: monaco.languages.CompletionItemKind.Function,
        documentation: "Recursively mkdir, like <code>mkdir -p</code>",
        insertText: '"mkdirp": "*"'
      }
    ]
  })
}