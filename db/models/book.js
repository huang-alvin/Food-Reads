"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      name: { type: DataTypes.STRING(255), allowNull: false },
      cover: { type: DataTypes.TEXT, allowNull: false },
      author: { type: DataTypes.STRING(50), allowNull: false },
      publisher: { type: DataTypes.STRING(50), allowNull: false },
      pages: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      date_published: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );
  Book.associate = function (models) {
    Book.belongsToMany(models.Bookshelf, { through: "Shelf", foreignKey: "bookId", otherKey: "bookshelfId" });
    // Book.belongsToMany(models.Bookshelf, {
    //   through: "Shelves",
    //   foreignKey: "bookId",
    // });
    Book.hasMany(models.Review, { foreignKey: "bookId" });
    Book.hasMany(models.Comment, { foreignKey: "bookId" });
  };
  return Book;
};
