// models/revenue.model.js
module.exports = (sequelize, Sequelize) => {
  const Revenue = sequelize.define(
    "Revenue",
    {
      month: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      revenue: {
        type: Sequelize.DECIMAL, // Menyimpan nilai uang dengan 2 digit desimal
        allowNull: false,
      },
    },
    {
      paranoid: true, // Mengaktifkan soft delete
      timestamps: true, // Menambahkan kolom `createdAt` dan `updatedAt`
    }
  );

  return Revenue;
};
