import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(galleryItems);

galleryItems.forEach(function(element) {
const elementOfGallery = document.createElement("div");
elementOfGallery.classList.add("gallery__item");
const link = document.createElement("a");
link.classList.add("gallery__link");
link.setAttribute("href", element.original);
const imageOfGallery = document.createElement("img");
imageOfGallery.classList.add("gallery__image");
imageOfGallery.setAttribute("src", element.preview);
imageOfGallery.setAttribute("data-source", element.original);
imageOfGallery.setAttribute("alt", element.description);
gallery.append(elementOfGallery);
elementOfGallery.append(link);
link.append(imageOfGallery);
});

function selectImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      console.log("not img");
      return;
    }
    const instance = basicLightbox.create(`<img src="${event.target.getAttribute("data-source")}"></img>`,
    { onClose: () => { 
      document.removeEventListener("keydown", escapeKey);
    },
  }); instance.show();
  document.addEventListener("keydown", escapeKey);
  function escapeKey(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escapeKey);
      return;
    }
  }
}
gallery.addEventListener("click", selectImage);