module.exports = {
  extends: ['react-app', 'eslint:recommended', 'prettier'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next|val' }],
    'prefer-destructuring': ['warn', { object: true, array: false }],
  },
};
