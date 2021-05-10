function randomUsers() {

    // Get API
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {

            let author = data.results;

            // Get data value
            let output = '<h1 class="welcome-users"><center>Welcome to FoodFluent</center></h1>';

            // Get data loop through
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h4><strong>Name:</strong> ${lists.name.first} ${lists.name.last}</h4></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item"><strong>Phone Number:</strong> ${lists.cell}</li>
                            <li class="list-group-item"><strong>Email:</strong> ${lists.email}</li>
                            <li class="list-group-item"><strong>Address:</strong> ${lists.location.city}, ${lists.location.country} | <strong>Post Code:</strong> ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

            // Show all data received within the HTML element
            document.getElementById('output').innerHTML = output;

        });
};

// Users will appear randomly on page load
window.onload = randomUsers;