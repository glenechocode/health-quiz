// Configure AWS Amplify with your configuration


// Configure AWS Amplify with your configuration
Amplify.configure({
  aws_project_region: 'us-east-1', // Replace with your AWS region
  aws_appsync_graphqlEndpoint: 'https://your-appsync-api-endpoint-url.appsync-api.us-east-1.amazonaws.com/graphql', // Replace with your AppSync API endpoint URL
  aws_appsync_region: 'us-east-1', // Replace with your AppSync region
  aws_appsync_authenticationType: 'API_KEY', // or 'AMAZON_COGNITO_USER_POOLS'
  aws_appsync_apiKey: 'da2-fod3kqpexzhvra77p62aeey5pu', // Replace with your API key if using API_KEY authentication
});

// ... rest of your JavaScript code ...


//aws_appsync_graphqlEndpoint": "https://7y6ra3ectrbhliueehzq454tvm.appsync-api.us-east-1.amazonaws.com/graphql",
//    "aws_appsync_region": "us-east-1",
//    "aws_appsync_authenticationType": "API_KEY",
//    "aws_appsync_apiKey": "da2-fod3kqpexzhvra77p62aeey5pu",
//    "aws_cognito_identity_pool_id": "us-east-1:1a61f602-13a8-4350-b1a1-812d3218bf52",
//    "aws_cognito_region": "us-east-1",
//   "aws_user_pools_id": "us-east-1_MHFUOHxN4",
//   "aws_user_pools_web_client_id": "6ap5kj7sgp3sv51b9v2rt793it",
//    "oauth": {},
//    "aws_cognito_username_attributes": [],
//    "aws_cognito_social_providers": [],
//    "aws_cognito_signup_attributes": [
//    




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

    if (!quizSelector) {
      console.error("Element with ID 'quizSelector' not found");
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

    console.log('Dropdown populated successfully');
  } catch (err) {
    console.error("Error fetching and populating quizzes:", err);
  }
}

// Call the function to populate the dropdown on DOM load
document.addEventListener('DOMContentLoaded', function() {
  populateQuizDropdown();
});
