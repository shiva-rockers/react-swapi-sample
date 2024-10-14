import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: { import: importPlugin },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // Node.js built-ins
                        'external', // External libraries
                        'internal', // Internal modules
                        ['parent', 'sibling', 'index'], // Parent, sibling, and index files
                        'object', // Destructured imports
                        'type', // Type imports
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
];
