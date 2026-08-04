export function generatePackingList(
    destination: string,
    totalDays: number,
    weather: number | null
) {
    const items = new Set<string>();

    // Essentials
    items.add("Passport");
    items.add("Travel Insurance");
    items.add("Phone Charger");
    items.add("Power Bank");
    items.add("Wallet");
    items.add("Toiletries");
    items.add("Medicines");

    // Trip length
    if (totalDays >= 5) {
        items.add("Laundry Bag");
        items.add("Extra Clothes");
    }

    // Weather
    if (weather !== null) {
        if (weather <= 10) {
            items.add("Winter Jacket");
            items.add("Gloves");
            items.add("Thermal Wear");
            items.add("Wool Socks");
        } else if (weather <= 20) {
            items.add("Light Jacket");
        } else {
            items.add("Sunglasses");
            items.add("Cap");
            items.add("Sunscreen");
        }
    }

    // Rain
    if (destination.toLowerCase().includes("japan")) {
        items.add("Umbrella");
    }

    // Walking
    items.add("Comfortable Walking Shoes");

    // Electronics
    items.add("Camera");

    // Adapter
    items.add("Power Adapter");

    return [...items];
}