import { useFlowers } from "./FlowerProvider.js"
import { Flower } from "./Flower.js"

const contentTarget = document.querySelector(".container");

export const ListFlowers = () => {
    render(useFlowers());
}

const render = flowerArr => {
    let htmlRep = "<h1>Flowers</h1>";
    htmlRep += flowerArr.map(flower => Flower(flower)).join("")
    contentTarget.innerHTML = htmlRep;
}