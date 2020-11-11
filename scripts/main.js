import { getDistributorNurseries, getDistributors } from "./distributors/DistributorProvider.js";
import { ListFlowers } from "./flowers/FlowerList.js";
import { getFlowers } from "./flowers/FlowerProvider.js";
import { getNurseries, getNurseryFlowers } from "./nurseries/NurseryProvider.js";
import { ListRetailers } from "./retailers/RetailerList.js";
import { getRetailers } from "./retailers/RetailerProvider.js";

getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(getNurseries)
    .then(getDistributorNurseries)
    .then(getNurseryFlowers)
    .then(() => {
        ListFlowers();
        ListRetailers();
    });