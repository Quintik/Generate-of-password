const generateBtn = document.getElementById("generate-btn");
const password = document.getElementById("password");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]|";

generateBtn.addEventListener("click", () => {
  let newPassword = "";
  for (let i = 0; i < 8; i++) {
    newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  password.value = newPassword;
});
