import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
what? why? How?
why React ?
-to develop
SPA: Single Page Application
High popularity

What is a component in React? => Components let you split the UI into independent, resuable pieces, and think about each piece in isolation.
What are Props ? => Input to component
What is State in React ? Dynamic Data of a React Component

Types of Components :
1) React Functional Components (RFC)
2) React Class Components (RCC)

JSx
Transpiler ?
“A transpiler is a tool designed to automatically transform source code made up with a source high-level programming language, into another source code made with a target high-level programming language, which should be algorithmic-equivalent”.

what is babel ?
Babel is a JavaScript transpiler, meaning it converts a newer version of ECMAScript, such as ES9, to a standard version (ES5).



*/