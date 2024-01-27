// Import statement
import express from "express";

// Create a router instance
const router = express.Router();

// Define route handler
router.get('/', (req, res) => {
    res.send("Manas website is live");
});

// Export the router
export default router;
