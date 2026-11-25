
import express from "express";
import cors from "cors";

import legoSetsRouter from "./routes/legoSets.js";

const app = express();

// =========================================
// BRICKSTORE - STAGE 9
// Express application configuration
// =========================================

// CORS middleware
app.use(
    cors({
        origin: process.env.CORS_ORIGIN ||
            "http://localhost:5173"
    })
);

// Parse JSON request bodies
app.use(express.json());

// =========================================
// HEALTH CHECK
// =========================================

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

// =========================================
// LEGO INVENTORY ROUTES
// =========================================

app.use("/legoSets", legoSetsRouter);

// =========================================
// UNKNOWN ROUTE - 404
// =========================================

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found."
    });
});

// =========================================
// CENTRALIZED ERROR HANDLING
// =========================================

app.use((err, req, res, next) => {
    console.error(err);

    if (res.headersSent) {
        return next(err);
    }

    const status = err.status || 500;

    res.status(status).json({
        error: status === 500
            ? "Internal server error."
            : err.message
    });
});

export default app;
