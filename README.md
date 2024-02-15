# Next UIBlogTemplate

The Next UIBlogTemplate is a powerful foundation for crafting your very own blog website using Next.js, coupled with sleek UI components from Next UI. This template not only jumpstarts your project but also ensures a responsive and customizable blog experience. Key features include dynamic routing, code splitting, and server-side rendering.

## Tech Stack

### Frontend

- **Next.js (v14.0.0):** A React framework for building server-rendered and statically generated web applications.
- **@nextui-org/react (v2.1.13):** UI components for React applications, providing a consistent and customizable design system.
- **Framer Motion (v10.16.4):** A motion library for React that makes it easy to create stunning animations.
- **Next Themes (v0.2.1):** Enables theme support in Next.js applications for dynamic theme switching.
- **React (v18) & React DOM (v18):** The core libraries for building user interfaces with React.

### State Management

- **Redux Toolkit (v1.9.7):** A set of tools for efficient Redux development, simplifying common patterns and reducing boilerplate.

### Styling

- **Tailwind CSS (v3.3.5):** A utility-first CSS framework that allows for rapid and maintainable styling.

### Markdown Processing

- **Gray Matter (v4.0.3):** Parses front-matter from markdown files, making it easy to extract metadata.
- **Remark (v15.0.1) & Remark HTML (v16.0.1):** Markdown processor and HTML compiler for transforming markdown content.

### Code Quality and Tooling

- **TypeScript (v5):** Adds static typing to JavaScript, enhancing code quality and developer productivity.
- **ESLint (v8):** A linter tool for identifying and fixing problems in JavaScript/TypeScript code.
- **PostCSS (v8) & Autoprefixer (v10):** Tools for transforming styles with JavaScript plugins and automatically adding vendor prefixes.

### Build and Deployment

- **Next.js (v14.0.0):** Used for building and serving the application.
- **Vercel Analytics (v1.1.1):** Analytics integration for Vercel deployments.

## Scripts

- **dev:** Run the development server with `next dev`.
- **build:** Build the application for production using `next build`.
- **start:** Start the production server with `next start`.
- **lint:** Lint the project using `next lint`.

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.
4. Build for production using `npm run build`.
5. Start the production server with `npm start`.

## Project Structure

The project is organized into the following key components:

- **pages:**
  This directory houses the various pages of your blog, including the home page and individual post pages.

- **components:**
  Here, you'll find reusable components such as the navbar, footer, and post components, keeping your codebase modular and clean.

- **public:**
  Static assets like images and icons are stored in this directory.
- **sampleposts:**
  Discover sample blog posts in Markdown format. Easily add your own by creating Markdown files in this directory.
- **next.config.js:**
  The configuration file for Next.js, allowing you to tailor the behavior of your blog.
- **package.json:**
  A manifest of your project, listing dependencies and scripts.

## Usage

Once your project is set up, unleash your creativity by customizing components, styles, and content according to your preferences. To add new posts, simply create Markdown files in the sampleposts directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
