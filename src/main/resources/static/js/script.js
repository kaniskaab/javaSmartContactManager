console.log("Script loaded")
// chnage theme work
let currentTheme = getTheme();
//initially -->

document.addEventListener('DOMContentLoaded', ()=>{
    changeTheme();
})

function changeTheme(){
   const changeThemeButton =  document.querySelector("#theme_change_button");
changePageTheme(currentTheme, currentTheme);
   changeThemeButton.addEventListener("click", (event)=>{
    const oldTheme = currentTheme;
    if(currentTheme==="dark"){
        currentTheme="light";
       }
       else currentTheme="dark";

changePageTheme(currentTheme, oldTheme);
   })
}
// set theme to local storage
function setTheme (theme){
    localStorage.setItem("theme", theme);
}

//get theme from local storage

function getTheme(){
    let theme = localStorage.getItem("theme");
    return theme? theme:"light";
}

//change current page theme
function changePageTheme(theme, oldTheme){
    setTheme(currentTheme);
    document.querySelector('html').classList.remove(oldTheme);
    document.querySelector('html').classList.add(theme);
    document.querySelector("#theme_change_button").querySelector("span").textContent=theme=="light"?"Dark":"Light";

}

// end of chnage theme work