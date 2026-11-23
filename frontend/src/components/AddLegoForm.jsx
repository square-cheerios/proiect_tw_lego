
import { useRef, useState } from "react";
import styles from "./AddLegoForm.module.css";

// =====================================================
// BRICKSTORE - STAGE 8
// Controlled form with validation, API submission
// and component-scoped CSS Modules
// =====================================================

const INITIAL_FORM = {
    name: "",
    setNumber: "",
    category: "",
    pieces: "",
    price: "",
    condition: "new",
    available: true,
    image: "",
    description: ""
};

export default function AddLegoForm({ onAdd, existingSets }) {
    const [form, setForm] = useState({ ...INITIAL_FORM });
    const [formError, setFormError] = useState("");
    const [invalidField, setInvalidField] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submittingRef = useRef(false);

    // Update the corresponding field in React state
    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

        if (formError) {
            setFormError("");
            setInvalidField("");
        }
    }

    // Validate before sending anything to the API
    function validateForm() {
        const name = form.name.trim();
        const setNumber = form.setNumber.trim();
        const category = form.category.trim();
        const pieces = Number(form.pieces);
        const price = form.price.trim() === ""
            ? null
            : Number(form.price);

        if (!name) {
            return ["name", "Set name is required."];
        }

        if (name.length > 100) {
            return ["name", "Set name must have at most 100 characters."];
        }

        if (!setNumber) {
            return ["setNumber", "Set number is required."];
        }

        if (!/^\d+$/.test(setNumber)) {
            return ["setNumber", "Set number must contain only digits."];
        }

        if (!category) {
            return ["category", "Category is required."];
        }

        if (
            form.pieces.trim() === "" ||
            !Number.isInteger(pieces) ||
            pieces <= 0
        ) {
            return ["pieces", "Please enter a valid number of pieces."];
        }

        if (
            price !== null &&
            (!Number.isFinite(price) || price < 0)
        ) {
            return ["price", "Please enter a valid price."];
        }

        if (
            existingSets.some(
                (set) => String(set.setNumber) === setNumber
            )
        ) {
            return ["setNumber", "This LEGO set number already exists."];
        }

        return ["", ""];
    }

    // Submit the new LEGO set to the API
    async function handleSubmit(event) {
        event.preventDefault();

        // Prevent duplicate requests
        if (submittingRef.current) {
            return;
        }

        const [field, message] = validateForm();

        if (message) {
            setInvalidField(field);
            setFormError(message);
            return;
        }

        setFormError("");
        setInvalidField("");
        submittingRef.current = true;
        setIsSubmitting(true);

        const setNumber = form.setNumber.trim();
        const image = form.image.trim();

        // The server generates the ID
        const newSet = {
            name: form.name.trim(),
            setNumber,
            category: form.category.trim(),
            pieces: Number(form.pieces),
            price: form.price.trim() === ""
                ? null
                : Number(form.price),
            currency: "USD",
            condition: form.condition,
            available: form.available,
            image,
            images: image ? [image] : [],
            description: form.description.trim(),
            instructionsUrl:
                `https://www.lego.com/en-us/service/buildinginstructions/${setNumber}`
        };

        try {
            // InventoryPage.jsx sends the POST request
            await onAdd(newSet);

            // Clear the form only after successful saving
            setForm({ ...INITIAL_FORM });
        } catch (error) {
            // Keep the entered values when saving fails
            setFormError(error.message);
        } finally {
            submittingRef.current = false;
            setIsSubmitting(false);
        }
    }

    return (
        <form
            className={styles.addLegoForm}
            onSubmit={handleSubmit}
            noValidate
            data-testid="form"
        >
            <h3>Add a New LEGO Set</h3>

            <div className={styles.formGrid}>

                <label>
                    Set Name *
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. LEGO Bonsai Tree"
                        maxLength={100}
                        aria-invalid={invalidField === "name"}
                        data-testid="form-title"
                    />
                </label>

                <label>
                    Set Number *
                    <input
                        name="setNumber"
                        value={form.setNumber}
                        onChange={handleChange}
                        placeholder="e.g. 10281"
                        aria-invalid={invalidField === "setNumber"}
                        data-testid="form-setNumber"
                    />
                </label>

                <label>
                    Category *
                    <input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="e.g. Icons"
                        aria-invalid={invalidField === "category"}
                        data-testid="form-category"
                    />
                </label>

                <label>
                    Number of Pieces *
                    <input
                        type="number"
                        name="pieces"
                        value={form.pieces}
                        onChange={handleChange}
                        min="1"
                        step="1"
                        aria-invalid={invalidField === "pieces"}
                        data-testid="form-pieces"
                    />
                </label>

                <label>
                    Price (USD)
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        placeholder="Optional"
                        aria-invalid={invalidField === "price"}
                        data-testid="form-price"
                    />
                </label>

                <label>
                    Condition
                    <select
                        name="condition"
                        value={form.condition}
                        onChange={handleChange}
                        data-testid="form-condition"
                    >
                        <option value="new">New</option>
                        <option value="sealed">Sealed</option>
                        <option value="used">Used</option>
                    </select>
                </label>

            </div>

            <label>
                Image URL (optional)
                <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://example.com/lego.jpg"
                    data-testid="form-image"
                />
            </label>

            <label>
                Description
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Describe your LEGO set..."
                    data-testid="form-description"
                />
            </label>

            <label className={styles.availabilityCheckbox}>
                <input
                    type="checkbox"
                    name="available"
                    checked={form.available}
                    onChange={handleChange}
                    data-testid="form-available"
                />
                Available in inventory
            </label>

            {formError && (
                <p
                    className={styles.formError}
                    role="alert"
                    data-testid="form-error"
                >
                    {formError}
                </p>
            )}

            <button
                type="submit"
                className={styles.addLegoSubmit}
                disabled={isSubmitting}
                data-testid="form-submit"
            >
                {isSubmitting
                    ? "Saving..."
                    : "+ Add to Inventory"}
            </button>
        </form>
    );
}
