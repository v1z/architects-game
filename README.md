# What's inside

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Webpack 4](https://webpack.js.org/)
- [PostCSS](https://postcss.org/)
- [ESlint](https://eslint.org/) & [Stylelint](https://stylelint.io/) (each with 2 configs - quality & format)
- [Husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged) (pre-commit hook for code linting/formatting ([russian language article](http://blog.csssr.ru/2018/12/05/lint-your-css)))
- [Prettier](https://prettier.io/)
- [Plop](https://plopjs.com/) (to generate new components from templates)
- Keyboard users support with [Focus Ring](https://www.youtube.com/watch?v=ilj2P5-5CjI)

# CLI scripts

- `start` - starting webpack-dev-server on 3000 port
- `build` - making production build and put it in `dist` folder
- `make` - generate new file from template
- `lint` - run both eslint and stylelint with quality configs plus cheking the types
- `format` - run both eslint and stylelint with format configs (extends qulity configs with formatting rules) and `--fix` option
