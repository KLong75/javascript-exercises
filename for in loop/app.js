// use a "for in loop" to iterate over the keys in an object
const pearlJam = {
    'Eddie Vedder'    : 'vocals, guitar',
    'Stone Gossard'   : 'guitar',
    'Jeff Ament'      : 'bass',
    'Mike McCready'   : 'guitar',
    'Matt Cameron'    : 'drums',
}

for (let bandMember in pearlJam) {
  console.log(bandMember);  
  console.log(pearlJam[bandMember]);
}
