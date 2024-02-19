# Frontend Mentor - Age calculator app

![My attempt at the Age calculator app coding challenge](./appexample.png)

## Welcome! 👋

This challenge really exposed my weaknesses, notably Javascript. Nonetheless it was a very good experience and fun (although stressful) to do!

After some quick testing, the app does the following:
- Displays the age for any valid birth date.
- Displays relevant errors.
- Animates the age output.

Devices used for testing:
- Firefox browser (desktop)
- Firefox browser (mobile)
- Firefox responsive design mode (Custom 320px width, Android S10, Android S20 and iPad OS 14.7.1)
  
**Note:** The page was designed for devices starting with a minimum width of 320px, then scaled up using 2 breakpoints: 640px and 1800px.

### The HTML/CSS side was relatively straightforward, but the JS was pretty hectic for me and I admittedly needed to do alot of googling, but here are the condensed steps that led to me completing the script:

#### Initialization on Page Load:
How: Implemented an event listener for DOMContentLoaded to trigger the JavaScript code. This ensures the script interacts with fully loaded elements.

#### Variable Initialization:
How: Selected form elements using document.getElementById and querySelectorAll to create JavaScript references to these HTML elements. This setup allows the script to easily read inputs and display outputs or errors.

#### Utility Functions:
How: Developed custom JavaScript functions. isNumber checks for numeric input using a regular expression, and clearErrorStyles and applyErrorStyles use class manipulation to alter the appearance of form elements, enhancing user feedback.

#### Age Calculation Logic:
How: Created a function that takes birthdate and current date, calculates the difference in years, months, and days. Special attention was given to the intricacies of date calculations, like handling the end of months and leap years, using JavaScript's Date object.

#### Displaying Calculated Age:
How: Utilized DOM manipulation to update the text content of specific span elements. This function dynamically alters the innerHTML of these elements to show the calculated age.

#### Date Validation Mechanism:
How: Built a comprehensive validation function that checks each input field for common errors such as empty values, non-numeric characters, and unrealistic date entries. It utilizes conditional statements to enforce these rules and provide appropriate feedback.

#### Form Submission Customization:
How: Overrode the default form submission behavior by adding an event listener to the form's submit event. This modification calls the validation function, preventing the form from submitting if the date is invalid and proceeding with the age calculation if it is valid.

### Useful resources:
- W3Schools for basic syntax and examples.
- Stack Overflow for troubleshooting specific issues and community advice.
- GPT-4 for guidance, code optimization suggestions, and best practices.
- Frontend Mentor for growing your skillset and the awesome community.


> [!NOTE]
> *As always, feedback is welcome!*
