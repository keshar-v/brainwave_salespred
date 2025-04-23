function validateForm(event) {
  event.preventDefault(); // Prevent form submission for demonstration

  const username = document.querySelector('.input-field[type="text"]').value;
  const password = document.querySelector(
    '.input-field[type="password"]'
  ).value;

  if (username === "brainwaveuser" && password === "123456") {
    window.location.href = "https://vgouti-brainwave-map-b1hydf.streamlit.app/"; // Redirect on successful login
  } else {
    alert("Incorrect credentials, please try again.");
  }
}
