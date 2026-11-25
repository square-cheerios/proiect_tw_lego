
 // =========================================
 // BRICKSTORE - STAGE 9
 // Server-side validation
 // =========================================

export const CONDITIONS = ["new", "used", "sealed"];

const NAME_MAX = 100;

// =========================================
// VALIDATE LEGO SET
// =========================================

export function validateLegoSet(
    body,
    { partial = false } = {}
) {
    const errors = [];
    const data = {};

    if (
        body === null ||
        typeof body !== "object" ||
        Array.isArray(body)
    ) {
        return {
            errors: ["Request body must be an object."],
            data
        };
    }

    // Set name
    if (!partial || body.name !== undefined) {
        if (
            typeof body.name !== "string" ||
            body.name.trim() === ""
        ) {
            errors.push("Set name is required.");
        } else if (body.name.trim().length > NAME_MAX) {
            errors.push(
                `Set name must have at most ${NAME_MAX} characters.`
            );
        } else {
            data.name = body.name.trim();
        }
    }

    // Set number
    if (!partial || body.setNumber !== undefined) {
        if (
            typeof body.setNumber !== "string" ||
            !/^\d+$/.test(body.setNumber.trim())
        ) {
            errors.push(
                "Set number must contain only digits."
            );
        } else {
            data.setNumber = body.setNumber.trim();
        }
    }

    // Category
    if (!partial || body.category !== undefined) {
        if (
            typeof body.category !== "string" ||
            body.category.trim() === ""
        ) {
            errors.push("Category is required.");
        } else {
            data.category = body.category.trim();
        }
    }

    // Number of pieces
    if (!partial || body.pieces !== undefined) {
        if (
            !Number.isInteger(body.pieces) ||
            body.pieces <= 0
        ) {
            errors.push(
                "Number of pieces must be a positive integer."
            );
        } else {
            data.pieces = body.pieces;
        }
    }

    // Price (optional)
    if (body.price !== undefined) {
        if (
            body.price !== null &&
            (
                typeof body.price !== "number" ||
                !Number.isFinite(body.price) ||
                body.price < 0
            )
        ) {
            errors.push(
                "Price must be a non-negative number."
            );
        } else {
            data.price = body.price;
        }
    } else if (!partial) {
        data.price = null;
    }

    // Currency
    if (body.currency !== undefined) {
        if (body.currency !== "USD") {
            errors.push("Currency must be USD.");
        } else {
            data.currency = body.currency;
        }
    } else if (!partial) {
        data.currency = "USD";
    }

    // Condition
    if (body.condition !== undefined) {
        if (!CONDITIONS.includes(body.condition)) {
            errors.push(
                `Condition must be one of: ${CONDITIONS.join(", ")}.`
            );
        } else {
            data.condition = body.condition;
        }
    } else if (!partial) {
        data.condition = "new";
    }

    // Availability
    if (body.available !== undefined) {
        if (typeof body.available !== "boolean") {
            errors.push(
                "Availability must be true or false."
            );
        } else {
            data.available = body.available;
        }
    } else if (!partial) {
        data.available = true;
    }

    // Main image
    if (body.image !== undefined) {
        if (typeof body.image !== "string") {
            errors.push("Image must be a string.");
        } else {
            data.image = body.image.trim();
        }
    } else if (!partial) {
        data.image = "";
    }

    // Image gallery
    if (body.images !== undefined) {
        if (
            !Array.isArray(body.images) ||
            !body.images.every(
                (image) => typeof image === "string"
            )
        ) {
            errors.push(
                "Images must be an array of strings."
            );
        } else {
            data.images = body.images
                .map((image) => image.trim())
                .filter(Boolean);
        }
    } else if (!partial) {
        data.images = data.image ? [data.image] : [];
    }

    // Description
    if (body.description !== undefined) {
        if (typeof body.description !== "string") {
            errors.push(
                "Description must be a string."
            );
        } else {
            data.description = body.description.trim();
        }
    } else if (!partial) {
        data.description = "";
    }

    // LEGO building instructions
    if (body.instructionsUrl !== undefined) {
        if (typeof body.instructionsUrl !== "string") {
            errors.push(
                "Instructions URL must be a string."
            );
        } else {
            data.instructionsUrl =
                body.instructionsUrl.trim();
        }
    } else if (data.setNumber !== undefined) {
        data.instructionsUrl =
            `https://www.lego.com/en-us/service/buildinginstructions/${data.setNumber}`;
    }

    return { errors, data };
}

// =========================================
// VALIDATE ID
// =========================================

export function parseId(value) {
    if (!/^\d+$/.test(String(value))) {
        return null;
    }

    const id = Number(value);

    return Number.isSafeInteger(id) && id > 0
        ? id
        : null;
}
