module.exports = {
  presets: [
    // See https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-different-in-the-new-transform
    ['@babel/preset-react', {
      runtime: 'automatic',
    }]
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
}
