# Copilot Instructions for Career Portfolio

## Overview
This project is a personal portfolio site built with Angular, designed for job applications. It features a single-page layout with sections for Hero, About, Experience, Projects, Skills, and Contact.

## Architecture
- **Main Components**: The application is structured around several key components:
  - `Header`: Displays the navigation.
  - `Hero`: The introductory section.
  - `About`: Information about the individual.
  - `Experience`: Lists job experiences.
  - `Projects`: Showcases projects.
  - `Skills`: Highlights skills.
  - `Contact`: Provides contact information.

- **Routing**: The application uses Angular's router for navigation. The routes are defined in `app.routes.ts`, which is integrated into the application configuration in `app.config.ts`.

## Developer Workflows
- **Setup**: To set up the project, run:
  ```bash
  npm install
  npm start
  ```
  This will start the development server at [http://localhost:4200](http://localhost:4200).

- **Testing Production Build**: After building the project with:
  ```bash
  npm run build:github
  ```
  Serve the built folder using:
  ```bash
  npx serve dist/career-portfolio/browser -p 4200
  ```

## Project-Specific Conventions
- **Component Structure**: Each component has its own directory containing:
  - `*.ts`: TypeScript file defining the component logic.
  - `*.html`: Template file for the component's view.
  - `*.scss`: Styles specific to the component.

- **Job Interface**: The `Job` interface in `experience.ts` defines the structure for job entries, ensuring consistency across job listings.

## Integration Points
- **Cross-Component Communication**: Components communicate through Angular's dependency injection and service providers. For example, the `Title` service is injected into the main app component to manage the document title.

- **Error Handling**: Global error listeners are provided in the application configuration to catch and handle errors effectively.

## Examples
- **Adding a New Job**: To add a new job to the `Experience` component, create a new object adhering to the `Job` interface and push it to the `jobs` array.
