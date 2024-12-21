/* eslint-env node */
module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-strongly-recommended',
        '@vue/typescript/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended'
    ],
    rules: {
        'vue/component-api-style': [
            'error',
            [ 'script-setup', 'composition', 'options' ] // "script-setup", "composition", "composition-vue2", or "options"
        ],
        'vue/component-tags-order': [ 'error', { order: [ 'template', 'script', 'style' ] } ],
        'vue/no-v-html': 0,
        'vue/html-indent': [ 'error', 4 ],
        'vue/script-indent': [ 'error', 4, { switchCase: 1 } ],
        'vue/v-on-event-hyphenation': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': [ 'error', {
            html: {
                void: 'never',
                normal: 'always',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        } ],
        'vue/attributes-order': [ 'error', {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                [ 'UNIQUE', 'SLOT' ],
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT'
            ],
            alphabetical: false
        } ],
        '@typescript-eslint/ban-ts-comment': [ 'error' ],
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'off',
        'no-debugger': 'off',
        'no-console': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [ 'error' ],
        semi: [ 'error', 'never' ],
        quotes: [ 'error', 'single' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'space-before-function-paren': [ 'error', 'always' ],
        '@typescript-eslint/no-var-requires': 0,
        indent: [ 'error', 4, { SwitchCase: 1 } ],
        'quote-props': [ 'error', 'as-needed' ],
        'object-property-newline': [ 'error' ],
        'key-spacing': [ 'error', { afterColon: true } ],
        'object-curly-newline': [ 'error', {
            ObjectExpression: {
                multiline: true,
                consistent: true
            },
            ObjectPattern: { multiline: true },
            ExportDeclaration: {
                multiline: true,
                minProperties: 3
            }
        } ],
        'space-before-blocks': [ 'error', {
            functions: 'always',
            keywords: 'always',
            classes: 'always'
        } ],
        'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
    },
    env: {
        'vue/setup-compiler-macros': true,
        es2021: true,
        node: true
    }
}
