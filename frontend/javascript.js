
// Mobile Navigation Menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Set minimum appointment date to today
const dateInput = document.getElementById("date");

const today = new Date();
const localDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localDate;


// Appointment Form
const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const message = document.getElementById("formMessage");

    if (!name || !email || !phone || !doctor || !date || !time) {
        message.textContent = "Please fill all required fields.";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        message.textContent = "Please enter a valid 10-digit phone number.";
        return;
    }

    const selectedDate = new Date(date + "T00:00:00");

    if (selectedDate < new Date(localDate + "T00:00:00")) {
        message.textContent = "Please select today or a future date.";
        return;
    }

    message.textContent =
        "Appointment request submitted successfully! " +
        "Thank you, " + name + ". Selected doctor: " + doctor +
        ". This is a demo confirmation; no appointment has been booked.";

    appointmentForm.reset();

    // Restore the minimum date after reset
    dateInput.min = localDate;
});


// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const status = document.getElementById("contactStatus");

    if (!name || !email || !message) {
        status.textContent = "Please complete all fields.";
        return;
    }

    status.textContent =
        "Thank you, " + name +
        "! Your demo message has been validated.";

    contactForm.reset();
});


// Welcome Message
console.log("Digital Healthcare Website Loaded Successfully!");
