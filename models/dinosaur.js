// A dinosaur must have:

// - A species
// - A diet (e.g. carnivore, herbivore or omnivore)
// - An average number of visitors attracted per day

// A park must have:

// - A name
// - A ticket price
// - A collection of dinosaurs

const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}



module.exports = Dinosaur;

