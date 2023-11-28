document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;

    var userid=signupUsername;
    var userpass=signupPassword;
    localStorage.setItem("userID",userid);
    localStorage.setItem("userPS",userpass);

    // Store the user's data (replace this with your data storage logic)
    // For this example, we'll just show a success message
    const signupSuccess = document.getElementById("signupSuccess");
    signupSuccess.textContent = `Signed up with username: ${signupUsername}`;
});