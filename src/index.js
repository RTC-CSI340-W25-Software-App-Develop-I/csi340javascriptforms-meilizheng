// Select the form and confirmation section
const form = document.querySelector('form');
const confirmationSection = document.querySelector('.confirmation');

// Attach the event listener to handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Capture form data
    const formData = {};
    const formElements = e.target.elements; // Get form elements

    for (let element of formElements) {
        if (element.name) {
            formData[element.name] = element.value; // Map name-value pairs
        }
    }

    // Call the renderConfirmation function to display the captured data
    renderConfirmation(formData);
});

// Function to render the confirmation message
function renderConfirmation(formData) {
    // Clear previous confirmation content
    confirmationSection.innerHTML = '';

    // Create a heading element
    const heading = document.createElement('h2');
    heading.textContent = 'Submission Confirmation';
    confirmationSection.appendChild(heading);

    // Create a paragraph for each key-value pair in the formData object
    for (const [key, value] of Object.entries(formData)) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        confirmationSection.appendChild(paragraph);
    }
}
