export type Item = {
    name: String;
    type: String;
    origin: String;
    tier: String;
    description: String;
    stats: String;
    weight: number;
};

export type ItemTier = {
    name: String;
    weight: number;
    items: Item[];
};

let defaultBronzeItems: Item[] = [
    {
        name: "Club",
        type: "Weapon",
        origin: "None",
        tier: "Bronze",
        description: "A Club",
        stats: "1d4 bludgeoning",
        weight: 10,
    },
    {
        name: "Handaxe",
        type: "Weapon",
        origin: "None",
        tier: "Bronze",
        description: "A Handaxe",
        stats: "1d6 Slashing",
        weight: 20,
    },
];

let defaultSilverItems: Item[] = [
    {
        name: "Goblin Cleaver",
        type: "Weapon",
        origin: "None",
        tier: "Silver",
        description: "this blade loves to taste goblins",
        stats: "+1 to hit, 1d6 dmg. when attacking goblins, gain an extra d6 dmg",
        weight: 10,
    },
];

let defaultGoldItems: Item[] = [
    {
        name: "Lightsaber",
        type: "Weapon",
        origin: "None",
        tier: "Gold",
        description:
            "A plasma sword powered by midoclorians and kyber crystals",
        stats: "3 to hit. 3d6+4 slashing",
        weight: 10,
    },
];

let defaultPlatinumItems: Item[] = [
    {
        name: "Cappy",
        type: "Magic",
        origin: "Mario",
        tier: "Platinum",
        description: "Mario's hat",
        stats: "n/a",
        weight: 5,
    },
    {
        name: "Master sword",
        type: "Weapon",
        origin: "Zelda",
        tier: "Platinum",
        description: "Link's Sword",
        stats: "+4 to hit. 2d10+5 slashing, 1d6+3 radiant",
        weight: 10,
    },
];

export let defaultItemTiers: ItemTier[] = [
    {
        name: "Bronze",
        weight: 4,
        items: defaultBronzeItems,
    },
    {
        name: "Silver",
        weight: 3,
        items: defaultSilverItems,
    },
    {
        name: "Gold",
        weight: 2,
        items: defaultGoldItems,
    },
    {
        name: "Platinum",
        weight: 1,
        items: defaultPlatinumItems,
    },
];
