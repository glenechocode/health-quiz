document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let results = [];
  for (let i = 1; i <= 5; i++) {
      let answer = document.getElementById('q' + i).value;
      results.push(answer);
  }

  const prompt = "You are a high school science teacher. The five questions from the Health Quiz app are: What is the benefit of exercise? Why do people take magnesium? What are the risks of being overweight? What is the benefit of protein? What is the benefit of taking a multivitamin? a student provided these answers to the above questions. give them a grade and a very short summary. The answers are ";
  var combinedResults = results.join(' ');

  // Constructing the full prompt
  const fullPrompt = prompt + combinedResults;

  // Define the API URL
  const apiUrl = 'https://ydh2l6r29j.execute-api.us-east-1.amazonaws.com/default/OpenAI';

  // Make the call to Lambda API using Fetch
  fetch(apiUrl, {
      method: 'POST', // or 'PUT' if your Lambda is set up to take PUT requests
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: fullPrompt }),
  })
  .then(response => response.json())
  .then(data => {
      // Assuming the Lambda returns a JSON object with a 'message' key
      const apiReturn = data.message;
      document.getElementById('displayResults').textContent = apiReturn;
  })
  .catch((error) => {
      console.error('Error:', error);
  });

});

