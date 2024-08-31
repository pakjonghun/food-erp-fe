import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8000/api/graphql',
  documents: 'src/graphql/hooks/**/*.ts',
  generates: {
    'src/graphql/codegen/': {
      preset: 'client',
      plugins: [],
    },
    '.graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
