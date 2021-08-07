const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".list-group");
const bar1 = document.querySelector(".line.top");
const bar2 = document.querySelector(".line.middle");
const bar3 = document.querySelector(".line.bottom");
// const links = document.querySelector('.list-group li');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  bar1.classList.toggle("active1");
  bar2.classList.toggle("active2");
  bar3.classList.toggle("active3");
  hamburger.classList.toggle("burgerBG");
});

window.onscroll = () => {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    // console.log(document.documentElement.scrollTop);
    // console.log(document.body.scrollTop);

    let scrollpos = window.pageYOffset;
    const parallax = document.getElementById("parallax-img");
    parallax.style.backgroundPositionY = `${scrollpos * -0.6 + 950}px`;

    const parallaxAbout = document.getElementById("parallax-img");
    parallaxAbout.style.backgroundPositionY = `${scrollpos * -0.5 + 800}px`;
  }

  let scrollposHeader = window.pageYOffset;

  const parallax1 = document.getElementById("mainHead");
  parallax1.style.backgroundPositionY = `${scrollposHeader * -0.6}px`;
};
