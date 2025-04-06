
const appointmentForm = document.getElementById("appointmentForm");
const confirmationMessage = document.getElementById("confirmationMessage");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Display confirmation message
        confirmationMessage.textContent = `✅ Appointment booked with ${doctor} on ${date} at ${time}`;
        confirmationMessage.classList.remove("hidden");

        // Clear form fields
        appointmentForm.reset();
    });
}
document.addEventListener("DOMContentLoaded", function () {
    // Google Maps Search Function
    window.searchLocation = function () {
        var location = document.getElementById("location").value;
        if (location) {
            var mapUrl = "https://www.google.com/maps?q=" + encodeURIComponent(location) + "&output=embed";
            document.getElementById("mapFrame").src = mapUrl;
        } else {
            alert("Please enter a location or hospital name.");
        }
    };

    // Appointment Booking Function
    const appointmentForm = document.getElementById("appointmentForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const hospital = document.getElementById("hospital").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;

            confirmationMessage.textContent = `✅ Appointment booked at ${hospital} on ${date} at ${time}`;
            confirmationMessage.classList.remove("hidden");

            appointmentForm.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    checkAuth();

    // Sign Up Function
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Account created successfully! Please sign in.");
            window.location.href = "login.html";
        });
    }

    // Sign In Function
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const user = JSON.parse(localStorage.getItem("user"));

            if (user && user.email === email && user.password === password) {
                localStorage.setItem("loggedIn", "true");
                alert("Login successful!");
                window.location.href = "wbs.html";
            } else {
                alert("Invalid email or password.");
            }
        });
    }
});

// Logout Function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// Check Authentication
function checkAuth() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
        document.getElementById("profileLink").style.display = "inline";
        document.getElementById("logoutLink").style.display = "inline";
        document.getElementById("loginLink").style.display = "none";
    }
}

// Display User Profile
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
}
document.addEventListener("DOMContentLoaded", function () {
    displayProfile();
});

function displayProfile() {
    const userData = JSON.parse(localStorage.getItem("userProfile"));
    if (userData) {
        document.getElementById("pName").innerText = userData.name;
        document.getElementById("pAge").innerText = userData.age;
        document.getElementById("pGender").innerText = userData.gender;
        document.getElementById("pLocation").innerText = userData.location;
        document.getElementById("pDoctor").innerText = userData.doctor;
        document.getElementById("pHospital").innerText = userData.hospital;
        document.getElementById("pDisease").innerText = userData.disease;
        document.getElementById("pTimePeriod").innerText = userData.timePeriod;
        document.getElementById("profileSection").style.display = "block"; // Show profile section
    }
}


