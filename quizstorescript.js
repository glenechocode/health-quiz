import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';
import { API, graphqlOperation } from 'aws-amplify';

Amplify.configure(config);

document.addEventListener('DOMContentLoaded', async () => {
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
            // Use the API module to make the GraphQL query
            const quizData = await API.graphql(graphqlOperation(listQuizData));
            const quizzes = quizData.data.listQuizData.items;

            // Select the dropdown element
            const quizSelector = document.getElementById('quizSelector');

            // Clear existing options
            quizSelector.innerHTML = '<option value="">Select a Quiz</option>';

            // Populate the dropdown with quiz names
            quizzes.forEach((quiz) => {
                const option = document.createElement('option');
                option.value = quiz.id; // Set a unique value for each quiz (e.g., ID)
                option.text = quiz.QuizName; // Set the display text to the quiz name
                quizSelector.appendChild(option);
            });
        } catch (err) {
            console.error("Error fetching and populating quizzes:", err);
        }
    }

    // Call the function to populate the dropdown on DOM load
    populateQuizDropdown();
});
