document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let results = [];
  for (let i = 1; i <= 5; i++) {
      let answer = document.getElementById('q' + i).value;
      results.push(answer);
  }

  const prompt = "You are a high school science teacher. The five questions from the Health Quiz app are: What is the benefit of exercise? Why do people take magnesium? What are the risks of being overweight? What is the benefit of protein? What is the benefit of taking a multivitamin? a student provided these answers to the above questions. give them a grade and a very short summary. The answers are ";
  var combinedResults = results.join(' ');

  // Call to Lambda API
  fetch('https://ydh2l6r29j.execute-api.us-east-1.amazonaws.com/default/OpenAI', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          // Include any other headers your API requires
      },
      body: JSON.stringify({ prompt: prompt + combinedResults }),
  })
  .then(response => {
      console.log("Raw Response: ", response); // Log the raw response
      return response.json(); // Convert response to JSON
  })
  
  .then(data => {
    console.log("Data Received: ", data); // Log the data received
    if (Array.isArray(data) && data.length > 0) {
        const apiResponse = data[0]; // Access the first element of the array
        const grade = apiResponse.grade; // Access the "grade" property
        const summary = apiResponse.summary; // Access the "summary" property

        // Display the grade and summary on the screen
        document.getElementById('apiReturn').textContent = `Grade: ${grade}\nSummary: ${summary}`;
    } else {
        console.error('Invalid response format:', data);
    }
})



  .catch((error) => {
      console.error('Error:', error);
  });
});
