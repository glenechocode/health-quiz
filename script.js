
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let results = [];
    for (let i = 1; i <= 5; i++) {
        let answer = document.getElementById('q' + i).value;
        results.push(answer);
    }

    const prompt = "You are a high school science teacher. The five questions from the Health Quiz app are: What is the benefit of exercise? Why do people take magnesium? What are the risks of being overweight? What is the benefit of protein? What is the benefit of taking a multivitamin? a student provided these answers to the above questions. give them a grade and a very short summary. The answers are "
    

    var combinedResults = results.join(' ');
    document.getElementById('displayResults').textContent = prompt + combinedResults;

//call to Lamda API 

// Define the endpoint
const apiUrl = 'https://e3u67sgt32.execute-api.us-east-1.amazonaws.com/default/AIF-staging';


// Function to call the API and display the result
async function callApiAndDisplayResult() {
  try {
    // Use Fetch API to call the endpoint
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON response
    const data = await response.json();

    // Display the result on the screen
    // Assuming there's a div with id="apiResult" in your HTML
    document.getElementById('apiResult').innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    // Handle errors, such as network issues
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the function to make the request and display the result
callApiAndDisplayResult();



//end call to Lamda API 



});


