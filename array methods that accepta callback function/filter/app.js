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


console.log(mattOnDrums);

console.log(mattOnDrums[0].bandName);
console.log(mattOnDrums[1].bandName);


  
//  const mattOnDrums = coolBands.filter(drummer => drummer.drums === 'Matt Cameron');

const nums = [ 4, 11, 22, 34, 47, 59, 64, 73, 87, 92];

const odds = nums.filter(n => n % 2 === 1)
const evens = nums.filter(n => n % 2 === 0)
console.log(odds)
console.log(evens)





const greatAlbums = [
  {
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    year: 1973,
    genre: 'Progressive Rock'
  },
  {
    title: 'OK Computer',
    artist: 'Radiohead',
    year: 1997,
    genre: 'Alternative Rock'
  },
  {
    title: 'Ten',
    artist: 'Pearl Jam',
    year: 1991,
    genre: 'Grunge'
  },
  {
    title: 'Nevermind',
    artist: 'Nirvana',
    year: 1991,
    genre: 'Grunge'
  },
  {
    title: 'Appetite for Destruction',
    artist: 'Guns N\' Roses',
    year: 1987,
    genre: 'Hard Rock'
  },
  {
    title: 'No Code',
    artist: 'Pearl Jam',
    year: 1996,
    genre: 'Grunge'
  },
  {
    title: 'Led Zeppelin IV',
    artist: 'Led Zeppelin',
    year: 1971,
    genre: 'Hard Rock'
  },
  {
    title: 'The Bends',
    artist: 'Radiohead',
    year: 1995,
    genre: 'Alternative Rock'
  },
  {
    title: 'Wish You Were Here',
    artist: 'Pink Floyd',
    year: 1975,
    genre: 'Progressive Rock'
  },
  {
    title: 'Yield',
    artist: 'Pearl Jam',
    year: 1998,
    genre: 'Grunge'
  },
  {
    title: 'Led Zeppelin II',
    artist: 'Led Zeppelin',
    year: 1969,
    genre: 'Hard Rock'
  },
  {
    title: 'Vs.',
    artist: 'Pearl Jam',
    year: 1993,
    genre: 'Grunge'
  },
  {
    title: 'No Depression',
    artist: 'Uncle Tupelo',
    year: 1990,
    genre: 'Alternative Country'
  },
  {
    title: 'Vitalogy',
    artist: 'Pearl Jam',
    year: 1994,
    genre: 'Grunge'
  },
  {
    title: 'Ride the Lightning',
    artist: 'Metallica',
    year: 1984,
    genre: 'Thrash Metal'
  },
  {
    title: 'Use Your Illusion I',
    artist: 'Guns N\' Roses',
    year: 1991,
    genre: 'Hard Rock'
  },
  {
    title: 'Use Your Illusion II',
    artist: 'Guns N\' Roses',
    year: 1991,
    genre: 'Hard Rock'
  },
  {
    title: 'Facelift',
    artist: 'Alice in Chains',
    year: 1990,
    genre: 'Grunge'
  },
  {
    title: 'Dirt',
    artist: 'Alice in Chains',
    year: 1992,
    genre: 'Grunge'
  },
  {
    title: 'Blind Melon',
    artist: 'Blind Melon',
    year: 1992,
    genre: 'Alternative Rock'
  },
  {
    title: 'American Beauty',
    artist: 'Grateful Dead',
    year: 1970,
    genre: 'Folk Rock'
  },
  {
    title: 'Meat Puppets II',
    artist: 'Meat Puppets',
    year: 1984,
    genre: 'Punk Rock'
  },
  {
    title: 'Up on the Sun',
    artist: 'Meat Puppets',
    year: 1985,
    genre: 'Punk Rock'
  },
  {
    title: 'End Hits',
    artist: 'Fugazi',
    year: 1998,
    genre: 'Post-Hardcore'
  },
  {
    title: 'Repeater',
    artist: 'Fugazi',
    year: 1990,
    genre: 'Post-Hardcore'
  },
  {
    title: 'In Utero',
    artist: 'Nirvana',
    year: 1993,
    genre: 'Grunge'
  },
  {
    title: 'Anodyne',
    artist: 'Uncle Tupelo',
    year: 1993,
    genre: 'Alternative Country'
  }
]

// 1. Filter by genre
const grungeAlbums = greatAlbums.filter(album => album.genre === 'Grunge')

console.log('Grunge Albums:', grungeAlbums)

// 2. Filter by artist
const pearlJamAlbums = greatAlbums.filter(album => album.artist === 'Pearl Jam')

console.log('Pearl Jam Albums:', pearlJamAlbums)

// 3. Filter by year
const ninetyEightAlbums = greatAlbums.filter(album => album.year === 1998)

console.log('Albums released in 1998:', ninetyEightAlbums)

// 4. Filter by decade
const ninetiesAlbums = greatAlbums.filter(album => album.year >= 1990 && album.year < 2000)

console.log('Nineties Albums:', ninetiesAlbums)





