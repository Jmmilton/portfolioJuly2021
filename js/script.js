const target = document.querySelector("footer");

const scrollToTopBtn = document.querySelector(".scrollToTopBtn")
const rootElement = document.documentElement

function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollToTopBtn.classList.add("showBtn")
        } else {
            scrollToTopBtn.classList.remove("showBtn")
        }
    });
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop);

let observer = new IntersectionObserver(callback);

observer.observe(target)


const projectItem = document.querySelectorAll('.project-item');

for(var i = 0; i < projectItem.length; i++){
    projectItem[i].addEventListener('focusin', function(){
        if(!projectItem[i].classList == 'project-item:hover'){
        projectItem[i].classList.addClass('project-item:hover')
        } else {
        projectItem[i].classList.remove('project-item:hover')
        }
    }, false)
}


const seeMoreBtn = document.querySelector('.see-more');
const hiddenGallery = document.querySelector('.scrolling-wrapper');
const arrowBtn = document.querySelectorAll('.arrow')

function showMore() {
    hiddenGallery.classList.toggle("show-overflow")
    seeMoreBtn.classList.toggle("see-less")
}

seeMoreBtn.addEventListener("click", showMore)

// for (let i = 0; i < arrowBtn.length; i++) {
//     arrowBtn[i].addEventListener("click", function(){
//         arrowBtn[1].classList.toggle("dim-arrow");
//         if(arrowBtn[1].classList.includes("dim-arrow")){
//             arrowBtn[0].classList.remove("dim-arrow");
//         }
//     })
// }

arrowBtn[0].addEventListener("click", function(){
    if(hiddenGallery.classList.contains("show-overflow")){
        arrowBtn[0].classList.add("dim-arrow")
        arrowBtn[1].classList.remove("dim-arrow")
    } else {
        arrowBtn[0].classList.add("dim-arrow")
        arrowBtn[1].classList.remove("dim-arrow")
    }
})

arrowBtn[1].addEventListener("click", function(){
    if(hiddenGallery.classList.contains("show-overflow")){
        arrowBtn[1].classList.add("dim-arrow")
        arrowBtn[0].classList.remove("dim-arrow")
    } else {
        arrowBtn[1].classList.add("dim-arrow")
        arrowBtn[0].classList.remove("dim-arrow")
    }
})