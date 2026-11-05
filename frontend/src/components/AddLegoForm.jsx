
import { useState } from "react";

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
    const [form, setForm] = useState(INITIAL_FORM);
    const [formError, setFormError] = useState("");

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormError("");

        const name = form.name.trim();
        const setNumber = form.setNumber.trim();
        const category = form.category.trim();
        const pieces = Number(form.pieces);
        const price = form.price.trim() === ""
            ? null
            : Number(form.price);

        if (!name || !setNumber || !category) {
            setFormError("Please complete all required fields.");
            return;
        }

        if (!/^\d+$/.test(setNumber)) {
            setFormError("Set number must contain only digits.");
            return;
        }

        if (!Number.isInteger(pieces) || pieces <= 0) {
            setFormError("Please enter a valid number of pieces.");
            return;
        }

        if (price !== null && (!Number.isFinite(price) || price < 0)) {
            setFormError("Please enter a valid price.");
            return;
        }

        if (existingSets.some((set) => set.setNumber === setNumber)) {
            setFormError("This LEGO set number already exists.");
            return;
        }

        const newSet = {
            id: Math.max(0, ...existingSets.map((set) => Number(set.id) || 0)) + 1,
            name,
            setNumber,
            category,
            pieces,
            price,
            currency: "USD",
            condition: form.condition,
            available: form.available,
            image: form.image.trim(),
            images: form.image.trim() ? [form.image.trim()] : [],
            description: form.description.trim(),
            instructionsUrl:
                `https://www.lego.com/en-us/service/buildinginstructions/${setNumber}`
        };

        onAdd(newSet);
        setForm({ ...INITIAL_FORM });
    }

    return (
        <form className="add-lego-form" onSubmit={handleSubmit}>
            <h3>Add a New LEGO Set</h3>

            <div className="form-grid">
                <label>
                    Set Name *
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. LEGO Bonsai Tree"
                        required
                    />
                </label>

                <label>
                    Set Number *
                    <input
                        name="setNumber"
                        value={form.setNumber}
                        onChange={handleChange}
                        placeholder="e.g. 10281"
                        required
                    />
                </label>

                <label>
                    Category *
                    <input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="e.g. Icons"
                        required
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
                        required
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
                    />
                </label>

                <label>
                    Condition
                    <select
                        name="condition"
                        value={form.condition}
                        onChange={handleChange}
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
                />
            </label>

            <label className="availability-checkbox">
                <input
                    type="checkbox"
                    name="available"
                    checked={form.available}
                    onChange={handleChange}
                />
                Available in inventory
            </label>

            {formError && (
                <p className="form-error" role="alert">
                    {formError}
                </p>
            )}

            <button type="submit" className="add-lego-submit">
                + Add to Inventory
            </button>
        </form>
    );
}
