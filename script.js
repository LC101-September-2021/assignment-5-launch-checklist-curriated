// Write your JavaScript code here!

window.addEventListener('load', function() {
        const form = document.querySelector('form');
    
    form.addEventListener('submit',function(event) {
        event.preventDefault();
        const list = document.querySelector('div[id=faultyItems]');
        let pilotNameInput = document.querySelector('input[name=pilotName]').value
        let copilotNameInput = document.querySelector('input[name=copilotName]').value
        let fuelLevelInput = document.querySelector('input[name=fuelLevel]').value
        let cargoMassInput = document.querySelector('input[name=cargoMass]').value

     formSubmission(document,list,pilotNameInput,copilotNameInput,fuelLevelInput,cargoMassInput)

    });


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);

       let planetName = chosenPlanet.name;
       let planetDiameter = chosenPlanet.diameter;
       let planetStar = chosenPlanet.star;
       let planetDistance = chosenPlanet.distance;
       let planetMoons = chosenPlanet.moons;
       let planetImage = chosenPlanet.image;
       
       addDestinationInfo(document,planetName,planetDiameter,planetStar,planetDistance,planetMoons,planetImage);
   })
   
});