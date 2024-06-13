// routes/routes.js
// const express = require("express");
// const router = express.Router();
// const revenueController = require("../controllers/revenueController");
// const verify = require("../middlewares/verify"); // Improt middleware verify

// router.get("/", verify, revenueController.getAllRevenues); // Gunakan middleware verify di sini
// router.post("/", verify, revenueController.createRevenue); // Gunakan middleware verify di sini

// module.exports = router;

const express = require("express");
const router = express.Router();
const revenueController = require("../controllers/revenueController");
const verify = require("../middlewares/verify");

// Gunakan middleware verify di sini untuk semua rute yang memerlukan otorisasi
router.get("/", verify, revenueController.getAllRevenues);
router.post("/", verify, revenueController.addRevenue);
router.put("/:id", verify, revenueController.updateRevenue);
router.delete("/:id", verify, revenueController.deleteRevenue);

module.exports = router;
