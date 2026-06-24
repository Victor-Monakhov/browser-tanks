import { defineConfig } from 'eslint/config';
import parser from '@angular-eslint/template-parser';
import angularEslint from '@angular-eslint/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJs from '@stylistic/eslint-plugin-js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import _import from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import { fixupPluginRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import rxjsX from 'eslint-plugin-rxjs-x';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([{
  files: ['**/*.html'],

  extends: compat.extends(
    'plugin:@angular-eslint/template/recommended',
    'plugin:@angular-eslint/template/accessibility',
    'plugin:@angular-eslint/template/process-inline-templates',
  ),

  languageOptions: {
    parser: parser,
    ecmaVersion: 'latest',
    sourceType: 'module',

    parserOptions: {
      project: 'tsconfig.eslint.json',
      createDefaultProgram: true
    }
  },

  rules: {
    '@angular-eslint/template/no-duplicate-attributes': 'error',
    '@angular-eslint/template/button-has-type': 'error',
    '@angular-eslint/template/eqeqeq': 'error',
    '@angular-eslint/template/no-interpolation-in-attributes': 'error',

    '@angular-eslint/template/attributes-order': ['error', {
      alphabetical: false,

      order: [
        'STRUCTURAL_DIRECTIVE',
        'TEMPLATE_REFERENCE',
        'ATTRIBUTE_BINDING',
        'INPUT_BINDING',
        'TWO_WAY_BINDING',
        'OUTPUT_BINDING'
      ]
    }],

    '@angular-eslint/template/no-negated-async': 'off',
    '@angular-eslint/template/elements-content': 'off'
  }
}, {
  files: ['**/*.ts'],

  extends: compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
  ),

  plugins: {
    '@angular-eslint': angularEslint,
    '@typescript-eslint': typescriptEslint,
    '@stylistic/ts': stylisticTs,
    '@stylistic/js': stylisticJs,
    'simple-import-sort': simpleImportSort,
    'rxjs-x': rxjsX,
    import: fixupPluginRules(_import),
    'unused-imports': unusedImports
  },

  languageOptions: {
    parser: tsParser,
    ecmaVersion: 5,
    sourceType: 'script',

    parserOptions: {
      project: 'tsconfig.eslint.json',
      createDefaultProgram: true
    }
  },

  rules: {
    'array-callback-return': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'error',
    camelcase: 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 'error',
    curly: 'error',
    eqeqeq: ['error', 'smart'],
    'getter-return': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',

    'new-cap': ['error', {
      capIsNew: false
    }],

    'no-constant-binary-expression': 'warn',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eq-null': 'error',
    'no-irregular-whitespace': 'error',
    'no-labels': 'error',
    'no-multi-assign': 'error',
    'no-new': 'error',
    'no-redeclare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['warn', 'never'],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',

    quotes: ['error', 'single', {
      allowTemplateLiterals: true
    }],

    semi: 'error',
    'space-before-blocks': 'warn',

    'spaced-comment': ['warn', 'always', {
      block: {
        exceptions: ['*']
      }
    }],

    'use-isnan': 'error',
    'valid-typeof': 'error',
    '@stylistic/js/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    '@stylistic/js/array-element-newline': ['error', 'consistent'],
    '@stylistic/js/arrow-parens': ['error', 'as-needed'],
    '@stylistic/js/arrow-spacing': 'error',
    '@stylistic/js/computed-property-spacing': ['error', 'never'],
    '@stylistic/js/dot-location': ['error', 'property'],
    '@stylistic/js/eol-last': ['error', 'always'],

    '@stylistic/js/max-len': ['error', {
      code: 140,
      tabWidth: 2,
      ignoreTrailingComments: true,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],

    '@stylistic/js/max-statements-per-line': ['error', {
      max: 1
    }],

    '@stylistic/js/new-parens': 'error',
    '@stylistic/js/no-floating-decimal': 'error',

    '@stylistic/js/no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1
    }],

    '@stylistic/js/no-multi-spaces': 'error',
    '@stylistic/js/no-trailing-spaces': 'error',
    '@stylistic/js/no-whitespace-before-property': 'error',

    '@stylistic/js/object-curly-newline': ['error', {
      consistent: true
    }],

    '@stylistic/js/rest-spread-spacing': ['error', 'never'],
    '@stylistic/js/semi-spacing': 'error',
    '@stylistic/js/semi-style': ['error', 'last'],
    '@stylistic/js/space-in-parens': ['error', 'never'],
    '@stylistic/js/space-infix-ops': 'error',
    '@stylistic/js/space-unary-ops': 'error',
    '@stylistic/js/spaced-comment': ['error', 'always'],
    '@stylistic/js/switch-colon-spacing': 'error',
    '@stylistic/js/template-curly-spacing': ['error', 'never'],
    '@stylistic/js/template-tag-spacing': ['error', 'never'],
    '@stylistic/ts/block-spacing': 'error',
    '@stylistic/ts/brace-style': 'error',
    '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],

    '@stylistic/ts/comma-spacing': ['error', {
      before: false,
      after: true
    }],

    '@stylistic/ts/function-call-spacing': ['error', 'never'],
    '@stylistic/ts/indent': ['error', 2],

    '@stylistic/ts/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],

    '@stylistic/ts/keyword-spacing': ['error', {
      before: true,
      after: true
    }],

    '@stylistic/ts/lines-around-comment': ['error', {
      beforeBlockComment: true
    }],

    '@stylistic/ts/member-delimiter-style': 'error',
    '@stylistic/ts/no-extra-semi': 'error',
    '@stylistic/ts/object-curly-spacing': ['error', 'always'],
    '@stylistic/ts/quote-props': ['error', 'as-needed'],

    '@stylistic/ts/quotes': ['error', 'single', {
      allowTemplateLiterals: true
    }],

    '@stylistic/ts/semi': ['error', 'always'],
    '@stylistic/ts/space-before-blocks': 'error',
    '@stylistic/ts/space-before-function-paren': ['error', 'never'],
    '@stylistic/ts/space-infix-ops': 'error',
    '@stylistic/ts/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true
          }
        }
      }
    ],

    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: [
            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',
            'public-field',
            'protected-field',
            'private-field',
            'public-get',
            'protected-get',
            'private-get',
            'public-set',
            'protected-set',
            'private-set',
            'constructor',
            'public-method',
            'protected-method',
            'private-method',
          ],
        }
      }
    ],

    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
          constructors: 'no-public'
        }
      }
    ],

    'simple-import-sort/imports': ['error', {
      groups: [
        ['^@angular/.*$'],
        ['^@ng.*$', '^@ngx.*$', '^ng.*$', '^ngx.*$', '^angular.*$'],
        ['^@common.*$'],
        ['^[a-zA-Z].*$'],
        ['^../.*$'],
        ['^./.*$']
      ]
    }],

    'unused-imports/no-unused-imports': 'warn',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    '@angular-eslint/directive-selector': ['error', {
      type: 'attribute',
      prefix: ['app', 'vm', 'tnm'],
      style: 'camelCase'
    }],

    '@angular-eslint/component-selector': ['error', {
      type: 'element',
      prefix: ['app', 'vm', 'tnm'],
      style: 'kebab-case'
    }],

    '@angular-eslint/no-empty-lifecycle-method': 'error',
    '@angular-eslint/no-output-native': 'error',
    '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error',

    '@typescript-eslint/naming-convention': ['error', {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE']
    }, {
      selector: 'parameter',
      format: ['camelCase']
    }, {
      selector: 'memberLike',
      format: ['camelCase'],
      leadingUnderscore: 'allow'
    }, {
      selector: 'enumMember',
      format: ['PascalCase']
    }, {
      selector: 'classProperty',
      modifiers: ['readonly'],
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow'
    }, {
      selector: 'objectLiteralProperty',
      format: ['camelCase', 'snake_case']
    }, {
      selector: 'typeLike',
      format: ['PascalCase']
    }, {
      selector: 'typeProperty',
      format: ['camelCase', 'snake_case']
    }],

    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/prefer-optional-chain': 'warn',

    'arrow-parens': ['off', 'always'],
    'no-else-return': 'off',
    'no-fallthrough': 'off',
    'no-prototype-builtins': 'off',
    'no-trailing-spaces': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-unused-vars': 'off',
    '@angular-eslint/component-class-suffix': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    'rxjs-x/no-async-subscribe': 'error',
    'rxjs-x/no-compat': 'error',
    'rxjs-x/no-create': 'error',
    'rxjs-x/no-ignored-replay-buffer': 'error',
    'rxjs-x/no-nested-subscribe': 'error',
    'rxjs-x/no-topromise': 'error',
    'rxjs-x/throw-error': 'off',
  }
}]);
