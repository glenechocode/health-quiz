
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

  // Define the API endpoint
const apiEndpoint = 'https://uxxhhoaae4.execute-api.us-east-1.amazonaws.com/default/OpenAI';

// Define the data you want to send, if any, in JSON format
const data = {
    'do re me'
};

// Create an async function to make the API call
async function callLambdaFunction() {
    try {
        // Make a POST request to the Lambda function
        const response = await fetch(apiEndpoint, {
            method: 'POST', // or 'GET' if the Lambda function is set up to retrieve via GET
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers required by the API
            },
            body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
        });

        // Parse the JSON response
        const responseData = await response.json();

        // Handle the response data as needed
        console.log(responseData);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error calling AWS Lambda function:', error);
    }
}

// Call the function to execute the API call
callLambdaFunction();


//end call to Lamda API 



});


