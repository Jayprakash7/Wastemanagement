document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    var userid=localStorage.getItem("userID");
    var userpass=localStorage.getItem("userPS");

    // Check the password (replace this with your authentication logic)
    if(loginUsername==userid)
    {
        if (loginPassword == userpass) {
            // Successful login
            window.location.href = "index.html"; // Redirect to dashboard
        } 
        else {
        // Display error message
        const loginError = document.getElementById("loginError");
        loginError.textContent = "Incorrect password. Please try again.";
        }
    }
    else
    {
        const loginError = document.getElementById("loginError");
        loginError.textContent = "Incorrect Username. Please try again.";
    }
});
