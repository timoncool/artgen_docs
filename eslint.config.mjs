import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigCss from 'eslint-plugin-css-modules';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    ignores: ['node_modules', 'packages', 'build', 'public'],
  },
  {
    plugins: { 'css-modules': eslintConfigCss, 'simple-import-sort': simpleImportSort },
    rules: {
      'css-modules/no-undef-class': 'error',
      // Требует использования одинарных кавычек для строк.
      quotes: ['error', 'single'],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      // Требует запятую в конце последнего элемента в многосрочных списках.
      'comma-dangle': ['error', 'always-multiline'],

      // Требует пробелы внутри фигурных скобок объектов.
      'object-curly-spacing': ['error', 'always'],

      // Запрещает пробелы внутри квадратных скобок массивов.
      'array-bracket-spacing': ['error', 'never'],

      // Запрещает использование "магических" чисел, кроме 0 и 1.
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [0, 1],
          ignoreDefaultValues: true,
          ignoreEnums: true,
        },
      ],

      // Требует новую строку для цепочек вызовов методов, если глубина больше 2.
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

      // Запрещает использование типа any в TypeScript.
      '@typescript-eslint/no-explicit-any': 'warn',

      // Запрещает использование директив // @ts-ignore и других комментариев TypeScript, отключающих проверку типов.
      '@typescript-eslint/ban-ts-comment': 'error',

      // Запрещает использование операторов "non-null assertion".
      '@typescript-eslint/no-non-null-assertion': 'error',

      // Запрещает использование console.log и других методов консоли.
      'no-console': 'error',

      // Запрещает использование debugger.
      'no-debugger': 'error',

      'no-shadow': 'error',

      'no-undef': 'error',

      // Запрещает наличие неиспользуемых переменных, кроме переменных, начинающихся с _.
      // 'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',

      // Требует использования строгого равенства (===).
      eqeqeq: 'error',

      // Запрещает использование var, требует let и const.
      'no-var': 'error',

      // Требует использования const для неизменяемых переменных.
      'prefer-const': 'error',

      // Требует использование фигурных скобок {} для всех блоков кода.
      curly: ['error', 'all'],

      // Требует явно указывать тип возвращаемого значения функций в TypeScript.
      '@typescript-eslint/explicit-function-return-type': 'error',

      // Требует использования стрелочных функций для одно-строчных методов.
      'arrow-body-style': ['error', 'as-needed'],

      // Требует использования самозакрывающихся тегов для React-компонентов и HTML.
      'react/self-closing-comp': ['error', { component: true, html: true }],

      // Требует использования type-imports вместо обычных импортов для типов.
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Запрещает импорт модулей с относительными путями выше уровня.
      'no-restricted-imports': 'off',

      // Запрещает использование пустых блоков кода.
      'no-empty': ['error', { allowEmptyCatch: true }],

      // Сортировка импортов
      'simple-import-sort/imports': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
