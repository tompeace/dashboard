// bigfinite color editor color theme goes here
export const name = 'custom-theme'

export const rules = {
  base: 'vs', // can also be vs-dark or hc-black
  inherit: true, // can also be false to completely replace the builtin rules
  rules: [
    { token: 'comment', foreground: '000000', fontStyle: 'italic underline' },
    { token: 'comment.js', foreground: '888888', fontStyle: 'bold' },
    { token: 'comment.css', foreground: '0000ff' } // will inherit fontStyle from `comment` above
  ]
}