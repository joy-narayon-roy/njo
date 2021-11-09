document.getElementById("toggolNavBtn").addEventListener("click", () => {
    let nav = document.getElementById('navBar')
    
    if (nav.classList.contains('hide_nav')) {
        nav.classList.replace('hide_nav','show_nav')
    } else {
        nav.classList.replace('show_nav','hide_nav')
    }
});
