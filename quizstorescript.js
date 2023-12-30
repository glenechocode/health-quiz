// Initialize AWS Amplify and configure it with your config
Amplify.configure(config);

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded'); // Debugging line

    // GraphQL query to list quiz data
    const listQuizData = `
      query ListQuizData {
        listQuizData {
          items {
            id
            QuizName
            Question
            createdAt
            updatedAt
          }
        }
      }
    `;

    // Function to fetch and populate quiz names in the dropdown
    async function populateQuizDropdown() {
        try {
            console.log('Entering populateQuizDropdown'); // Debugging line

            // Use the API module to make the GraphQL query
            const quizData = await API.graphql(graphqlOperation(listQuizData));
            console.log('Received quizData:', quizData); // Debugging line
            const quizzes = quizData.data.listQuizData.items;

            // Select the dropdown element
            const quizSelector = document.getElementById('quizSelector');

            if (!quizSelector) {
                console.error("Element with ID 'quizSelector' not found"); // Debugging line
                return;
            }

            // Clear existing options
            quizSelector.innerHTML = '<option value="">Select a Quiz</option>';

            // Populate the dropdown with quiz names
            quizzes.forEach((quiz) => {
                const option = document.createElement('option');
                option.value = quiz.id; // Set a unique value for each quiz (e.g., ID)
                option.text = quiz.QuizName; // Set the display text to the quiz name
                quizSelector.appendChild(option);
            });

            console.log('Dropdown populated successfully'); // Debugging line
        } catch (err) {
            console.error("Error fetching and populating quizzes:", err);
        }
    }

    // Call the function to populate the dropdown on DOM load
    populateQuizDropdown();
});
