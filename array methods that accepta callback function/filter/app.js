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

  
//  const mattOnDrums = coolBands.filter(drummer => drummer.drums === 'Matt Cameron');



