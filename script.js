// Write your JavaScript code here!


window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    const pilotNameInput = document.querySelector("input[name=pilotName]")
    const copilotNameInput = document.querySelector("input[name=copilotName]")
    const fuelLevelInput = document.querySelector("select[name=fuelLevel]")
    const cargoMassInput = document.querySelector("input[name=cargoMass]")

    form.addEventListener("submit",function(event) {

     formSubmission(form,list,pilotNameInput,copilotNameInput,fuelLevelInput,cargoMassInput)

    });


//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});