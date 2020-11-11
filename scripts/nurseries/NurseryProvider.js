import { getFlowerFromJoin, getFlowers } from "../flowers/FlowerProvider.js";

let nurseries = [];
let nurseryFlowers = [];

export const useNurseries = () => nurseries.slice();

export const getNurseries = () => {
    return fetch(`http://localhost:8088/nurseries`)
    .then(response => response.json())
    .then(response => nurseries = response)
}

export const useNurseryFlowers = () => nurseryFlowers.slice();

export const getNurseryFlowers = () => {
    return fetch(`http://localhost:8088/nurseryFlowers`)
    .then(response => response.json())
    .then(response => nurseryFlowers = response);
}

export const getFlowersForNursery = nursery => {
    const flowerJoins = nurseryFlowers.filter(obj => obj.nurseryId == nursery.id);
    return flowerJoins.map(join => getFlowerFromJoin(join));
}

export const getNurseryFromJoin = join => {
    return nurseries.find(nursery => nursery.id === join.nurseryId);
}