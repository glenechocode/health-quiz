// Import Amplify and configuration
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';

// Configure Amplify with your AWS exports
Amplify.configure(config);

// GraphQL query to list quizzes
const listQuizzes = /* GraphQL */ `

console.log ("point A");

  query ListQuizData {
    listQuizData {
      items {
        id
        QuizName
        Question
      }
    }
  }
`;

// Function to fetch quizzes and populate dropdown
async function fetchQuizzes() {
  try {
    const quizData = await API.graphql(graphqlOperation(listQuizzes));
    const quizzes = quizData.data.listQuizData.items;
    
    // Get the quizSelector element from the DOM
    const quizSelector = document.getElementById('quizSelector');
    
    // Populate the quizSelector dropdown with quizzes
    quizzes.forEach(quiz => {
      let option = document.createElement('option');
      option.value = quiz.id; // Using the quiz ID as the value
      option.textContent = quiz.QuizName; // Using the quiz name as the text content
      quizSelector.appendChild(option);
    });

  } catch (err) {
    console.error("Error fetching quizzes: ", err);
  }
}

// Call fetchQuizzes to populate the dropdown when the script loads
fetchQuizzes();
