# SWAPI

This project is a **React** application structured using **Clean Architecture** principles. The application leverages **Mantine UI** for styling, **React Router** for routing, **Zustand** for state management, and **React Query** for data fetching. This README provides an overview of the project structure, details on how it works, and instructions for setting up and running the project in a development environment.

## Table of Contents

-   [SWAPI](#swapi)
    -   [Table of Contents](#table-of-contents)
    -   [Project Structure](#project-structure)
        -   [How It Works](#how-it-works)
    -   [Getting Started](#getting-started)
        -   [Prerequisites](#prerequisites)
        -   [Installation](#installation)
        -   [Running the Project](#running-the-project)
        -   [Demo](#demo)

## Project Structure

The application is structured according to **Clean Architecture** principles, organizing code by **layers**. Below is an overview of the directories and their roles:

src/
├── application/ # Business logic and application state
│ ├── stores/ # State management using Zustand
│ └── usecases/ # Business use cases, handling application-specific logic
├── constants/ # Constants for paths, labels, and placeholders
├── domain/ # Core entities and interfaces, independent of any frameworks
│ ├── entities/ # Entity definitions (e.g., Resource)
│ └── repositories/ # Repository interfaces, outlining data access contracts
├── infrastructure/ # Implementation of data access, API clients, etc.
│ └── api/ # API clients (e.g., for fetching resources)
├── presentation/ # React components and views, the UI layer
│ ├── components/ # Reusable components (e.g., HeaderComponent, FilterComponent)
│ └── pages/ # Page components (e.g., ResourceListPage, LoginPage)
└── App.tsx # Main application file with routing setup

### How It Works

-   **Application Layer**: Contains application-specific logic, such as Zustand stores and use cases. This layer is responsible for managing the application state and orchestrating interactions between the UI and data access layers.
-   **Domain Layer**: Defines the core business logic and entities. This layer is framework-agnostic and includes repository interfaces and entities, making it reusable and easily testable.
-   **Infrastructure Layer**: Implements the repository interfaces and provides concrete data access logic, such as API calls to a backend server.
-   **Presentation Layer**: Handles the user interface with React components. It includes reusable components and page components, providing a clear separation between the UI and business logic.

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   **Node.js** (v14 or later)
-   **npm** (v6 or later) or **yarn**

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```
2. Navigate into the project directory:
    ```
    cd your-repository
    ```
3. Install the dependencies:
    ```
    npm install
    # or, if you prefer yarn:
    yarn install
    ```

### Running the Project

To start the development server, run the following command

```
npm start
# or
yarn start
```

### Demo

url: https://effulgent-alpaca-c0490b.netlify.app
username: admin
password: password
