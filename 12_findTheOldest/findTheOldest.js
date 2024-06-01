const findTheOldest = function(people) {
  let oldest = people[0];

  people.forEach(person => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

      let ageOfOldest = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
      let ageOfCurrent = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;

      if (ageOfCurrent > ageOfOldest) {
          oldest = person;
      }
  })

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
