// Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// show more

// const showMore= (e) => {
//   text.classList.toggle("show-more");
//   textSection.classList.toggle("marginBottom");
//   if (readMoreBtn.innerText === "Read More") {
//     readMoreBtn.innerText = "Read Less";
//   } else {
//     readMoreBtn.innerText = "Read More";
//   }
// }

// const readMoreBtn1 = document.querySelector(".themes-para-btn-1");
// const readMoreBtn2 = document.querySelector(".themes-para-btn-2");
// const readMoreBtn3 = document.querySelector(".themes-para-btn-3");
// const readMoreBtn4 = document.querySelector(".themes-para-btn-4");
// const text = document.querySelector(".themes-para");
// const textSection = document.querySelector(".themes-option");

// readMoreBtn1.addEventListener("click",showMore);
// readMoreBtn2.addEventListener("click",showMore);
// readMoreBtn3.addEventListener("click",showMore);
// readMoreBtn4.addEventListener("click",showMore);

// function addFields(){
//   console.log(event.toElement.id)
// }

let noOfCharec = 150;
let contents = document.querySelectorAll(".themes-para");

contents.forEach((content) => {
  if (content.textContent.length < noOfCharec) {
    content.nextElementSibling.style.display = "none";
  } else {
    let displayText = content.textContent.slice(0, noOfCharec);
    let moreText = content.textContent.slice(noOfCharec);
    content.innerHTML = `${displayText}<span class="dots"></span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
}
