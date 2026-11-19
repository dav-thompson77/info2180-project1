document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const input = document.getElementById("email");
    const message = document.querySelector(".newsletter .message");

    form.noValidate = true;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = input.value.trim();

        if (email === "" || !input.checkValidity()) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
        form.reset();
    });
});

