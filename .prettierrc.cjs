module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
  importOrderSeparation: true,
  importOrder: [
    '(^react|^react*)',
    '(^next|^next*)',
    '<THIRD_PARTY_MODULES>',
    '(^@/i18n|^@/middleware)',
    '^@/components*',
    '^@/hooks*',
    '^@/utils*',
    '^@/styles*',
    '^@/assets*',
    '^[../]',
    '^[./]',
    '(^[.]|^[..])',
  ],
};
