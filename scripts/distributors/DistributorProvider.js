let distributors = [];
let distributorNurseries = [];
export const useDistributors = () => distributors.slice();

export const getDistributors = () => {
    return fetch(`http://localhost:8088/distributors`)
    .then(response => response.json())
    .then(response => distributors = response);
}

export const useDistributorNurseries = () => distributorNurseries.slice();

export const getDistributorNurseries = () => {
    return fetch(`http://localhost:8088/distributorNurseries`)
    .then(response => response.json())
    .then(response => distributorNurseries = response);
}

export const getDistributorForRetailer = retailer => {
    return distributors.find(dist => dist.id === retailer.distributorId);
}

export const getNurseriesForDistributor = dist => {
    return distributorNurseries.filter(obj => obj.distributorId == dist.id);
}

export const getDistributorFromJoin = join => {
    return distributors.find(dist => dist.id === join.distributorId);
}