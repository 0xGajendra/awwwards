<!-- Added: 2026-05-22 -->
## React Imports
Don't import `React` from 'react' — the JSX transform handles it automatically in React 18+.

<!-- Added: 2026-05-22 -->
## Linting
`react/prop-types` is disabled globally since the project doesn't use PropTypes or TypeScript. Motion/Framer custom props (`variants`, `initial`, `whileHover`) are used on `motion.*` components, not regular HTML elements.

<!-- Added: 2026-05-22 -->
## Dependency Management
Updated @vitejs/plugin-react to ^6.0.2 and react-use to ^13.14.3 to resolve peer dependency conflicts with vite@8.0.14 and react@18.3.1. The audit fix --force was used to resolve js-cookie vulnerability by downgrading react-use to a compatible version.
