let holdEL = document.getElementById('holding')
let holaEl = document.getElementById('hola')





window.onscroll = function scroller() {

    if (holaEl) {
        holaEl.innerHTML= `<div id="scrolling-el" align="center" onscroll="scroller()" style="position: fixed;">
        <a href="about.html"><ion-icon name="arrow-back-outline"></ion-icon></a><p>${holdEL.textContent}</p></div>`

       

    } 

    let scrolled = window.scrollY

console.log(scrolled);

if (scrolled === 0) {



holaEl.innerHTML = ''
    
}
    
}





let contentEL = document.getElementById('content')
let contentEL2 = document.getElementById('content-el')
let contentEL3 = document.getElementById('content-el3')
let contentEL4 = document.getElementById('content-el4')
let contentEL5 = document.getElementById('content-el5')
let contentEL6 = document.getElementById('content-el6')

/* Win */

function dropdown() {

let turnEL = document.getElementById('turn')

turnEL.innerHTML = `<div id="turned"><ion-icon name="chevron-up-outline" onclick="dropup()"></ion-icon></div>`

contentEL.innerHTML =  ` <a href="win.html"><div class="lyrics"><h4>Lyrics</h4></div></a>
<a href="winDescription.html"><div class="description"><h4>Song Description</h4></div></a>
`

}


function dropup() {
    let turnedEL = document.getElementById('turned')

    turnedEL.innerHTML = `<div id="turn"><ion-icon name="chevron-down-outline" onclick="dropdown()"></ion-icon></div>`

    contentEL.innerHTML = ''

}





/* At this point */

function dropdown2() {


    let turnEL = document.getElementById('turn-el')
    
    turnEL.innerHTML = `<div id="turned-el"><ion-icon name="chevron-up-outline" onclick="dropup2()"></ion-icon></div>`
    
    contentEL2.innerHTML =  `<a href="atThisPoint.html"><div class="lyrics"><h4>Lyrics</h4></div></a>
    <a href="atThisPointDescription.html"><div class="description"><h4>Song Description</h4></div></a>
    `
    
    }
    



function dropup2() {
    let turnedEL = document.getElementById('turned-el')

    turnedEL.innerHTML = `<div id="turn-el"><ion-icon name="chevron-down-outline" onclick="dropdown2()"></ion-icon></div>`

    contentEL2.innerHTML = ''

}



/* Toss and Turn */

function dropdown3() {


    let turnEL = document.getElementById('turn-el3')
    
    turnEL.innerHTML = `<div id="turned-el3"><ion-icon name="chevron-up-outline" onclick="dropup3()"></ion-icon></div>`
    
    contentEL3.innerHTML =  `<a href="tossAndTurn.html"><div class="lyrics"><h4>Lyrics</h4></div></a>
    <a href="tossAndTurnDescription.html"><div class="description"><h4>Song Description</h4></div></a>
    `
    
    }
    



function dropup3() {
    let turnedEL = document.getElementById('turned-el3')

    turnedEL.innerHTML = `<div id="turn-el3"><ion-icon name="chevron-down-outline" onclick="dropdown3()"></ion-icon></div>`

    contentEL3.innerHTML = ''

}




/* Keep Staring */

function dropdown4() {


    let turnEL = document.getElementById('turn-el4')
    
    turnEL.innerHTML = `<div id="turned-el4"><ion-icon name="chevron-up-outline" onclick="dropup4()"></ion-icon></div>`
    
    contentEL4.innerHTML =  `<a href="keepStaring.html"><div class="lyrics"><h4>Lyrics</h4></div></a>
    <a href="keepStaringDescription.html"><div class="description"><h4>Song Description</h4></div></a>
    `
    
    }
    



function dropup4() {
    let turnedEL = document.getElementById('turned-el4')

    turnedEL.innerHTML = `<div id="turn-el4"><ion-icon name="chevron-down-outline" onclick="dropdown4()"></ion-icon></div>`

    contentEL4.innerHTML = ''

}





/* Love Song */

function dropdown5() {


    let turnEL = document.getElementById('turn-el5')
    
    turnEL.innerHTML = `<div id="turned-el5"><ion-icon name="chevron-up-outline" onclick="dropup5()"></ion-icon></div>`
    
    contentEL5.innerHTML =  `<a href="loveSong.html"><div class="lyrics"><h4>Lyrics</h4></div></a>
    <a href="loveSongDescription.html"><div class="description"><h4>Song Description</h4></div></a>
    `
    
    }
    



function dropup5() {
    let turnedEL = document.getElementById('turned-el5')

    turnedEL.innerHTML = `<div id="turn-el5"><ion-icon name="chevron-down-outline" onclick="dropdown5()"></ion-icon></div>`

    contentEL5.innerHTML = ''

}



/* That's Me */

function dropdown6() {


    let turnEL = document.getElementById('turn-el6')
    
    turnEL.innerHTML = `<div id="turned-el6"><ion-icon name="chevron-up-outline" onclick="dropup6()"></ion-icon></div>`
    
    contentEL6.innerHTML =  `<a href="that'sMe.html"><div class="lyrics"><h4>Lyrics</h4></div></a>
    <a href="that'sMeDescription.html"><div class="description"><h4>Song Description</h4></div></a>
    `
    
    }
    



function dropup6() {
    let turnedEL = document.getElementById('turned-el6')

    turnedEL.innerHTML = `<div id="turn-el6"><ion-icon name="chevron-down-outline" onclick="dropdown6()"></ion-icon></div>`

    contentEL6.innerHTML = ''

}


