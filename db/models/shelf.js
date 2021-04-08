"use strict";
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define(
    "Shelf",
    {
      bookId: { type: DataTypes.INTEGER, allowNull: false },
      bookshelfId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Shelf.associate = function (models) {
    // Shelf.hasMany(models.Book, { foreignKey: "bookId" });
    Shelf.belongsTo(models.Bookshelf, { foreignKey: "bookshelfId" });
  };
  return Shelf;
};
