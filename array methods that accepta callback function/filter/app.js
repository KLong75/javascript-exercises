const coolBands = [
    {
      bandName: 'Pearl Jam',
      vocals: 'Eddie Vedder',
      guitar: 'Stone Gossard',
      guitar: 'Mike McCready',
      bass: 'Jeff Ament',
      drums: 'Matt Cameron',
    },
    {
      bandName: "Guns n' Roses",
      vocals: 'W. Axl Rose',
      guitar: 'Slash',
      guitar: 'Richard Fortus',
      bass: 'Duff McKagan',
      drums: 'Frank Ferrer',
      keyboards: 'Dizzy Reed',
      keyboards: 'Melissa Reese'
    },
    {
      bandName: 'Soundgarden',
      vocals: 'Chris Cornell',
      guitar: 'Kim Thyail',
      bass: 'Ben Sheperd',
      drums: 'Matt Cameron',
    },
    {
      bandName: 'Tool',
      vocals: 'Maynard James Keenan',
      guitar: 'Adam Jones',
      bass: 'Justin Chancellor',
      drums: 'Danny Carey',
    },
  ]
  
const mattOnDrums = coolBands.filter(drummer => {
  return drummer.drums === 'Matt Cameron';
})

console.log(mattOnDrums[0].bandName);
console.log(mattOnDrums[1].bandName);
console.log(mattOnDrums);

  
//  const mattOnDrums = coolBands.filter(drummer => drummer.drums === 'Matt Cameron');

const nums = [ 4, 11, 22, 34, 47, 59, 64, 73, 87, 92];

const odds = nums.filter(n => n % 2 === 1)
const evens = nums.filter(n => n % 2 === 0)
console.log(odds)
console.log(evens)