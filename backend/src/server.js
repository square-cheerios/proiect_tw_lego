
import app from "./app.js";

const PORT = Number(process.env.PORT) || 3001;

// =========================================
// BRICKSTORE - STAGE 9
// Start Express server
// =========================================

app.listen(PORT, () => {
    console.log(
        `BrickStore API running at http://localhost:${PORT}`
    );

    console.log(
        `Health check: http://localhost:${PORT}/health`
    );

    console.log(
        `Inventory: http://localhost:${PORT}/legoSets`
    );
});
