document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() {
        var username = document.getElementById("loginUsernameInput").value;
        var password = document.getElementById("loginPasswordInput").value;
        // Example login validation
        if (username.trim() !== "" && password.trim() !== "") {
            // Send login data to server
            sendLoginData(username, password);
            // Redirect to main page
            window.location.href = "main.html";
        }
    });

    var registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", function() {
        var accountName = document.getElementById("registerAccountInput").value;
        var username = document.getElementById("registerUsernameInput").value;
        var password = document.getElementById("registerPasswordInput").value;
        // Example registration validation
        if (accountName.trim() !== "" && username.trim() !== "" && password.trim() !== "") {
            // Send login data to server
            sendLoginData(username, password);
            // Redirect to main page
            window.location.href = "main.html";
        }
    });

    function sendLoginData(username, password) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "save.php", true); // Ustaw adres URL serwera, który będzie odbierał zapytania POST z danymi logowania
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({ username: username, password: password }));
    }
});
