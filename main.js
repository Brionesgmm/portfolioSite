const aboutMeButton = document.querySelector("#aboutMeButton")
const welcome = document.querySelector("#welcome")
const myBio = document.querySelector("#myBio")

aboutMeButton.addEventListener('click', function(){
    console.log("clicked")
    welcome.classList.add("hidden")
    myBio.classList.remove('hidden')
})