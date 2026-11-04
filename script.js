// QUICKFIX ICT WEBSITE FUNCTIONALITY

const services = {
    screen: {
        title: "Screen Replacement",
        description: "Solutions for cracked, damaged or unresponsive phone screens.",
        price: "Demo price: KSh 3,000"
    },

    battery: {
        title: "Battery Replacement",
        description: "Restore your device's battery performance and reliability.",
        price: "Demo price: KSh 2,000"
    },

    software: {
        title: "Software Repair",
        description: "Help with software errors, system issues and device performance.",
        price: "Demo price: KSh 1,000"
    }
};

// Display service information
function selectService(service) {
    const item = services[service];

    if (!item) return;

    document.getElementById("serviceTitle").textContent = item.title;
    document.getElementById("serviceDescription").textContent = item.description;
    document.getElementById("servicePrice").textContent = item.price;

    document.getElementById("serviceDetails").hidden = false;

    document.getElementById("serviceDetails").scrollIntoView({
        behavior: "smooth"
    });
}

// Select the service and open the booking form
function bookSelectedService() {
    const title = document.getElementById("serviceTitle").textContent;
    document.getElementById("serviceChoice").value = title;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

// Handle booking form submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const service = document.getElementById("serviceChoice").value;
    const problem = document.getElementById("problem").value.trim();

    if (!name || !phone || !service || !problem) {
        document.getElementById("confirmation").textContent =
            "Please complete all the required fields.";

        return;
    }

    document.getElementById("confirmation").textContent =
        "Thank you, " + name + "! Your demo booking for " +
        service + " has been completed on this page. It has not been sent or saved.";

    this.reset();
});
