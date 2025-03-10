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

    // Populate the card with customer name and position
    supportTicket.innerHTML = "<h3>" + customerName + "</h3><p>" + issue + "</p><br><strong>Priority Level: </strong><span>" + priorityLevel + "</span></p>";

    // Adding resolve ticket button
    const resolveButton = document.createElement("button");
    resolveButton.setAttribute("id", "resolveButton");
    resolveButton.textContent = "Resolve Ticket";
    supportTicket.appendChild(resolveButton);

    //TASK 4
    // Attach event listener to resolve support ticket
    resolveButton.addEventListener("click", function() {
        resolveTicket(supportTicket);
    });

    // TASK 5: INLINE EDITING OF SUPPORT TICKETS
    // Add event listener to each support ticket to allow editing
    supportTicket.addEventListener("dblclick", function(event) {
        
        // Identify the ticket and text selected 
        const clickedItem = event.target;
        const clickedText = clickedItem.textContent;
       
        // Check if item clicked is text within a support ticket
        if (clickedItem.closest(".support-ticket") && clickedItem.matches("p, h3, span")) {
            
            const input = document.createElement("input");
            input.setAttribute("value", clickedText);
            clickedItem.replaceWith(input);  
            
            // Add save button
            const saveButton = document.createElement("button");
            saveButton.setAttribute("id", "saveButton");
            saveButton.textContent = "Save";
            input.insertAdjacentElement("afterend", saveButton);

            saveButton.addEventListener("click", function() {
                const inputText = input.value;
                const replacedText = document.createElement(clickedItem.tagName.toLowerCase());

                replacedText.textContent = inputText
                input.replaceWith(replacedText);
                saveButton.remove();
            })
        }
    })

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

// TASK 4: IMPLEMENTING TICKET RESOLUTION WITH EVENT BUBBLING

// Add functionality to resolve ticket button
function resolveTicket(ticket) {
    ticketContainerId.removeChild(ticket);
}

// Attach event listener to Ticket Container
ticketContainerId.addEventListener("click", function() {
    console.log("Support ticket section clicked!");
})

// Attach event listener to each support ticket
document.querySelectorAll(".support-ticket").forEach(ticket => {
    ticket.addEventListener("click", function(event) {
        console.log("Support ticket clicked!");
        event.stopPropagation(); //Enable to prevent event bubbling
    })
})