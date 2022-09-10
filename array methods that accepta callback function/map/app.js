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
  
  const coolGuitarists = coolBands.map(function(bands) {   
    return bands.guitar;
      
  })
  console.log(coolGuitarists);


  const words = ['asap', 'byob', 'rsvp', 'diy']

  const capWords = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
  })