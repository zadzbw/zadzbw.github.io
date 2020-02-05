module.exports = {
  syntax: 'css',
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // css modules pseudo selector
          'global',
          'local',
        ],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          // css modules composes property
          'composes',
        ],
      },
    ],
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'declaration-colon-newline-after': null,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-list-comma-newline-after': 'always-multi-line',
    'number-no-trailing-zeros': null,
    'no-descending-specificity': null,
    'value-list-comma-newline-after': null,
    // 'font-family-no-missing-generic-family-keyword': null,
  },
}
