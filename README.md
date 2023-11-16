## Overview

Perspective Funnel Preview is a Next.js application designed to let users preview their marketing funnels. It allows for the upload of a funnel JSON file, generating a mobile preview of the funnel as it would appear on a typical mobile device. The application focuses on desktop browser compatibility.

## Goal

The primary goal is to provide users with the ability to preview their funnels from a JSON file. The application is designed for desktop use, emphasizing smooth operation and a user-friendly experience. It includes features for viewing the funnel in a simulated mobile viewport format and navigating between different funnel pages.

## Features

- **Funnel JSON Upload**: Users can select a funnel JSON file from their computer.
- **Mobile Preview**: Generates a mobile preview of the funnel in a typical viewport (e.g., 375x600px).
- **Sequential File Uploads**: Supports uploading new files one after another without needing to refresh the page.
- **Non-Interactive Preview**: The preview is static; interactive elements like buttons are displayed but non-functional.
- **Error Handling**:
  - 🚫 Only accepts JSON files. Uploading files in other formats triggers an error modal.
  - 🚫 Validates the structure of the uploaded JSON file. If the structure is incorrect or incomplete, it displays an error modal.

## Technologies Used

- 🚀 Next.js
- ✨ TypeScript
- 🎨 Tailwind CSS
- 🧪 React Testing Library / Jest


## Project Structure

### Components

Located under the `src/components/ui` directory, each component is organized within its own folder following the structure below:

- `ComponentNameFolder/`
  - `ComponentName.tsx`: This file contains the component logic.
  - `index.tsx`: This file re-exports `ComponentName.tsx` for easier imports.
  - `ComponentName.test.tsx`: This file, when present, contains tests for the component. Note that not all components may have an associated test file.

### Utilities

Helper functions are located under `src/utils`.

### Types

Reusable TypeScript types are defined in `src/types.ts`, and component-specific types are collocated in the same file as the component.

### FunnelData

Files with different test data for testing are located under the `funnelData` folder at the root of the project.

## Getting Started

To set up the project locally:

```bash
# Clone the repository
git clone git@github.com:Iannes/funnel-preview.git

# Install dependencies
yarn

# Run the development server
yarn dev

# Run tests
yarn test
yarn test:watch
```
