// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    }
    if(isNaN(testInput)) {
        return "Not a Number"
    }
    if(typeof(Number(testInput)) === "number") {
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // document parameter is for html document
   let userInputs = [pilot,copilot,fuelLevel,cargoLevel];

    for(let i = 0; i < userInputs.length; i++) {
        if(validateInput(userInputs[i]).value === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
            break;
        } //end of if statement
    } //end of for loop

    if(validateInput(pilotNameInput.value) === "Is a Number" || validateInput(copilotNameInput.value) === "Is a Number") {
        alert("Name must use alphabetical letters.")
        event.preventDefault();
    } // end of if statement

    if(validateInput(fuelLevelInput.value) === "Not a Number" || validateInput(cargoMassInput.value) === "Not a Number") {
        alert("Fuel Level and Cargo Mass must be a number.")
    } // end of if statement

}; //end of formSubmission function

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
