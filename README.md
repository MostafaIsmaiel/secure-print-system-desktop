# Secure Print System Desktop

A secure desktop application for generating and verifying printed codes, built with Electron, React, TypeScript, and Vite.

## Features

- **Generate Codes**: Create secure printed codes with customizable parameters
- **Verify Codes**: Validate and verify printed codes
- **Cross-Platform**: Desktop application compatible with Windows, macOS, and Linux
- **Modern UI**: Beautiful interface built with React and Tailwind CSS

## Tech Stack

- **Electron** - Cross-platform desktop framework
- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## Project Structure

```
secure-print-system-desktop/
├── electron/           # Electron main process
│   └── main.ts
├── src/               # React application source
│   ├── features/      # Feature modules
│   │   ├── printed-code/
│   │   └── shared/
│   ├── pages/         # Application pages
│   │   ├── generate.tsx
│   │   └── verify.tsx
│   ├── lib/           # Utilities
│   └── assets/        # Static assets
├── public/            # Public assets
└── dist/              # Build output
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MostafaIsmaiel/secure-print-system-desktop.git
cd secure-print-system-desktop
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the application in development mode:

```bash
npm run dev
```

This will start both the Vite dev server and Electron app concurrently.

### Building

Build the React application:

```bash
npm run build:react
```

Run the production build:

```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run dev:react` - Start only the Vite dev server
- `npm run dev:electron` - Start only Electron
- `npm run build:react` - Build the React application
- `npm start` - Build and run the production app

## License

This project is private and not licensed for public use.

## Author

**Mostafa Ismaiel**
