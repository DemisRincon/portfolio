
import eslintRecommended from 'eslint/conf/eslint-recommended';
import reactRecommended from 'eslint-plugin-react/configs/recommended';
import reactPlugin from 'eslint-plugin-react';

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

        },

    },

];

export default config;
