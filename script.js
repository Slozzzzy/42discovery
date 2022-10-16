window.onscroll = function() {scroll(); scrollFunction()};

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let mybutton = document.getElementById("myBtn");
  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  function topFunction() {
   document.body.scrollTop = 0; 
   document.documentElement.scrollTop = 0;
}

const text = document.querySelector(".second-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Student";
            }, 0);
            setTimeout(() => {
                text.textContent = "Gamer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Freelance";
            }, 8000);
            setTimeout(() => {
                text.textContent = "Music Enthusiast";
            }, 12000);
        }

        textLoad();
        setInterval(textLoad, 16000);