import { createCard, createCountry, createOneCard } from "./function.js";
const wrapper = document.getElementById('allWrapper');
const nav = document.querySelector('.navigation');
const dark = document.getElementById('darkModeToggle');
const faMoon = document.querySelector('.fa-moon');
const faSun = document.querySelector('.fa-sun');
const inp = document.getElementById('search');
const inpDiv = document.querySelector('.search');
const inpsearch = document.getElementById('fa-solid');
const ahref = document.querySelector('.a');
const darkLight = document.querySelector('.dark');
const regionSelect = document.getElementById('region-select');
const body = document.body;
const loader = document.querySelector('.loading')
const country = document.getElementById('country')

let isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
// Default styles that are the same for both dark and light modes
const defaultStyles = {
    color: 'black', // Adjust this to your default color
};

// Dark Mode function
function darkModeFunction() {
    const darkModeStyles = {
        backgroundColor: isDarkMode ? '#202C36' : 'white',
        color: isDarkMode ? 'white' : defaultStyles.color,
    };

    faMoon.style.display = isDarkMode ? 'none' : 'block';
    faSun.style.display = isDarkMode ? 'block' : 'none';

    Object.assign(wrapper.style, darkModeStyles);
    Object.assign(nav.style, { backgroundColor: darkModeStyles.backgroundColor, ...defaultStyles });
    Object.assign(inp.style, { ...darkModeStyles, ...defaultStyles });
    Object.assign(inpDiv.style, { ...darkModeStyles });
    Object.assign(inpsearch.style, { ...darkModeStyles });
    Object.assign(ahref.style, { ...darkModeStyles });
    Object.assign(darkLight.style, { ...darkModeStyles });
    Object.assign(body.style, { backgroundColor: darkModeStyles.backgroundColor, ...defaultStyles });
    Object.assign(regionSelect.style, {
        ...darkModeStyles,
        backgroundColor: darkModeStyles.backgroundColor,
        ...defaultStyles,
    });

    localStorage.setItem('darkMode', isDarkMode);
}

// Dark Mode click
dark && dark.addEventListener('click', function (e) {
    e.preventDefault();
    isDarkMode = !isDarkMode;
    darkModeFunction();
});

inpsearch && inpsearch.addEventListener('click', function (e) {
    inpsearch.innerHTML = 'Qidirilmoqda...'
    e.preventDefault();
    inpsearch.style.cursor = 'pointer'
    fetch(`${BASE_URL}/countries?search=${inp.value}`, {
        method: "GET"
    })
        .then(res => {
            return res.json()
        })
        .then(result => {
            inpsearch.innerHTML = ''
            inp.value = ''
            result.data.forEach(data => {
                let card = createOneCard(data);
                country.innerHTML = card;
                const oneCard = document.getElementById('oneCard')
                oneCard.addEventListener('click', function (e) {
                    e.preventDefault();
                    let isName = this.getAttribute('data-name')
                    fetch(`${BASE_URL}/countries/${isName}`, {
                        method: "GET"
                    })
                        .then(res => {
                            if (res.ok) {
                                return res.json()
                            }
                        })
                        .then(data => {
                            let oneCount = createCountry(data)
                            country.innerHTML = oneCount;
                            const back = document.getElementById('back')
                            back && back.addEventListener('click', function () {
                                window.location.reload()
                            })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
            });
        })
        .catch(err => {
            console.log(err);
        })
})

const BASE_URL = `https://frontend-mentor-apis-6efy.onrender.com`;
// Sahifa yuklanganda qora yoki oq fonda qolishi
document.addEventListener('DOMContentLoaded', function () {
    loader.style.display = 'block'
    wrapper.style.display = 'none'
    darkModeFunction();
    fetch(`${BASE_URL}/countries`, {
        method: "GET"
    })
        .then(res => {
            return res.json()
        })
        .then(result => {
            wrapper.style.display = 'block'
            loader.style.display = 'none'
            result.data.forEach(data => {
                const card = createCard(data)
                country.innerHTML += card
                const cardd = document.querySelectorAll('#cardd')
                cardd.forEach(res => {
                    res.addEventListener('click', function (e) {
                        e.preventDefault();
                        let isName = this.getAttribute('data-name')
                        fetch(`${BASE_URL}/countries/${isName}`, {
                            method: "GET"
                        })
                            .then(res => {
                                if (res.ok) {
                                    return res.json()
                                }
                            })
                            .then(data => {
                                console.log(data);
                                let oneCount = createCountry(data)
                                country.innerHTML = oneCount;
                                const back = document.getElementById('back')
                                back && back.addEventListener('click', function () {
                                    window.location.reload()
                                })
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
                })
            });
        })
        .catch(err => {
            console.log(err);
        })
});


regionSelect.addEventListener('click', function (e) {
    e.preventDefault();
    fetch(`${BASE_URL}/countries?region=${regionSelect.value}`, {
        method: "GET"
    })
        .then(res => {
            return res.json()
        })
        .then(result => {
            country.innerHTML = ''
            result.data.forEach(data => {
                const card = createCard(data)
                country.innerHTML += card
                const cardd = document.querySelectorAll('#cardd')
                cardd.forEach(res => {
                    res.addEventListener('click', function (e) {
                        e.preventDefault();
                        let isName = this.getAttribute('data-name')
                        fetch(`${BASE_URL}/countries/${isName}`, {
                            method: "GET"
                        })
                            .then(res => {
                                if (res.ok) {
                                    return res.json()
                                }
                            })
                            .then(data => {
                                console.log(data);
                                let oneCount = createCountry(data)
                                country.innerHTML = oneCount;
                                const back = document.getElementById('back')
                                back && back.addEventListener('click', function () {
                                    window.location.reload()
                                })
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
                })
            });
        })
        .catch(err => {
            console.log(err);
        })
})



