gsap.registerPlugin(ScrollTrigger)


const grayAsideFileArray = Array.from(document.querySelectorAll(".vs-code__side-links"))
const vsCode__pageName = document.querySelector(".vs-code__page-name-p")
const vsCode__pageNameSpan = document.querySelector(".vs-code__page-nameSpan")
const tabWrapper = document.querySelector(".tabWrapper")
const htmlTab = document.querySelector(".htmlTab")
const cssTab = document.querySelector(".cssTab")
const jsTab = document.querySelector(".jsTab")
const downArrow = document.getElementById("rotate")
const downArrowContainer = document.getElementById("vs-code__split")
const explorerIcons = document.querySelectorAll("#vs-code__second-file")
const body = document.querySelector("body")


grayAsideFileArray.forEach(file => {
    file.addEventListener("click", (e) => {
        if (!e.target.classList.contains("highlight")) {
            grayAsideFileArray.forEach(link => {
                link.classList.remove("highlight")
            })
        }
        file.classList.toggle("highlight")
        if (e.target == grayAsideFileArray[0]) {
            htmlTab.classList.add("addToTab")
            jsTab.classList.remove("addToTab")
            cssTab.classList.remove("addToTab")
            vsCode__pageName.textContent = "index.html"
            vsCode__pageNameSpan.innerHTML = "<>"
            vsCode__pageNameSpan.setAttribute("id", "orange")
        } else if (e.target == grayAsideFileArray[1]) {
            cssTab.classList.add("addToTab")
            htmlTab.classList.remove("addToTab")
            jsTab.classList.remove("addToTab")
            vsCode__pageName.textContent = "style.css"
            vsCode__pageNameSpan.innerHTML = "#"
            vsCode__pageNameSpan.setAttribute("id", "blue")
        } else if (e.target == grayAsideFileArray[2]) {
            jsTab.classList.add("addToTab")
            htmlTab.classList.remove("addToTab")
            cssTab.classList.remove("addToTab")
            vsCode__pageName.textContent = "script.js"
            vsCode__pageNameSpan.innerHTML = "JS"
            vsCode__pageNameSpan.setAttribute("id", "yellow")
        }
    })
})

downArrow.addEventListener("click", (e) => {
    console.log("hey")
    downArrowContainer.classList.toggle("goBlue")
    downArrow.classList.toggle("rotateArrow")
    grayAsideFileArray.forEach(file => {
        file.classList.toggle("filesDissapear")
        

    })
    explorerIcons.forEach(icon => {
        icon.classList.toggle("filesDissapear")
    })
})


function loadFunction() {
    body.classList.remove("removeFromBody")
}

// Terminal
const terminalMain = document.querySelector(".terminalMain")
const vsCodeBody = document.querySelector(".vsCodeBody")
function vsCodeAppear() {
    vsCodeBody.classList.remove("vsCodeGrow")
    terminalMain.style.display = "none"
    
}


setTimeout(() => {
    vsCodeAppear()

}, 3500)

//Portfolio Body
const portfolioBody = document.querySelector(".mainPortfolioBody")
setTimeout (() => {
    portfolioBody.style.display = "flex"
}, 1)



// Scroll into view
//*****************
const workButton_scrollTo = document.getElementById("work-button__scroll-here")
const workButtonScroll = document.getElementById("scroll-to-work__button")

workButtonScroll.addEventListener("click", () => {
    workButton_scrollTo.scrollIntoView()
})

// SVG

// let path = document.querySelector("path")
// let pathLength = path.getTotalLength()

// path.style.strokeDasharray = pathLength + " " + pathLength

// path.style.strokeDashoffset = pathLength

// window.addEventListener("scroll", () => {
//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

//     var drawLength = pathLength * scrollPercentage;

//     path.style.strokeDashoffset = pathLength - drawLength
// })

// Scroll Trigger

gsap.registerPlugin(ScrollTrigger)

gsap.to(".cards", {
    scrollTrigger: {
        trigger:".my-skills",
        scrub:true,
        start:"top bottom",
        end:"+=450"
    
    },
    x:0,
    opacity:1,
    rotateY:"360deg"
})

gsap.to(".my-skills", {
    
    scrollTrigger: {
        trigger: ".my-skills",
        scrub:true,
    },
    y: 1,
    opacity:1,
    delay:0.2
})
gsap.to(".para", {
    scrollTrigger: {
        trigger: ".my-skills",
        scrub:true,
        start:"top bottom",
        end:"+=550"
    },
    opacity:1,
    x:0,
})


