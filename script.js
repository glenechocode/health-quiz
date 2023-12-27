
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let results = [];
    for (let i = 1; i <= 5; i++) {
        let answer = document.getElementById('q' + i).value;
        results.push(answer);
    }

    const prompt = "You are a high school science teacher. The five questions from the Health Quiz app are: What is the benefit of exercise? Why do people take magnesium? What are the risks of being overweight? What is the benefit of protein? What is the benefit of taking a multivitamin? a student provided these answers to the above questions. give them a grade and a very short summary. The answers are "
    

    var combinedResults = results.join(' ');
//  document.getElementById('displayResults').textContent = prompt + combinedResults;

//call to Lamda API 


// Replace with your actual API Gateway URL
const apiUrl = 'https://t66ueyich4.execute-api.us-east-1.amazonaws.com/default/OpenAI';

// Function to call the API
async function callLambdaAPI() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl, {
      method: 'GET', // or 'POST' if your Lambda function expects a POST request
      headers: {
        'Content-Type': 'application/json',
        // Additional headers can go here as needed
      },
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // Parse the JSON response
    const result = await response.json();
    console.log('Response from Lambda:', result);

    // Do something with the result
    // Here you might update the DOM or return the result, etc.
  } catch (error) {
    console.error('Failed to fetch from the Lambda function:', error);
  }
}

// Call the function
callLambdaAPI();


//end call to Lamda API 



});


