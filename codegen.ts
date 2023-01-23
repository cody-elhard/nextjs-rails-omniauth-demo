
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "frontend/pages/**/*.tsx",
  generates: {
    "frontend/types.ts": {
      plugins: ["typescript", "typescript-operations"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },
  }
};

export default config;
