
// Get a reference to the button
        const runButton = document.getElementById('runButton');

        // Add a click event listener to the button
        runButton.addEventListener('click', () => {
            // This is the JavaScript code from the image
            // It prompts the user for a degree and logs the grade to the console.
            var degree = prompt("Enter your degree");

            if (degree < 0 || degree > 100) {
                console.log("Invalid Input");
            } else if (degree == null || typeof degree === "string" && degree.trim() === "") {
                console.log("Please input a degree");
            } else if (degree >= 90 && degree <= 100) {
                console.log("A");
            } else if (degree >= 80 && degree < 90) {
                console.log("B");
            } else if (degree >= 70 && degree < 80) {
                console.log("C");
            } else if (degree >= 50 && degree < 70) {
                console.log("D");
            } else if (degree >= 0 && degree < 50) {
                console.log("F");
            }
        });