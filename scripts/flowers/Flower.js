export const Flower = flower => {
    return `<div class="flower">
        <h3 class="flower__name">${flower.commonName}</h3>
        <div class="flower__color">Color: ${flower.color}</div>
        </div>`
}