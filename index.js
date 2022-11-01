const grayAsideFileArray = Array.from(document.querySelectorAll(".sideLinks"))
const pageName = document.querySelector(".pageNameP")
const pageNameSpan = document.querySelector(".pageNameSpan")
const tabWrapper = document.querySelector(".tabWrapper")
const htmlTab = document.querySelector(".htmlTab")
const cssTab = document.querySelector(".cssTab")
const jsTab = document.querySelector(".jsTab")
const downArrow = document.getElementById("rotate")
const downArrowContainer = document.getElementById("split")
const explorerIcons = document.querySelectorAll("#secondFile")
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
            pageName.textContent = "index.html"
            pageNameSpan.innerHTML = "<>"
            pageNameSpan.setAttribute("id", "orange")
        } else if (e.target == grayAsideFileArray[1]) {
            cssTab.classList.add("addToTab")
            htmlTab.classList.remove("addToTab")
            jsTab.classList.remove("addToTab")
            pageName.textContent = "style.css"
            pageNameSpan.innerHTML = "#"
            pageNameSpan.setAttribute("id", "blue")
        } else if (e.target == grayAsideFileArray[2]) {
            jsTab.classList.add("addToTab")
            htmlTab.classList.remove("addToTab")
            cssTab.classList.remove("addToTab")
            pageName.textContent = "script.js"
            pageNameSpan.innerHTML = "JS"
            pageNameSpan.setAttribute("id", "yellow")
        }
    })
})

downArrow.addEventListener("click", (e) => {
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


