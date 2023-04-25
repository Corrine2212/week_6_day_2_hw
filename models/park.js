// A park must have:

// - A name
// - A ticket price
// - A collection of dinosaurs

// A park must be able to:

// - Add a dinosaur to its collection of dinosaurs - DONE
// - Remove a dinosaur from its collection of dinosaurs - 
// - Find the dinosaur that attracts the most visitors
// - Find all dinosaurs of a particular species
// - Calculate the total number of visitors per day
// - Calculate the total number of visitors per year
// - Calculate the total revenue from ticket sales for one year

const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function(dinosaur){
    const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(indexOfDinosaur, 1);
}

Park.prototype.findPopularDinosaur = function(){
    let mostPopularDinosaur;
    let highestVisitorCount = 0;

    for (let i = 0; i < this.dinosaurCollection.length; i++) {
        const currentDinosaur = this.dinosaurCollection[i];
        if (currentDinosaur.guestsAttractedPerDay > highestVisitorCount) {
            highestVisitorCount = currentDinosaur.guestsAttractedPerDay;
            mostPopularDinosaur = currentDinosaur;
        }
    }
    return mostPopularDinosaur;
}
// this function iterates over the dinosaurCollection array in the Park object and compares the dinosaur's guestsAttractedPerDay to highestVisitorCount variable.

Park.prototype.findAllDinosaursBySpecies = function(species){
    return this.dinosaurCollection.filter(dinosaur => dinosaur.species === species);
}
// The filter method iterates over each dinosaur in the dinosaurCollection array and returns a new array

Park.prototype.calculateTotalVisitorsPerDay = function(){
    let totalVisitors = 0;
    for (let i = 0; i < this.dinosaurCollection.length; i++){
        totalVisitors += this.dinosaurCollection[i].guestsAttractedPerDay;
    }
    return totalVisitors;
};
// could also use forEach method? try this later.

Park.prototype.calculateTotalVisitorsPerYear = function(){
    const visitorsPerDay = this.calculateTotalVisitorsPerDay();
    const daysInYear = 365;
    const totalVisitorsPerYear = visitorsPerDay * daysInYear;
    return totalVisitorsPerYear;
}


Park.prototype.calculateAnnualTicketRevenue = function (){
    const totalVisitorsPerYear = this.calculateTotalVisitorsPerYear();
    const annualTicketRevenue = totalVisitorsPerYear * this.ticketPrice;
    return annualTicketRevenue 
}

module.exports = Park;