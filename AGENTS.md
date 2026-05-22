<!-- Added: 2026-05-22 -->
## React Imports
Don't import `React` from 'react' — the JSX transform handles it automatically in React 18+.

<!-- Added: 2026-05-22 -->
## Linting
`react/prop-types` is disabled globally since the project doesn't use PropTypes or TypeScript. Motion/Framer custom props (`variants`, `initial`, `whileHover`) are used on `motion.*` components, not regular HTML elements.
