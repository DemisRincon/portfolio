/* eslint-disable @typescript-eslint/no-require-imports */
const eslintRecommended = require('eslint/conf/eslint-recommended');
const reactRecommended = require('eslint-plugin-react/configs/recommended');
const reactPlugin = require('eslint-plugin-react');

const config = [

    {

        languageOptions: {

            globals: {

                browser: true,

                es2021: true,

            },

        },

    },

    ...eslintRecommended,

    ...reactRecommended,

    {

        parserOptions: {

            ecmaFeatures: {

                jsx: true,

            },

            ecmaVersion: 12,

            sourceType: 'module',

        },

        plugins: {

            react: reactPlugin,

        },

        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            "@typescript-eslint/no-require-imports": "off",
        },

    },

];

export default config;
