function submitQuiz() {
  var score = 0;

  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === "a") {
    score++;
  }

  if (q2 && q2.value === "a") {
    score++;
  }

  var resultElement = document.getElementById("result");
  resultElement.textContent = "Your score is " + score + "/2";
}