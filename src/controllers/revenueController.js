const db = require("../models");

const revenueController = {
  getAllRevenues: async (req, res) => {
    try {
      const revenues = await db.Revenue.findAll();
      res.status(200).json(revenues);
    } catch (err) {
      console.error(err); // Ubah dari console.log menjadi console.error
      res.status(500).json({ message: err.message });
    }
  },

  addRevenue: async (req, res) => {
    try {
      const { month, revenue } = req.body;
      const newRevenue = await db.Revenue.create({ month, revenue });
      res.status(201).json(newRevenue);
    } catch (err) {
      console.error(err); // Ubah dari console.log menjadi console.error
      res.status(500).json({ message: err.message });
    }
  },

  updateRevenue: async (req, res) => {
    try {
      const { id } = req.params;
      const { month, revenue } = req.body;
      await db.Revenue.update({ month, revenue }, { where: { id } });
      const updatedRevenue = await db.Revenue.findByPk(id);
      res.status(200).json(updatedRevenue);
    } catch (err) {
      console.error(err); // Ubah dari console.log menjadi console.error
      res.status(500).json({ message: err.message });
    }
  },

  deleteRevenue: async (req, res) => {
    try {
      const { id } = req.params;
      await db.Revenue.destroy({ where: { id } });
      res.status(200).json({ message: "Revenue deleted successfully" });
    } catch (err) {
      console.error(err); // Ubah dari console.log menjadi console.error
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = revenueController;
