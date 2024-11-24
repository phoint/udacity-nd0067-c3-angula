# My Store

**My Store** is an Angular application built with Angular 18.2.0. This project provides a framework for building scalable, modern, and responsive web applications. It includes a JSON server to manage mock API data for development purposes.

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
  - [Core Dependencies](#core-dependencies)
  - [Development Dependencies](#development-dependencies)
- [Development Server](#development-server)
- [Mock API with JSON Server](#mock-api-with-json-server)
- [Testing](#testing)
- [Build](#build)
- [License](#license)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** (Node Package Manager)
- **Angular CLI** (v18.2.4 or higher)  
  Install globally using:

  ```bash
  npm install -g @angular/cli

## Installation

To set up the project locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate into the project directory:
   ```bash
   cd udacity-nd0067-c3-angular
3. Install the required dependencies:
   ```bash
   npm install

## Scripts

The following scripts are defined in the `package.json` file:
|Scripts              |Description|
|:---                 |:---    |
|`npm start`          |Starts the Angular development server at http://localhost:4200/.|
|`npm run build`      |Builds the application for production in the dist/ folder.|
|`npm run watch`      |Builds the app in development mode and watches for file changes.|
|`npm test`           |Runs unit tests using Karma and Jasmine.|
|`npm run json-server`|Starts the JSON server for mock API data from src/assets/data.json.|

## Dependencies

### Core Dependencies

These are the essential libraries used by the application:

|Package    |	Version |	Description |
|:---       |:---       |:---           |
|`@angular/core`|	^18.2.0|	Core Angular framework.|
|`@angular/router`|	^18.2.0|	Routing and navigation module.|
|`rxjs`|    	~7.8.0|	Reactive extensions for JavaScript.|
|`zone.js`|	~0.14.10|	Zone-based execution context.|

### Development Dependencies

These tools assist in development and testing:

|Package|	Version|	Description|
|:---|:---|:---|
|`@angular/cli`|	^18.2.4|	CLI for managing Angular projects.|
|`json-server`|	^1.0.0|	Mock REST API server.|
|`typescript`|	~5.5.2|	TypeScript compiler.|

## Development Server

To start the Angular development server, use:
  ```bash
  npm start
  ```  
By default, the app runs at [http://localhost:4200/.](http://localhost:4200/)
The server will automatically reload if you modify any source files.

## Mock API with JSON Server

This project includes json-server to serve mock API data. To start the mock server, run:
  ```bash
  npm run json-server
  ```

The mock API will be available at http://localhost:3000/.
You can modify the mock data by editing the `src/assets/data` json file.

## Testing
To run unit tests, execute:
  ```bash
  npm test
  ```
The tests will run using Karma and Jasmine. Results will appear in the console and browser.

## Build
To build the application for production, run:
  ```bash
  npm run build
  ```

The build artifacts will be stored in the dist/ directory.

## License
This project is licensed under the MIT License.