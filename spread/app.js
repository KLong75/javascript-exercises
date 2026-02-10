// spread in function call
function listBandMembers(vox, rhythmGuitar, bass, leadGuitar, drums) {
    console.log('vox:', vox)
    console.log('guitar:', rhythmGuitar)
    console.log('bass:', bass)
    console.log('guitar:', leadGuitar)
    console.log('drums:', drums)
}

const pearlJam = ['Eddie Vedder', 'Stone Gossard', 'Jeff Ament', 'Mike McCready', 'Matt Cameron']
// call function here with spread ...pearlJam
listBandMembers(...pearlJam)


// spread in array literal
const hairMetalBands = ['Poison', 'Cinderella', 'Motley Crue']
const grungeBands = ['Nirvana', 'Pearl Jam', 'Alice In Chains']
const rockBands = [...hairMetalBands, ...grungeBands]

console.log(hairMetalBands)
console.log(grungeBands)
console.log(rockBands)