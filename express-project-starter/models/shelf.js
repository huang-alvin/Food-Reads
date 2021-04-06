"use strict";
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define(
    "Shelf",
    {
      bookId: { type: DataTypes.INTEGER, allowNull: false },
      bookShelfId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Shelf.associate = function (models) {
    Shelf.hasMany(models.Book, { foreignKey: "bookId" });
    Shelf.belongsTo(models.Bookshelf, { foreignKey: "bookShelfId" });
  };
  return Shelf;
};
