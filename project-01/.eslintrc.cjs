module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [
  //         ['assets', './src/assets'],
  //         ['common', './src/common'],
  //         ['domains', './src/domains'],
  //         ['navigation', './src/navigation'],
  //         ['pages', './src/pages'],
  //       ],
  //       extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
  //     },
  //   },
  // },
};
