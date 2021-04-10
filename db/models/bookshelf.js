"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define(
    "Bookshelf",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      // shelfId: { type: DataTypes.INTEGER, allowNull: false },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );
  Bookshelf.associate = function (models) {
    Bookshelf.belongsTo(models.User, { foreignKey: "userId" });
    Bookshelf.belongsToMany(
      models.Book,
      {
        through: "Shelf",
        foreignKey: "bookshelfId",
        otherKey: "bookId",
      },
      {
        onDelete: "cascade",
      }
    );
  };
  return Bookshelf;
};
