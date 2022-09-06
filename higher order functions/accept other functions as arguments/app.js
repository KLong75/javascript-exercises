// accept another function as an argument
function threeTimes(func) {
    func();
    func();
    func();
}

function cheer(){
  console.log('Hip hip hooray!')
}

threeTimes(cheer);