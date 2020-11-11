import { getFlowersForNursery, getNurseryFromJoin } from "../nurseries/NurseryProvider.js"

export const Retailer = (retailer, dist, nurseries) => {
    const nurseryList = nurseries.map(elem => getNurseryFromJoin(elem))
    return `<div class="retailer">
        <h2 class="retailer__name">${retailer.name}</h2>
        <div class="retailer__address">Address: ${retailer.address} ${retailer.city}, ${retailer.state}</div>
        <h4 class="retailer__distributor">Distributor:</h4>
        <div class="distibutor__name">${dist.name}</div>
        <h5 class="distributor__buysFrom">Buys from nurseries:</h5>
        ${nurseryList.map(nursery => {
            return `<div class="nursery">Name: ${nursery.name}</div>
                <div class="nursery__products">Sells: <ul>${getFlowersForNursery(nursery).map(flower => 
                    `<li>${flower.commonName}</li>`).join("")}</ul>`
        }).join("")}
        </div>`
}