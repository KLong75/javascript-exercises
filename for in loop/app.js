const pearlJam = {
    'Eddie Vedder'    : 'vocals',
    'Stone Gossard'   : 'guitar',
    'Jeff Ament'      : 'bass',
    'Mike McCready'   : 'guitar',
    'Matt Cameron'    : 'drums',
}

for (let bandMember in pearlJam) {
  console.log(bandMember);  
  console.log(pearlJam[bandMember]);
}
