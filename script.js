const about= document.querySelector("#page1");
const personnal= document.getElementById("page2");
const pv_team= document.getElementById("page3");
const us_team=document.getElementById("page4")
const link1 = document.getElementById("l1");
const link2 = document.getElementById("l2");
const link3 = document.getElementById("l3");
const link4 = document.getElementById("l4");

const img1 = document.getElementById("im1");
const img2 = document.getElementById("im2");
const img3 = document.getElementById("im3");
const img4 = document.getElementById("im4");

const bout_cont=document.getElementById("go-to-p1");
const head=document.getElementById('head')
const videoContainer = document.querySelector('.video-container');
const video = videoContainer.querySelector('video');
const stopButton = document.getElementById('stop-video');

pv_team.style.display = "none";
personnal.style.display = "none";
us_team.style.display='none';
head.style.minWidth='350px'

stopButton.addEventListener('click', () => {
  video.pause();
  videoContainer.style.display = 'none';
});

link1.addEventListener("click", function () {
  head.style.minWidth='350px'
  img1.src="images/step-1-active.png"
  img2.src="images/step-2.png"
  img3.src="images/step-3.png"
  img4.src="images/step-4.png"
  about.style.display = "block";
  personnal.style.display = "none";
  pv_team.style.display = "none";
  us_team.style.display = "none";
});
link2.addEventListener("click", function () {
    head.style.minWidth='480px'
  img1.src="images/step-1.png"
  img2.src="images/step-2-active.png";
  img3.src="images/step-3.png"
  img4.src="images/step-4.png"
  personnal.style.display = "block";
  about.style.display = "none";
  us_team.style.display = "none";
  pv_team.style.display = "none";
});
link3.addEventListener("click", function () {
    head.style.minWidth='480px'
  img1.src="images/step-1.png"
  img2.src="images/step-2.png"
  img3.src="images/step-3-active.png";
  img4.src="images/step-4.png"
  about.style.display = "none";
  personnal.style.display = "none";
  pv_team.style.display = "block";
  us_team.style.display = "none";
 
});

link4.addEventListener("click", function () {
    head.style.minWidth='480px'
  img1.src="images/step-1.png"
  img2.src="images/step-2.png"
  img3.src="images/step-3.png"
  img4.src="images/step-4-active.png"
  about.style.display = "none";
  personnal.style.display = "none";
  pv_team.style.display = "none";
  us_team.style.display = "block";

});
 bout_cont.addEventListener("click",()=>{
    head.style.minWidth='480px'
  img1.src="images/step-1.png"
  img2.src="images/step-2.png"
  img3.src="images/step-3.png"
  img4.src="images/step-4.png"
  personnal.style.display = "block";
  about.style.display = "none";
  us_team.style.display = "none";
  pv_team.style.display = "none";
 })

function supprimerEtAfficher(element1, element2,element3, elementAfficher1,elementAfficher2,elementAfficher3) {
  $(element1).css("display", "none");
  $(element2).css("display", "none");
  $(element3).css("display", "none");
  $(elementAfficher1).css("display", "block");
  $(elementAfficher2).css("display", "block");
  $(elementAfficher3).css("display", "block");
}

$("#rideau-intro #options button").click(function (e) { 
  $("#rideau-intro").css("display", "none");
  $("#control-level").css("display", "block");
  
});
$("#bl3").click(function (e) { 
  supprimerEtAfficher("#tableau-l2","#optl3","#aboutl1","#tableau-l3","#optl1","#aboutl3")

});
$("#bl1").click(function (e) { 
  supprimerEtAfficher("#optl1","#tableau-l3","#aboutl3","#tableau-l2","#optl3","#aboutl1")
});
$("#optl1").click(function (e) { 
  supprimerEtAfficher("#optl1","#tableau-l3","#aboutl3","#tableau-l2","#optl3","#aboutl1")
});
$("#optl3").click(function (e) { 
  supprimerEtAfficher("#tableau-l2","#optl3","#aboutl1","#tableau-l3","#optl1","#aboutl3")
});