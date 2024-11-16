# Code Patterns

## Components
- Each component gets a folder in the /src/components folder, into which are placed:
-- its tsx file
-- any scss file
-- any API file
-- any reducer file
-- any type file(s)
- Any sub-componenets specific to this componenet live in a components folder within the above-mentioned folder

Example:

```
/src
  /components
    /SomeComponent
      /components
        /SomeSubComponentA.tsx
        /SomeSubComponentB.tsx
      /SomeComponent.tsx
      /SomeComponenet.scss
```
