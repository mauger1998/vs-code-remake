const grayAsideFileArray = Array.from(document.querySelectorAll(".sideLinks"))


grayAsideFileArray.forEach(file => {
    file.addEventListener("click", (e) => {
        if (!e.target.classList.contains("highlight")) {
            grayAsideFileArray.forEach(link => {
                link.classList.remove("highlight")
        })
        }
        file.classList.toggle("highlight")
        

        
    })
})
