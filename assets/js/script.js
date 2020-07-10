/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
/* date handler function */


for (let date of document.querySelectorAll('.text'))
{
   date.innerText = date.innerText.toString().substring(0,16)
}

// if no category choose
for (let logo of document.querySelectorAll('.logo'))
{
    if(logo.innerText=='Choose a Category')
    {
        logo.style.display="none"
    }
   //  for change the color oof button
    if(logo.innerText == "Personal"){
       logo.style.backgroundColor = 'red';
    }
    if(logo.innerText == "Work"){
       logo.style.backgroundColor = "#ffd500";
    }
    if(logo.innerText == "School"){
       logo.style.backgroundColor = "#aa00cc";
    }
    if(logo.innerText == "Cleaning"){
       logo.style.backgroundColor = "#5500ff";
    }

    if(logo.innerText == "Other"){
       logo.style.backgroundColor = "#88e200";
    }
}

var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
