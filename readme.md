# React Pods Architecture Boilerplate

This is a boilerplate template designed to help you structure your React projects using a **Pods architecture**. This architecture organizes your application into feature-based modules (or "pods"), making it easier to manage, scale, and maintain over time.

The boilerplate is built with **Webpack** as the bundler, and comes with built-in support for **Material UI (MUI)**, **Sass**, and **CSS Modules**, ensuring a scalable and flexible foundation for styling your components. It's designed to be clean, efficient, and easily adaptable to different project needs.

## Features

- Organized **Pods Architecture** for modular and scalable code
- **Webpack** bundler configuration
- **Material UI (MUI)** integration for fast and responsive UI development
- **Sass** for powerful CSS pre-processing
- **CSS Modules** for scoped and maintainable styles

## Getting Started

Follow these steps to get the project up and running locally.

### 1. Install Dependencies

First, clone the repository and navigate to the project directory. Then run:

```bash
npm install
```

This will install all the necessary dependencies.

### 2. Start the Development Server

To start the development server, run:

```bash
npm start
```

This will launch the app on **http://localhost:8080**. Open it in your browser, and you'll see the app running!

The development server will automatically reload when you make changes to the code.

## Project Structure

The project follows a **pod architecture** to keep the code modular and scalable. Here's a breakdown of the main folders you'll find inside the `src` directory:

```bash
src/
├── global-css/
├── layout/
├── pods/
├── router/
└── scenes/
```

- **layout**: Contains the main layout components used across the application.
- **router**: This folder holds the routing configuration using `react-router-dom`, allowing navigation between different scenes.
- **scenes**: Each scene connects a specific layout with one or more pods, representing distinct views of the application.
- **global-css**: This folder includes global styles such as `reset`, `normalize`, and responsive breakpoints.
- **pods**: Following the pod approach, we encapsulate rich functionality into isolated pods. These pods act as islands of functionality, and in our experience, there's often a one-to-one mapping between a pod and a page.

## Pods Architecture

The project follows a **pod architecture** to encapsulate rich functionality in isolated units called pods. This approach helps maintain modularity and scalability as the application grows. Here's an overview of the **pods** structure:

```bash
pods/
└── my-pod/
	├── my-pod.container.tsx
	├── my-pod.component.tsx
	├── my-pod.vm.ts
	├── components/
	├── └── component.tsx
	├── └── component.module.scss
	└── api/
		└── api.ts
		├── api-model.ts
		├── api-model.ts
		├── api.mapper.ts
		└── api.repository.ts
```

- Each **pod** represents a self-contained functionality or feature of the application, such as a page or a section of a page. Typically, the mapping between a pod and a page is one-to-one, but there are exceptions, such as dashboards that may consume multiple pods, or reusable pods like a login component used in different areas of the app.
- Inside each pod, we organize our logic into a **container** and a **component**:
  - The **container** is responsible for handling the logic and connecting to the API, managing state, and passing data to the component.
  - The **component** focuses solely on rendering the UI and should remain as "dumb" as possible, relying on the container for the heavy lifting.

### Structure of a Pod

Within each pod, you'll find:

- **Container**: Handles state management and API communication.
- **Component**: Only responsible for rendering the layout and visual elements.
- **components** (optional): A folder where additional, smaller components can be stored, typically when breaking down the main component into reusable subcomponents.
- **API**: This folder contains the necessary files for interacting with the backend API. This includes fetching data and mapping it from API models to view models. The API logic is kept separate from the container to ensure better modularity.

### Benefits of Pod Architecture

- **Separation of concerns**: By splitting logic between containers and components, and isolating API-related logic, we maintain a clear separation of concerns, making the code easier to manage and scale.
- **Reusability**: Each pod encapsulates a specific functionality, which can be reused across different pages or features.
- **API encapsulation**: Instead of having a centralized API folder, API access is stored inside the relevant pod, keeping related assets close together. This also reduces the risk of accidental modifications affecting other parts of the application.

### Advanced Pod Concepts

1. **API handling**: The container does not directly deal with the raw API model. Instead, we introduce **mappers** to convert API models into **view models**. This keeps the view and logic separated from backend specifics.
2. **Repository pattern**: In some cases, the API communication is abstracted further into a **repository** that talks in "viewmodelish" language. This helps decouple the view from the data model entirely.

This structure not only promotes cleaner code but also prepares the app for real-world scenarios, where API integration, testing, and scalability are key factors.

## Conclusion

As you dive into the world of React with this boilerplate template, remember that every great journey starts with a solid foundation. You've now equipped yourself with a structure that champions modularity, reusability, and maintainability.

Feel free to modify and extend this template to suit your specific needs, and happy coding!
