import { getDistributorForRetailer, getNurseriesForDistributor } from "../distributors/DistributorProvider.js";
import { Retailer } from "./Retailer.js";
import { useRetailers } from "./RetailerProvider.js"

const contentTarget = document.querySelector(".container");

export const ListRetailers = () => {
    render(useRetailers());
}

const render = (retArr) => {
    let htmlRep = "<h1>Retailers</h1>";
    htmlRep += retArr.map(ret => {
        const dist = getDistributorForRetailer(ret)
        const nurseries = getNurseriesForDistributor(dist);
        return Retailer(ret, dist, nurseries)
    }).join("");
    contentTarget.innerHTML += htmlRep;
}