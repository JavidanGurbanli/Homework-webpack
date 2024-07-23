# Webpack TypeScript Project

This project is a template for setting up a development environment with Webpack and TypeScript. It includes configurations for handling HTML, CSS, and image files.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:
   
   git clone <https://github.com/JavidanPB/Task-webpack.git>
   
   cd Homework-webpack
3. Install the dependencies:
   
	npm install

	npm run build

	npm start
	
### Project Structure
├── dist/                   # Compiled files

├── node_modules/           # Node.js modules

├── src/                    # Source files

│   ├── index.html          # HTML template

│   ├── index.ts            # TypeScript entry point

│   ├── greet.ts            # TypeScript module

│   ├── pblogo.png          # Image file

│   └── styles.css          # CSS file

├── .gitignore              # Git ignore file

├── LICENSE                 # License file (MIT License)

├── package-lock.json       # Package lock file

├── package.json            # NPM scripts and dependencies

├── tsconfig.json           # TypeScript configuration

└── webpack.config.js       # Webpack configuration

### Configuration
- package.json - Contains the dependencies and scripts for building and starting the project.

- webpack.config.js - Configuration for Webpack, including rules for TypeScript, CSS, and image files.

- src/index.ts - Entry point for the TypeScript application. Imports CSS and image files.

### License 
This project is licensed under the MIT License.
