/**
 * Returns the algorithmic advertised and expected listing price
 * for realestate.com.au properties.
 * @returns {string} RealEstate.com.au algorithmic advertised and expected listing price as set by the agent.
 */
function getRealEstatePrice() {
    if (REA) {
        let adPrice = REA.targeting.ad_price;
        let listPrice = REA.targeting.listing_price;
        return ("Advertised price: $" + adPrice.replace("_", "-") + "\n\nExpected listing price: $" + listPrice.replace("_", "-"));
    }
    return "Realestate.com.au has been updated and this is no longer valid. To be continued!";
}

/**
 * Displays the algorithmic prices on the 'property-price' element
 * if no price is displayed
 * for realestate.com.au properties.
 */
function displayRealEstatePrice() {
    let element = document.getElementsByClassName("property-price")[0];
    if (!element.textContent.includes("$")) {
        // Display algorithmic price if no price is shown.
        element.textContent = getRealEstatePrice();
    }
}

// Print the price to the console.
//console.log(getRealEstatePrice());

// Display price on web site.
displayRealEstatePrice();