// TASK 2: ADDING SUPPORT TICKETS DYNAMICALLY

// Identify support ticket container and individual support ticket
const ticketContainerId = document.getElementById("ticketContainer");
const supportTicketId = document.querySelector(".support-ticket");

// Function
function createElement(customerName, issue, priorityLevel) {

    // Create support ticket  
    const supportTicket = document.createElement("div");

    // Set class attribute for all cards
    supportTicket.setAttribute("class", "support-ticket");

    // Set data attribute for priorityLevel to aid Task 3
    supportTicket.setAttribute("data-priority", priorityLevel);

    // Populate the card with employee name and position
    supportTicket.innerHTML = "<h3>" + customerName + "</h3><p>" + issue + "</p><br><strong>Priority Level: </strong>" + priorityLevel + "</strong></p>";

    // Adding remove employee button
    const resolveButton = document.createElement("button");
    resolveButton.setAttribute("id", "resolveButton");
    resolveButton.textContent = "Resolve Ticket";
    supportTicket.appendChild(resolveButton);

    ticketContainerId.appendChild(supportTicket);
}

// Test Cases
createElement("Oscar", "I cannot read!", "High");
createElement("Celine", "I forgot my password", "Medium");
createElement("Nicholas", "I am not locked in :(", "Low");

// TASK 3: CONVERTING NODELISTS TO ARRAYS FOR BULK UPDATES

// Selecting all support tickets
const supportTicketNodeList = document.querySelectorAll(".support-ticket");

// Converting into array
const supportTicketArray = Array.from(supportTicketNodeList);

// Update support ticket appearance
supportTicketArray.forEach(ticket => {
    if (ticket.dataset.priority === "High") {
        ticket.style.backgroundColor = "lightpink";
        ticket.style.border = "3px solid lightcoral";
    }
});