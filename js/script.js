let list = document.getElementsByClassName("list");
let item = document.getElementsByClassName("gallery-item");
// let item = document.getElementsByTagName("img");

// ======== click krne pe ye highlight krega and then filter krega===========

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
      // console.log("not active", list[j])
      console.log("check i = ", list[i]);
    }
    this.classList.add("active");
    console.log(list[i]);

    // =========  filter ye krega  ========

    let datafilter = this.getAttribute("data-filter");

    for (let k = 0; k < item.length; k++) {
      item[k].classList.remove("active");
      item[k].classList.add("hide");

      if (
        item[k].getAttribute("data-item") == datafilter ||
        datafilter == "all"
      ) {
        item[k].classList.add("active");
        item[k].classList.remove("hide");
      }
    }
  });
  console.log("length of list =", list.length);
}

//  lightbox to popup image

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}

for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
  showLightBox((index += n));
}
function prevImage() {
  slideImage(-1);
}
function nextImage() {
  slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}
lightBoxContainer.addEventListener("click", closeLightBox);

// ==================== gallery hide and show kro ============

let galleryShow = document.getElementsByClassName("gallery-container");
let linkgallery = document.getElementsByClassName("boxImage");

function funcImage() {
  for (let box of galleryShow) {
    console.log("box=", box);
    console.log("type of box=", typeof box);
    console.log("value of box=", box.value);
    box.classList.add("active");
  }
}

function removeActive() {
  for (let box of galleryShow) {
    box.classList.remove("active");
  }
}

// ==================== gallery hide and show kro ============

//  ============ menu-bar =======

let menu = document.querySelector("#menu-bars-head");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};
//  ============ menu-bar =======
