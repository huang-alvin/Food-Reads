"use strict";
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define(
    "Shelf",
    {
      bookId: { type: DataTypes.INTEGER, allowNull: false },
      bookShelfId: { type: DataTypes.INTEGER, allowNull: false },
      status: { type: DataTypes.STRING(50), allowNull: false },
    },
    {}
  );
  Shelf.associate = function (models) {
    Shelf.hasMany(models.Books, { foreignKey: "bookId" });
    Shelf.belongsTo(models.Bookshelf, { foreignKey: "bookShelfId" });
  };
  return Shelf;
};
