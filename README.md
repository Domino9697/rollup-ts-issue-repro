Rollup Typescript Plugin Issue Repro
===

In its current state, the monorepo works fine.

To repro the issue:
- In `packages/core-components/tsconfig.json`, uncomment the paths config:

```json
    "paths": {
      "@demoproject/core/*": ["../core/src/*"]
    }
```

- Then in `packages/core-components/src/index.ts`, comment the first lines of code and uncomment the rest. The idea here is to change the import statement to make it more readable.

```ts
import { logHello } from "@demoproject/core/helpers";

export const main = () => {
	logHello()
}
```

- run `yarn build` in `core-components` repo.