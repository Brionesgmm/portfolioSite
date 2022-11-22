const aboutMeButton = document.querySelector("#aboutMe")
const welcome = document.querySelector("#welcomeContent")
const myBio = document.querySelector("#aboutMeContent")

aboutMeButton.addEventListener('click', function(){
    console.log("clicked")
    welcome.classList.add("hidden")
    myBio.classList.remove('hidden')
})