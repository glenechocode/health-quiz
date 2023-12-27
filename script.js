
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

// JavaScript to call the API and display results in the div

// assuming you have a function to fetch from the API
async function fetchData() {
  try {
      const response = await fetch('https://uxxhhoaae4.execute-api.us-east-1.amazonaws.com/default/OpenAI', {
          method: 'POST', // or 'GET' depending on your API
          body: JSON.stringify({ data: 'wow' }),
          headers: {
              'Content-Type': 'application/json'
              // Additional headers if required
          }
      });
      const data = await response.json();
      displayResults(data); // calling function to display the result
  } catch (error) {
      console.error('There was an error!', error);
  }
}

function displayResults(apiResults) {
  // Find the div with the id 'apiResults' and set its content
  document.getElementById('apiResults').innerText = apiResults;
}

fetchData(); // call the function to fetch and display data



//end call to Lamda API 



});


