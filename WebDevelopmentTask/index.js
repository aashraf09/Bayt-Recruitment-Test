// toggle navbar
const toggleNavbar = () => {
    const nav = document.getElementById('nav-items').classList.contains('display-none');
    nav ?
        document.getElementById('nav-items').classList.remove('display-none')
        : document.getElementById('nav-items').classList.add('display-none');
}

// show search bar
const showShearchBar = () => {
    displayProperty = document.getElementById('search-box').style.display = 'block';
}