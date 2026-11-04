let selectedService = "";

const services = {
    screen: {
        title: "Screen Replacement",
        description: "Quality screen replacement for cracked or damaged phone screens.",
        price: "Demo price: KSh 3,000"
    },
    battery: {
        title: "Battery Replacement",
        description: "Restore your phone's battery life.",
        price: "Demo price: KSh 2,000"
    },
    software: {
        title: "Software Repair",
        description: "Solutions for phone software problems.",
        price: "Demo price: KSh 1,000"
    }
};

function showService(service) {
    const item = services[service];
    if (!item) return;

    selectedService = item.title;

    document.getElementById("serviceTitle").textContent = item.title;
    document.getElementById("serviceDescription").textContent = item.description;
    document.getElementById("servicePrice").textContent = item.price;

    document.getElementById("serviceDetails").hidden = false;
    document.getElementById("bookingSection").hidden = true;

    document.getElementById("serviceDetails").scrollIntoView({
        behavior: "smooth"
    });
}

function showBooking() {
    document.getElementById("bookingSection").hidden = false;
    document.getElementById("confirmation").textContent = "";

    document.getElementById("bookingSection").scrollIntoView({
        behavior: "smooth"
    });
}

function bookNow() {
    document.getElementById("bookingSection").hidden = false;
    document.getElementById("bookingSection").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const problem = document.getElementById("problem").value.trim();

    document.getElementById("confirmation").textContent =
        "Thank you, " + name + "! Your demo booking for " +
        (selectedService || "Phone Repair") +
        " has been recorded on this page. It has not been sent to a business.";

    this.reset();
});
