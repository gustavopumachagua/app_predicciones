document.addEventListener("DOMContentLoaded", function () {
  const predictionForm = document.getElementById("prediction-form");
  const predictionResult = document.getElementById("prediction-result");

  predictionForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const depth = document.getElementById("depth").value;

    fetch("/predict", {
      method: "POST",
      body: new URLSearchParams({ latitude, longitude, depth }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if ("prediction" in data) {
          predictionResult.textContent = `La predicción de la magnitud es: ${data.prediction.toFixed(
            2
          )}`;
        } else if ("error" in data) {
          predictionResult.textContent = `Error: ${data.error}`;
        }
      });
  });
});
