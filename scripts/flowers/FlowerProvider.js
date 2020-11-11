let flowers = []

export const useFlowers = () => flowers.slice();

export const getFlowers = () => {
    return fetch(`http://localhost:8088/flowers`)
    .then(response => response.json())
    .then(response => flowers = response);
}

export const getFlowerFromJoin = join => {
    return flowers.find(flower => flower.id === join.flowerId);
}