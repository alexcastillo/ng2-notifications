## Publishing to npm

Publishing requires 4 things:

1. An npm account. Create one [here](https://www.npmjs.com/signup) if you don't have one.
2. Make sure you cleanup the `README.md` to contain installation instructions and api documentation for your library.
3. A modified `package.json`
4. A modified `tsconfig.json`

To make it as simple as possible for you, here are both the modified `package.json` and `tsconfig.json` files you will need. There may be slight modifications needed for your particular library but this will help get you there.

When you have developed, tested and are now ready to publish your library, follow these steps.

### 1. Replace package.json with simpler package

Copy/Paste the current package.json contents to a file where you can copy it back in a moment.
Temporarily replace `package.json` contents with:

*Bump version number. Replace `your-library` with the name of your library where applicable.*
```
{
  "name": "ng2-your-library",
  "version": "0.0.0",
  "license": "MIT"
}
```

### 2. Replace tsconfig.json

Copy/Paste the current tsconfig.json contents to a file where you can copy it back in a moment.
Temporarily replace `tsconfig.json` contents with:

*Replace `your-library` with the name of your library where applicable.*
```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES5",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "inlineSourceMap": true,
        "inlineSources": true,
        "declaration": true,
        "moduleResolution": "node"
    },
    "files": [
        "typings/main.d.ts",
        "ng2-your-library.ts"
    ]
}
```

## Test Publish

```
tsc
```

Verify that `*.js` files and a `*.d.ts` declaration file was created for `ng2-your-library` in the root. 

If everything compiled properly with no errors and you **feel very confident that everything is ready to go**, then publish to npm:

```
npm publish
```

Your library should be on npm now. You can search for it [here](https://www.npmjs.com/) to see.

**IMPORTANT**: Now paste back the original contents of `package.json` and `tsconfig.json` for your repo since that's your working setup.

#### Thank you for contributing to the community. We love you.
