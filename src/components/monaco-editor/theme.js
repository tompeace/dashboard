// bigfinite color editor color theme goes here
export const name = 'custom-theme'

export const rules = {
  base: 'vs', // can also be vs-dark or hc-black
  inherit: false, // can also be false to completely replace the builtin rules
  rules: [
    { token: 'custom-info', foreground: '808080' },
    { token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold' },
    { token: 'custom-notice', foreground: 'FFA500' },
    { token: 'custom-date', foreground: '008800' }
  ]
}