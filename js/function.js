function createCard(country) {
    return `
        <div data-name="${country.name.slug}" id="cardd" class="card">
            <img src="${country.flags.png}" alt="">
            <h3>${country.name.common}</h3>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
        </div>
    `
}
function createOneCard(country) {
    return `
        <div data-name="${country.name.slug}" id="oneCard" class="card">
            <img src="${country.flags.png}" alt="">
            <h3>${country.name.common}</h3>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
        </div>
    `
}

function createCountry(country) {
    return `
    <div class="cont">
        <button id="back" class="back"><i class="fa-solid fa-arrow-left"></i> Back</button>
            <div class="data">
                <div class="img">
                    <img src="${country.flags.png}" alt="">
                </div>
                <div class="data-title">
                    <div class="left">
                        <h3>${country.name.common}</h3>
                        <p>Native Name: <span>${country.name.nativeName}</span></p>
                        <p>Population: <span>${country.population}</span></p>
                        <p>Region: <span>${country.region}</span></p>
                        <p>Sub Region: <span>${country.subregion}</span></p>
                        <p>Capital: <span>${country.capital}</span></p>
                        <div class="border">
                            <h5>Border Countries: </h5>
                        
                        </div>
                    </div>
                    <div class="right">
                        <p>Top Level Domain: <span>.be</span></p>
                        <p>Currencies: <span>${country.currencies}</span></p>
                        <p>Languages: <span>${country.languages}</span></p>
                    </div>
                </div>
            </div>
    </div>
    `
}
export { createCard, createCountry, createOneCard }