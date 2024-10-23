# Expense Tracker App - Learn a JS Framework Assignment

## What framework did you pick and why?

For this assignment, I chose **React** as my front-end JavaScript framework. I selected React because of its **component-based architecture**, which aligns perfectly with building modular and reusable UI components. React’s virtual DOM ensures efficient updates and rendering, which is essential for an interactive app like an expense tracker where the UI needs to change dynamically as users add or delete expenses and budgets.

React also has a large community and extensive documentation, making it easier to find learning resources and solve potential issues. Moreover, its popularity in the industry ensures that mastering React provides long-term benefits. The availability of hooks like `useState`, `useEffect`, and `useContext` for managing state makes React a powerful choice for creating complex applications without the need for additional state management libraries.

## What about that framework appealed to you, for this project?

React appealed to me for this project primarily because of its **ease of state management** and **declarative UI updates**. In an expense tracker, keeping the user interface synchronized with the application state is critical. React's ability to efficiently update the UI using its virtual DOM minimizes performance bottlenecks when there are frequent state changes, such as when users add or remove budgets and expenses.

Moreover, React's **Context API** allowed me to manage global state effectively without having to pass props down through multiple levels of components, simplifying the code and making it more maintainable. The flexibility React offers with **third-party libraries** such as `react-icons` for icons and `react-hot-toast` for notifications also enriched the user experience with minimal effort.

Finally, React’s support for **custom hooks** and reusable functional components helped streamline the development process, enabling me to focus on building out the features rather than managing complex configurations.

## What alternative frameworks did you consider?

Before choosing React, I considered the following alternatives:

1. **Vue.js**: I briefly considered Vue due to its **simple learning curve** and the fact that it doesn’t require a complex setup. Vue’s template-based syntax and reactivity system are intuitive, but I ultimately chose React because of its broader ecosystem and stronger community support.
   
2. **Angular**: Angular is a **comprehensive framework** with a robust set of built-in tools for large-scale applications, including routing and dependency injection. However, I felt that Angular’s steep learning curve and complexity were unnecessary for this smaller-scale project.

3. **Svelte**: Svelte offers an innovative approach by compiling components into highly efficient imperative code, providing better performance. However, Svelte’s smaller community and lack of third-party tools made it less appealing compared to React.

In the end, React’s balance of **flexibility, performance, and community support** made it the best choice for this project.

## What resources did you read/watch/listen to?

I consulted a variety of resources to learn React and implement this project:

- **React Official Documentation** (https://reactjs.org/docs/getting-started.html): This was my primary resource for understanding the core concepts of React, such as components, state management, and hooks.
  
- **YouTube Tutorials**:
  - *"React JS Crash Course"* by Traversy Media: A great introduction to the basics of React and its key features.
  - *"Build a Budget App in React"* by Web Dev Simplified: This tutorial provided useful insights on building a similar app and helped me structure my code.

- **React Context API Documentation**: I consulted this documentation to understand how to manage global state and share data across components without prop drilling.

- **React Icons and React Hot Toast Documentation**:
  - React Icons (https://react-icons.github.io/react-icons/)
  - React Hot Toast (https://react-hot-toast.com/docs)

- **Tailwind CSS Documentation** (https://tailwindcss.com/docs): Since I used Tailwind CSS for styling, I referred to this to ensure the app remained responsive and cleanly styled.

These resources helped me get a solid grasp of React and its ecosystem, enabling me to build the project effectively.

## Describe the site you built for this assignment. What does it do? What components or features of the framework did you explore for this project?

The application I built is a **simple Expense Tracker** that allows users to:

1. **Add budgets**: Users can create budgets with a name and maximum spending limit. 
2. **Add expenses**: Users can add expenses under specific budgets, providing a description and amount.
3. **View and delete expenses**: Users can view a list of all expenses associated with each budget and delete individual expenses.
4. **Track progress**: A progress bar on each budget card dynamically updates based on the percentage of the budget spent, changing colors at key thresholds (50%, 75%).

### Key Components and Features:
- **Functional Components**: Each part of the app, like budget cards, add modals, and expense tracking, is built as a separate component, keeping the code modular and reusable.
  
- **React Hooks**: The app makes extensive use of `useState` for managing local state and `useContext` for managing global state. I also implemented `useEffect` for side effects like updating the local storage when budgets or expenses change.
  
- **Context API**: The global state of the application (budgets and expenses) is managed using the Context API, which allows different components to access and update shared data without prop drilling.
  
- **Custom Hooks**: I created a custom hook, `useLocalStorage`, to persist data across browser sessions by saving and retrieving budgets and expenses from local storage.
  
- **Third-Party Libraries**:
  - **React Icons** for adding icons to the app for enhanced UI.
  - **React Hot Toast** for showing user-friendly toast notifications when actions like adding or deleting budgets/expenses occur.

- **Responsive Design**: The application is fully responsive, designed using **Tailwind CSS**, ensuring it works well across various screen sizes. The layout adjusts dynamically, with proper breakpoints to ensure a smooth user experience on mobile devices.

Overall, this project provided hands-on experience with React’s core features and its ecosystem, allowing me to build a functional, dynamic web application from scratch.
