const pearlJam = {
  'Eddie Vedder'    : 'vocals',
  'Stone Gossard'   : 'guitar',
  'Jeff Ament'      : 'bass',
  'Mike McCready'   : 'guitar',
  'Matt Cameron'    : 'drums',
}

for (let bandMember of Object.keys(pearlJam)) {
  console.log(bandMember + ' - ' + pearlJam[bandMember]);
}
