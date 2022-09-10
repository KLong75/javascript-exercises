const gnrAlbums = [
  "Appetite for Destruction",
  "Use Your Illusion I",
  "Use Your Illusion II",
  "The Spaghetti Incident",
  "Chinese Democracy",
]

let coverAlbum = gnrAlbums.find(coverAlbum => {
  return coverAlbum.includes('Spaghetti');
})

let myFavorite = gnrAlbums.find(album => {
  return album.includes('II');
})