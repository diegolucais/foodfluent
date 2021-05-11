function randomUsers() {

    // Get API with the number of results to return
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {

            let people = data.results;

            // Get data value
            let output = '<h1 class="welcome-users">Welcome to FoodFluent</h1>';

            // Get data loop through
            people.forEach(function (lists) {
                output += `
                    <div class="card mt-3 bg-dark">
                        <ul class="list-group">
                            <li class="list-group-item"><h5><strong>Name:</strong> ${lists.name.first} ${lists.name.last}</h5></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item"><strong>Phone Number:</strong> ${lists.cell}</li>
                            <li class="list-group-item"><strong>Email:</strong> ${lists.email}</li>
                            <li class="list-group-item"><strong>Address:</strong> ${lists.location.city}, ${lists.location.country} | <strong>Post Code:</strong> ${lists.location.postcode}</li>
                        </ul>
                    </div>
                `;
            });

            // Show all data received within the HTML element
            document.getElementById("output").innerHTML = output;

        });
};

// Users will appear randomly every time the page is loaded
window.onload = randomUsers;