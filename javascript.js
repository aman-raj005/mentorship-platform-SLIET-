var facultyList = [
    { name: "Dr. Aman Raj", expertise: "Digital Communication, GEC", availableSlots: ["10:00 AM", "2:00 PM"] },
    { name: "Prof. Jayant Kumar", expertise: "Database Systems, Big Data", availableSlots: ["11:00 AM", "3:00 PM"] },
    { name: "Dr. Devil ", expertise: "Linear Intregated circuit , GEC", availableSlots: ["9:00 AM", "1:00 PM"] }
];

function displayFacultyProfiles() {
    var facultyListElement = document.getElementById("faculty-list");
    var facultySelect = document.getElementById("faculty-select");

    for (var i = 0; i < facultyList.length; i++) {
        var faculty = facultyList[i];
        var facultyCard = document.createElement("div");
        facultyCard.className = "faculty-card";
        facultyCard.innerHTML = "<h3>" + faculty.name + "</h3>" +
            "<p><strong>Expertise:</strong> " + faculty.expertise + "</p>" +
            "<p><strong>Available Slots:</strong> " + faculty.availableSlots.join(", ") + "</p>";
        facultyListElement.appendChild(facultyCard);

        var option = document.createElement("option");
        option.value = faculty.name;
        option.textContent = faculty.name;
        facultySelect.appendChild(option);
    }
}

function populateTimeSlots() {
    var facultySelect = document.getElementById("faculty-select");
    var timeSlotSelect = document.getElementById("time-slot");
    var selectedFaculty;
    for (var i = 0; i < facultyList.length; i++) {
        if (facultyList[i].name === facultySelect.value) {
            selectedFaculty = facultyList[i];
            break;
        }
    }

    timeSlotSelect.innerHTML = "";
    for (var j = 0; j < selectedFaculty.availableSlots.length; j++) {
        var slot = selectedFaculty.availableSlots[j];
        var option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        timeSlotSelect.appendChild(option);
    }
}

window.onload = function() {
    displayFacultyProfiles();
    populateTimeSlots();

    document.getElementById("faculty-select").onchange = populateTimeSlots;

    document.getElementById("booking-form").onsubmit = function(e) {
        e.preventDefault();
        var faculty = document.getElementById("faculty-select").value;
        var date = document.getElementById("date").value;
        var timeSlot = document.getElementById("time-slot").value;
        alert("Session booked with " + faculty + " on " + date + " at " + timeSlot);
    };
};