const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 15);
    dinosaur1 = new Dinosaur('Stegosaurus', 'herbivore', 50);
    dinosaur2 = new Dinosaur('T-rex', 'carnivore', 300);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurCollection, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    assert.deepStrictEqual(park.dinosaurCollection, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaurByName(dinosaur1);
    assert.deepStrictEqual(park.dinosaurCollection, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.findPopularDinosaur();

    const mostPopularDinosaur = park.findPopularDinosaur();
    assert.deepStrictEqual(mostPopularDinosaur, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);

    const dinosaursBySpecies = park.findAllDinosaursBySpecies("Stegosaurus");
    assert.deepStrictEqual(dinosaursBySpecies, [dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
  
    const visitorsPerDay = park.calculateTotalVisitorsPerDay();
    assert.deepStrictEqual(visitorsPerDay, 350)
  });
  

  it('should be able to calculate the total number of visitors per year', function(){
  park.addDinosaur(dinosaur1);
  park.addDinosaur(dinosaur2);
  
  const visitorsPerYear = park.calculateTotalVisitorsPerYear();
  const expectedVisitorsPerYear = (dinosaur1.guestsAttractedPerDay + dinosaur2.guestsAttractedPerDay) * 365;
  assert.deepStrictEqual(visitorsPerYear, expectedVisitorsPerYear);
});

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);

    const totalAnnualRevenue = park.calculateAnnualTicketRevenue();
    const expectedTotalAnnualRevenue = (dinosaur1.guestsAttractedPerDay + dinosaur2.guestsAttractedPerDay) * 365 * park.ticketPrice;
    assert.deepStrictEqual(totalAnnualRevenue, expectedTotalAnnualRevenue);
  });

});
