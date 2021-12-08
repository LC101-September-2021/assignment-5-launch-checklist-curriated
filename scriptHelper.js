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
        return 'Empty';
    }
    if(isNaN(testInput)) {
        return 'Not a Number';
    }
    if(typeof(Number(testInput)) === 'number') {
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // document parameter is for html document

   if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
       alert('All fields are required!');
   }

    if(validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
        alert('Names must use alphabetical letters.')
    } 

    if(validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert('Fuel Level and Cargo Mass must be a number.')
    } 

    if(validateInput(pilot) === 'Not a Number' || validateInput(copilot) === 'Not a Number') {
        document.querySelector('li[id=pilotStatus]').innerHTML = `Pilot ${pilot} is ready for launch`;
        document.querySelector('li[id=copilotStatus]').innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if(Number(fuelLevel) < 10000) {
        list.style.visibility = 'visible';
        document.querySelector('li[id=fuelStatus]').innerHTML = 'Fuel level too low for launch';
        document.querySelector('h2[id=launchStatus]').innerHTML = 'Shuttle not ready for launch';
        document.querySelector('h2[id=launchStatus]').style.color = 'red';
    }

    if(Number(cargoLevel) > 10000) {
        list.style.visibility = 'visible';
        document.querySelector('li[id=cargoStatus]').innerHTML = 'Cargo mass too heavy for launch';
        document.querySelector('h2[id=launchStatus]').innerHTML = 'Shuttle not ready for launch';
        document.querySelector('h2[id=launchStatus]').style.color = 'red';
    }

    if(Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
        list.style.visibility = 'visible';
        document.querySelector('h2[id=launchStatus]').innerHTML = 'Shuttle is Ready for Launch';
        document.querySelector('h2[id=launchStatus]').style.color = 'green';
    }

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
