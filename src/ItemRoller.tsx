import { useState } from "react";
import { Item, ItemTier, defaultItemTiers } from "./Item";

function ItemRoller() {
    const [item, setItem] = useState<Item | null>(null);

    let rollNewItem = () => {
        setItem(rollItem(defaultItemTiers));
    };
    return (
        <>
            <h1>Item Roller</h1>
            <button onClick={rollNewItem}>Roll New Item</button>
            {item ? (
                <>
                    <h3>{item.name}</h3>
                    <p>Type: {item.type}</p>
                    <p>Origin: {item.origin}</p>
                    <p>Tier: {item.tier}</p>
                    <p>Description: {item.description}</p>
                    <p>Stats: {item.stats}</p>
                </>
            ) : null}
        </>
    );
}

function rollItem(tiers: ItemTier[]): Item | null {
    const tier = rollWeightedTier(tiers);
    return tier ? rollWeightedItem(tier?.items) : null;
}

function rollWeightedTier(tiers: ItemTier[]): ItemTier | null {
    let cumulativeWeight = 0;
    tiers.forEach((tier) => {
        cumulativeWeight += tier.weight;
    });

    const random = Math.ceil(Math.random() * cumulativeWeight);
    let cursor = 0;
    for (let i = 0; i < tiers.length; i++) {
        cursor += tiers[i].weight;
        if (random <= cursor) {
            return tiers[i];
        }
    }
    console.error("Unable to roll item tier");
    return null;
}

function rollWeightedItem(items: Item[]): Item | null {
    let cumulativeWeight = 0;
    items.forEach((item) => {
        cumulativeWeight += item.weight;
    });

    const random = Math.ceil(Math.random() * cumulativeWeight);

    let cursor = 0;
    for (let i = 0; i < items.length; i++) {
        cursor += items[i].weight;
        if (random <= cursor) {
            return items[i];
        }
    }
    console.error("Unable to roll item");
    return null;
}

export default ItemRoller;
