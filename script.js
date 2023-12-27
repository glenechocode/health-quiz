
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

const apiUrl = 'https://61m5k3mczb.execute-api.us-east-1.amazonaws.com/default/OpenAICall';

// Data to be sent in the POST request
const requestData = {
  key1: 'value1',
  key2: 'value2',
};

// Configuration for the Fetch API
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestData),
};

// Make the POST request to the API
fetch(apiUrl, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Handle the response data here
    console.log(data);
  })
  .catch((error) => {
    // Handle errors, such as network issues or API errors
    console.error('There was a problem with the fetch operation:', error);
  });


//end call to Lamda API 



});


