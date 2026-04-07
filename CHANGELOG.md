## 0.1.5

## 0.1.4

### Change

- Updated `@types/node` from 22.13.14 to 25.0.3
- Updated `@playform/build` from 0.2.1 to 0.2.6
- Changed package author email from `Source/Open@PlayForm.LTD` to
  `Source/Open@PlayForm.Cloud`
- Changed package author URL from `HTTPS://PlayForm.LTD` to
  `HTTPS://PlayForm.Cloud`
- Replaced `Promise.all()` with `Promise.allSettled()` in pipeline execution for
  better error resilience

## 0.1.3

### Change

- Updated `@types/node` from 22.10.5 to 22.13.14
- Updated `deepmerge-ts` from 7.1.3 to 7.1.5
- Refactored core module imports to use Node.js protocol syntax (`node:url`,
  `node:fs/promises`)
- Improved asynchronous pipeline handling with Promise chaining
- Optimized file system operations:
    - Direct use of `mkdir`, `stat` and `writeFile` from `node:fs/promises`
    - Simplified recursive directory creation logic
- Enhanced error handling and logging consistency
- Reordered interface imports and destructuring patterns
- Updated package.json metadata formatting (emoji position adjustments)

### Add

- New file update tracking system with `Current` promise chain
- Explicit directory creation before file writes
- Improved logging conditional checks for failed/accomplished operations

## 0.1.2

### Change

- Updated `@types/node` from 22.5.0 to 22.10.5
- Updated `deepmerge-ts` from 7.1.0 to 7.1.3
- Updated `fast-glob` from 3.3.2 to 3.3.3
- Updated `@playform/build` from 0.1.4 to 0.2.1
- Minor code formatting changes

### Add

- Added `Interface` type imports to multiple files.
- Added a `DEPENDENTS.md` file to track dependent repositories.
- Updated `.npmignore` to exclude `docs/` directory.
- Added badges for dependents to `DEPENDENTS.md`.
- Updated `README.md` to remove the summary section and point to `CHANGELOG.md`
  for change history.
- Updated `package.json` author information:
    - Changed author email from `Source/Open@PlayForm.Cloud` to
      `Source/Open@PlayForm.Cloud`
    - Changed author URL from `HTTPS://PlayForm.Cloud` to
      `HTTPS://PlayForm.Cloud`

### Removed

- Removed `Summary.md` file.
- Removed `Documentation/` directory.

## 0.1.1

### Change

- Updated `@types/node` from 20.14.12 to 22.5.0
- Updated `@playform/build` from 0.1.2 to 0.1.4
- Minor code formatting changes

### Add

- Added `.npmignore` file to exclude unnecessary files from the published
  package.

## 0.1.0

### Change

- Updated version to 0.1.0
- Updated dependencies, including `@types/node`, `deepmerge-ts`, and
  `@playform/build`
- Updated README.md with simplified language and improved formatting.
- Refactored code for better readability and consistency.

### Add

- Added `Run` script to `package.json` for easier development workflow.

## 0.0.6

### Change

- Updated version to 0.0.6
- Updated dependencies:
    - `@types/node` to 20.14.2
    - `deepmerge-ts` to 7.0.3
- Moved `@playform/build` from `devDependencies` to `peerDependencies`.

### Add

- Added more detailed usage examples in README.md.

## 0.0.5

### Change

- Updated version to 0.0.5
- Updated dependencies:
    - `@playform/build` to 0.0.9
    - `@playform/document` to 0.0.7
- Added optional peer dependencies for `@playform/build` and
  `@playform/document`.
- Improved code documentation and comments.

## 0.0.4

### Change

- Updated version to 0.0.4
- Updated dependencies:
    - `@types/node` to 20.12.12
    - `deepmerge-ts` to 7.0.1
- Moved `@playform/build` from `devDependencies` to `peerDependencies` and
  marked it as optional.

### Add

- Added `Document` script to package.json

## 0.0.3

### Change

- Updated version to 0.0.3
- Updated dependencies:
    - `@types/node` to 20.12.11
    - `@playform/build` to 0.0.8
- Updated package description to use an em dash instead of a period.
- Updated repository URLs in `package.json` to use HTTPS.
- Updated `package.json` with new author information.
- Updated README.md with new repository links.
- Updated code to use `@Function` prefix for imports.

### Add

- Added `javascript` and `playform` keywords to `package.json`.

## 0.0.2

### Change

- Updated version to 0.0.2.
- Added the `Document` script to `package.json`.

### Add

- Added `@playform/document` as a dependency.

## 0.0.1

- Initial release.
