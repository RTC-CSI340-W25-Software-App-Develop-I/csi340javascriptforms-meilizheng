[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/wjgxuZtr)
# Form Submission and DOM Manipulation

## Learning Goals

- []**Understand how to prevent the default form submission behavior.**
- []**Capture form data using JavaScript.**
- []**Render form data dynamically to the DOM.**
- []**Implement event listeners to handle form submissions.**

## Handling Form Submissions in JavaScript

In this lab, you will learn how to handle form submissions in JavaScript by preventing the default behavior, capturing form data, and dynamically rendering that data to the DOM.

## Understanding Event Listeners and Preventing Default Behavior

In JavaScript, event listeners can be added to elements to handle specific actions, such as form submissions. By default, when an HTML form is submitted, it sends a request that causes the page to refresh. However, we often want to manage the form data with JavaScript instead of letting the form perform its default behavior. To do this, we can use e.preventDefault() to stop the form from reloading the page, giving us full control over what happens when the form is submitted.

## If you need a refresher on DOM Manipulation see the links below

- [Learn DOM Manipulation In 18 Minutes](https://www.youtube.com/watch?v=y17RuWkWdn8)
- [FreeCodeCamp Article on DOM Manipulation](https://www.freecodecamp.org/news/dom-manipulation-in-javascript/)

## Lab Deliverables

1. Capture Form Data

- Use querySelector to select the form from the DOM.
- Attach an event listener to the form that triggers when the form is submitted.
- Pass a callback function to the event listener that takes the event object as a parameter.
- Inside the callback function, use e.preventDefault() to prevent the form's default submission behavior.
- Capture the form data using e.target and store it in an object.

<details> <summary>Click Here to view solution</summary>

```
// Find the form with a query selector
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  // Prevent the form's default behavior
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };

  renderConfirmation(formData);
});
```

</details>

2. Render Form Data to the DOM

- Create a function called renderConfirmation that takes a parameter called formData.
- Create a heading element with the text content "Submission Confirmation".
- Create <p> tags for each value in the form and set their text content to the corresponding data from formData.
- Append the created elements to the section in the DOM to display the confirmation message.

<details> <summary>Click Here to view solution</summary>

```
const renderConfirmation = (formData) => {
  const h2 = document.createElement("h2");
  h2.textContent = "Submission Confirmation";

const nameP = document.createElement("p");
nameP.textContent = formData.name;

const emailP = document.createElement("p");
emailP.textContent = formData.email;

const phoneP = document.createElement("p");
phoneP.textContent = formData.phone;

const reasonP = document.createElement("p");
reasonP.textContent = formData.reason;

const messageP = document.createElement("p");
messageP.textContent = formData.message;

const section = document.querySelector("section");
section.innerHTML = "";

section.append(h2, nameP, emailP, phoneP, reasonP, messageP);
};

```

</details>

## Submission Instructions

Push your code to GitHub.
Submit the link to your GitHub repository URL.
