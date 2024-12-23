## Mark Volkmann - Flow - Am I Your Type?

* ["Flow - Am I Your Type?"](https://www.youtube.com/watch?v=Eti6_bSRgHU&t=304s)  by Mark Volkmann. Sept. 2017.
* [flow-typed](https://flow-typed.github.io/flow-typed/#/?id=flow-typed)

Flow is an open source tool written in OCaml from Facebook that is "a static type checker, designed to find type errors in JavaScript programs". Its parser is available as a compiled-to-JavaScript module published to [npm, named flow-parser](https://www.npmjs.com/package/flow-parser). JavaScript packages which make use of parsing Flow-typed JavaScript can use this to generate Flow's syntax tree with annotated types attached.

Flow supports adding types gradually to variables, parameters, return values, object properties, and array elements. Flow even catches some errors without adding types by using type inference and flow analysis.

Flow supports many types including primitives, functions (with specified signatures), arrays, objects, built-in classes, custom classes, and generic (parameterized) classes.

Flow is similar to Microsoft TypeScript and mostly uses the same syntax for specifying types. However, TypeScript is also a transpiler. One benefit of using Flow is that Babel can be used for transpiling. Babel typically implements new ECMAScript features before TypeScript.

This talk covers everything you need to know to get started using Flow, including integration with Babel, ESLint, editors, and IDEs.

Mark Volkmann
OBJECT COMPUTING, INC.

Mark Volkmann is a partner at Object Computing, Inc. (OCI) in St. Louis where he has provided software consulting and training since 1996. As a consultant, Mark has assisted many companies with JavaScript, Node.js, React, AngularJS, jQuery, and Java application development. He has created and taught many courses on topics including React, AngularJS, Node.js, jQuery, JavaScript, HTML5, CSS3, Ruby, Java, and XML. Mark is a frequent presenter at St. Louis area user groups. He has written for XML Journal and the No Fluff Just Stuff magazine. He has presented at the MidwestJS, Jfokus, Strange Loop, No Fluff Just Stuff, and XML DevCon conferences. Mark frequently writes articles on various software development topics. These can be found at https://objectcomputing.com/resources....


## Is the facebook flow transpiler project still alive? 

The Flow type checker developed by Facebook (now Meta) is still an active project in 2024. However, its popularity and community activity have declined in comparison to TypeScript. Flow is still maintained and used internally by Meta for some of its projects, but the broader JavaScript/TypeScript community has largely gravitated towards TypeScript due to its comprehensive feature set, community support, and integration with the broader JavaScript ecosystem.


As of my last update in May 2024, the Flow type checker developed by Facebook (now Meta) is still an active project. However, its popularity and community activity have declined in comparison to TypeScript. Flow is still maintained and used internally by Meta for some of its projects, but the broader JavaScript/TypeScript community has largely gravitated towards TypeScript due to its comprehensive feature set, community support, and integration with the broader JavaScript ecosystem.

## Flow repo and Documentation

1. **Official GitHub Repository**: Check the [Flow GitHub repository](https://github.com/facebook/flow) for the latest commits, releases, and issues. This will give you a clear picture of its current activity and support.
2. **Flow Documentation**: The [official Flow documentation](https://flow.org/) is another resource to see the latest updates and guides.


## flow-remove-types


To strip Flow types from a JavaScript file and get the pure JavaScript version, you can use the 'flow-remove-types' package. 
Here is the help:

```
➜  flow-learning git:(main) ✗ npx flow-remove-types --help        
Usage: flow-remove-types [options] [sources] 

Options:
  -h, --help        Show this message
  -v, --version     Prints the current version of flow-remove-types
  -i, --ignore      Paths to ignore, Regular Expression
  -x, --extensions  File extensions to transform
  -o, --out-file    The file path to write transformed file to
  -d, --out-dir     The directory path to write transformed files within
  -a, --all         Transform all files, not just those with a @flow comment
  -p, --pretty      Remove flow types without replacing with spaces, 
                    producing prettier output but may require using source maps
      --ignore-uninitialized-fields
                    Removes uninitialized class fields (`foo;`, `foo: string;`)
                    completely rather than only removing the type. THIS IS NOT
                    SPEC COMPLIANT! Instead, use `declare foo: string;` for
                    type-only fields.
  -m, --sourcemaps  Also output source map files. Optionally pass "inline"
  -q, --quiet       Does not produce any output concerning successful progress.

Examples:

Transform one file:
  flow-remove-types --out-file output.js input.js

Transform many files:
  flow-remove-types --out-dir out/ input1.js input2.js

Transform files in directory:
  flow-remove-types --out-dir out/ indir/

Transform files with source maps:
  flow-remove-types --out-dir out/ indir/ --sourcemaps

Transform files with inline source maps:
  flow-remove-types --out-dir out/ indir/ --sourcemaps inline

Transform stdin:
  cat input.js | flow-remove-types > output.js
```
> [!NOTE]
> The input code has to have the `@flow` comment to be processed by `flow-remove-types`.

## Removing Flow Types from JavaScript Code

Here's a simple Node.js script that demonstrates how to do this:

`file="strip-flow-types.mjs`
```javascript
import flowRemoveTypes from 'flow-remove-types';
import { readFileSync } from 'fs';

try {
  const fileContent = readFileSync('example-flow.js', 'utf8');
  const strippedFileContent = flowRemoveTypes(fileContent);
  console.log("\nStripped content from file:");
  console.log(strippedFileContent.toString());
} catch (error) {
  console.log("Error reading file:", error.message);
}
```

This script does the following:

1. We import the `flow-remove-types` package and the `readFileSync` function from the `fs` module.
2. As an example of how to strip types from a file, we attempt to read a file named 'example-flow.js', 
3. strip its types, and print the result. 
