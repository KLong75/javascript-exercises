const pearlJamTunes = [
    "Alive (1991)",
    "Amongst The Waves (2009)",
    "Around The Bend (1996)",
    "Better Man (1994)",
    "Black (1991)",
    "Brother (2009)",
    "Bugs (1994)",
    "Bushleaguer (2002)",
    "Can't Deny Me (2018)",
    "Corduroy (1994)",
    "Dance Of The Clairvoyants (2020)",
    "Daughter (1993)",
    "Dirty Frank (1991)",
    "Dissident (1994)",
    "Do The Evolution (1998)",
    "Down (2002)",
    "Elderly Woman Behind The Counter In A Small Town (1993)",
    "Evacuation (2000)",
    "Even Flow (1991)",
    "Faithfull (1998)",
    "Footsteps (1991)",
    "Force Of Nature (2009)",
    "Future Days (2013)",
    "Garden (1991)",
    "Getaway (2013)",
    "Given To Fly (1998)",
    "Glorified G (1993)",
    "Go (1993)",
    "Gonna See My Friend (2009)",
    "Got Some (2009)",
    "Grievance (2000)",
    "Habit (1996)",
    "I Am Mine (2002)",
    "I Got Id (1995)",
    "Immortality (1994)",
    "In Hiding (1998)",
    "Infalliable (2013)",
    "Jeremy (1991)",
    "Johnny Guitar (2009)",
    "Just Breathe (2009)",
    "Last Kiss (1999)",
    "Life Wasted (2006)",
    "Light Years (2000)",
    "Lightning Bolt (2013)",
    "Lukin (1996)",
    "Master/Slave (1991)",
    "MFC (1998)",
    "Mind Your Manners (2013)",
    "My Father's Son (2013)",
    "Not For You (1994)",
    "Nothing as It Seems (2000)",
    "Nothingman (1994)",
    "Oceans (1991)",
    "Off He Goes (1996)",
    "Once (1991)",
    "Pilate (1998)",
    "Porch (1991)",
    "Present Tense (1996)",
    "Quick Escape (2020)",
    "Rats (1993)",
    "Rearviewmirror (1993)",
    "Red Mosquito (1996)",
    "Release (1991)",
    "Rival (2000)",
    "River Cross (2020)",
    "Save You (2002)",
    "Sirens (2013)",
    "Speed Of Sound (2009)",
    "Spin The Black Circle (1994)",
    "State of Love and Trust (1992)",
    "Stupid Mop (1994)",
    "Supersonic (2009)",
    "Swallowed Whole (2013)",
    "The End (2009)",
    "The Fixer (2009)",
    "Unthought Known (2009)",
    "W.M.A. (1993)",
    "Who You Are (1996)",
    "Why Go (1991)",
    "Wishlist (1998)",
    "World Wide Suicide (2006)",
    "Yellow Ledbetter (1992)",
    "Yellow Moon (2013)",
    "You Are (2002)"
]

function shufflePlay() {
  let randomPlayList = []
  for(let i=0; i < pearlJamTunes.length; i++){
    let selectedTuneIndex = Math.floor(Math.random() * pearlJamTunes.length)
    // console.log(selectedTuneIndex)
    // console.log(pearlJamTunes[selectedTuneIndex])
    randomPlayList.push(pearlJamTunes[selectedTuneIndex])
    // if (randomPlayList.length === pearlJamTunes.length) {
    console.log(randomPlayList);
  // }
  }
}

shufflePlay();


