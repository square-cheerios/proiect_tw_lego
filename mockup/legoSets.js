const legoSets = [
    {
        id: 1,
        name: "Millennium Falcon",
        available: true,
        condition: "sealed",
        category: "Star Wars",
        setNumber: "75192",
        price: 849.99,
        pieces: 7541
    },
    {
        id: 2,
        name: "Porsche 911 RSR",
        available: false,
        condition: "used",
        category: "Technic",
        setNumber: "42096",
        price: 149.99,
        pieces: 1580
    },
    {
        id: 3,
        name: "Great Pyramid of Giza",
        available: true,
        condition: "new",
        category: "Architecture",
        setNumber: "21058",
        price: 139.99,
        pieces: 1476
    }
];

const CONDITIONS = ["new", "used", "sealed"];


/* =========================
   LIST
   ========================= */

function listNames(list) {
    return list.map((set) => set.name);
}


/* =========================
   COUNT AVAILABLE SETS
   ========================= */

function countAvailable(list) {
    return list.filter((set) => set.available).length;
}


/* =========================
   SEARCH
   ========================= */

function searchSets(list, text) {
    const searchText = text.toLowerCase();

    return list.filter((set) =>
        set.name.toLowerCase().includes(searchText) ||
        set.setNumber.toLowerCase().includes(searchText) ||
        set.category.toLowerCase().includes(searchText)
    );
}


/* =========================
   NEXT ID
   ========================= */

function nextId(list) {
    return list.reduce(
        (max, set) => Math.max(max, set.id),
        0
    ) + 1;
}


/* =========================
   ADD LEGO SET
   ========================= */

function addSet(
    list,
    name,
    condition = "new",
    category = "Other",
    setNumber = "",
    price = 0,
    pieces = 0
) {
    const cleanName = name.trim();

    // Validate name
    if (cleanName === "") {
        console.log("Error: LEGO set name cannot be empty.");
        return list;
    }

    // Validate condition
    if (!CONDITIONS.includes(condition)) {
        console.log("Error: invalid LEGO set condition.");
        return list;
    }

    // Validate price
    if (price < 0) {
        console.log("Error: price cannot be negative.");
        return list;
    }

    // Validate number of pieces
    if (pieces < 0) {
        console.log("Error: number of pieces cannot be negative.");
        return list;
    }

    const newSet = {
        id: nextId(list),
        name: cleanName,
        available: true,
        condition: condition,
        category: category,
        setNumber: setNumber,
        price: price,
        pieces: pieces
    };

    return [...list, newSet];
}


/* =========================
   TOGGLE AVAILABILITY
   ========================= */

function toggleAvailability(list, id) {
    return list.map((set) =>
        set.id === id
            ? { ...set, available: !set.available }
            : set
    );
}


/* =========================
   DELETE LEGO SET
   ========================= */

function deleteSet(list, id) {
    return list.filter((set) => set.id !== id);
}


/* =========================
   CONSOLE TESTS
   ========================= */

console.log("--- Reading ---");

console.log(
    "LEGO sets:",
    listNames(legoSets).join(", ")
);

console.log(
    "Available:",
    countAvailable(legoSets)
);

console.log(
    "Search 'falcon':",
    listNames(searchSets(legoSets, "falcon")).join(", ")
);


console.log("--- Adding ---");

let list = addSet(
    legoSets,
    "Botanical Garden",
    "new",
    "Icons",
    "10345",
    329.99,
    3792
);

console.log(
    "New list:",
    list.length,
    "LEGO sets"
);

console.log(
    "Original still contains:",
    legoSets.length,
    "LEGO sets"
);


console.log("--- Toggle and delete ---");

list = toggleAvailability(list, 1);

console.log(
    "After toggling id 1, available:",
    countAvailable(list)
);

list = deleteSet(list, 3);

console.log(
    "After deleting id 3:",
    listNames(list).join(", ")
);


console.log("--- Validation ---");

addSet(list, " ");

addSet(
    list,
    "Invalid Set",
    "damaged"
);