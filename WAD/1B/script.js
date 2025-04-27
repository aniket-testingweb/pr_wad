const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    // Save to localStorage
    const userDataArray = JSON.parse(localStorage.getItem("userData")) || [];
    userDataArray.push(formData);
    localStorage.setItem("userData", JSON.stringify(userDataArray));

    // Show alert
    alert("Registration is complete!");
    window.location.href = "data.html";

    // Send to server
    fetch("http://example.com/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Registration successful:", data);
            window.location.href = "data.html";
        })
        .catch((error) => {
            console.error("Registration failed:", error);
        });
});
