
import { Router } from "express";
import { readFileSync } from "node:fs";

import {
    parseId,
    validateLegoSet
} from "../validation.js";

const router = Router();

// =========================================
// BRICKSTORE - STAGE 9
// In-memory LEGO inventory
// =========================================

// Load the initial inventory from the JSON seed file
const initialData = JSON.parse(
    readFileSync(
        new URL(
            "../data/initialLegoSets.json",
            import.meta.url
        ),
        "utf8"
    )
);

// Inventory stored in memory
let legoSets = initialData.legoSets.map((set) => ({
    ...set,
    id: Number(set.id)
}));

// Generate unique IDs on the server
let nextId = Math.max(
    0,
    ...legoSets.map((set) => set.id)
) + 1;

// =========================================
// HELPER FUNCTIONS
// =========================================

function findIndex(req, res) {
    const id = parseId(req.params.id);

    if (id === null) {
        res.status(400).json({
            error: "Invalid LEGO set ID."
        });

        return -1;
    }

    const index = legoSets.findIndex(
        (set) => set.id === id
    );

    if (index === -1) {
        res.status(404).json({
            error: "LEGO set not found."
        });
    }

    return index;
}

function hasDuplicateSetNumber(setNumber, excludedId = null) {
    return legoSets.some(
        (set) =>
            String(set.setNumber) === String(setNumber) &&
            set.id !== excludedId
    );
}

// =========================================
// GET /legoSets
// Retrieve the entire inventory
// =========================================

router.get("/", (req, res) => {
    res.status(200).json(legoSets);
});

// =========================================
// GET /legoSets/:id
// Retrieve an individual LEGO set
// =========================================

router.get("/:id", (req, res) => {
    const index = findIndex(req, res);

    if (index === -1) return;

    res.status(200).json(legoSets[index]);
});

// =========================================
// POST /legoSets
// Create a new LEGO set
// =========================================

router.post("/", (req, res) => {
    const { errors, data } = validateLegoSet(
        req.body ?? {}
    );

    if (errors.length > 0) {
        return res.status(400).json({
            error: errors.join("; ")
        });
    }

    if (hasDuplicateSetNumber(data.setNumber)) {
        return res.status(400).json({
            error: "This LEGO set number already exists."
        });
    }

    const newSet = {
        id: nextId++,
        ...data
    };

    legoSets.push(newSet);

    res.status(201).json(newSet);
});

// =========================================
// PATCH /legoSets/:id
// Partially update a LEGO set
// =========================================

router.patch("/:id", (req, res) => {
    const index = findIndex(req, res);

    if (index === -1) return;

    const { errors, data } = validateLegoSet(
        req.body ?? {},
        { partial: true }
    );

    if (errors.length > 0) {
        return res.status(400).json({
            error: errors.join("; ")
        });
    }

    const currentSet = legoSets[index];

    if (
        data.setNumber !== undefined &&
        hasDuplicateSetNumber(
            data.setNumber,
            currentSet.id
        )
    ) {
        return res.status(400).json({
            error: "This LEGO set number already exists."
        });
    }

    legoSets[index] = {
        ...currentSet,
        ...data
    };

    res.status(200).json(legoSets[index]);
});

// =========================================
// DELETE /legoSets/:id
// Delete a LEGO set
// =========================================

router.delete("/:id", (req, res) => {
    const index = findIndex(req, res);

    if (index === -1) return;

    legoSets.splice(index, 1);

    res.status(204).end();
});

export default router;
