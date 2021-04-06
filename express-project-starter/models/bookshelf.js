"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define(
    "Bookshelf",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      shelfId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Bookshelf.associate = function (models) {
    Bookshelf.belongsTo(models.User, { foreignKey: "userId" });
    Bookshelf.hasMany(models.Shelf, { foreignKey: "shelfId" });
  };
  return Bookshelf;
};
