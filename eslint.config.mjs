import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      '.vscode',
      '**/.vscode/**',
      'build/*.js',
      'build/*.js/**',
      'src/assets',
      'src/assets/**',
      'public',
      '**/public/**',
      'dist',
      '**/dist/**',
      'node_modules',
      '**/node_modules/**',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml/**',
      '**/*.d.ts',
    ],
    formatters: { css: true, html: true },
    vue: true,
    typescript: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'off',
      'no-console': 'warn',
      'antfu/if-newline': 'off',
      'style/comma-dangle': ['error', 'never'],
      'vue/attribute-hyphenation': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 5,
        },
        multiline: {
          max: 5,
        },
      }],
      'vue/block-order': ['error', {
        order: ['docs', 'template', 'script', 'style'],
      }],
      'vue/html-self-closing': ['error', {
        html: {
          normal: 'never',
          void: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
      'vue/singleline-html-element-content-newline': ['error', {
        externalIgnores: ['div,span'],
      }],
    },
  },
)
