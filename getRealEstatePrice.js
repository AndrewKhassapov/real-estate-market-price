/*
* Retunrs the algorithmic advertised and expected listing price
* for realestate.com.au properties.
*/
function getRealEstatePrice()
{
    if (REA)
    {
        let adPrice = REA.targeting.ad_price;
        let listPrice = REA.targeting.listing_price;
        return ("Advertised price: $" + adPrice + "\n\nExpected listing price: $" + listPrice);
    }
    return "Realestate.com.au has been updated and this is no longer valid. To be continued!";
}

// Print the price to the console.
console.log(getRealEstatePrice());
