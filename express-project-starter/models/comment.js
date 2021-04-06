"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      bookId: { type: DataTypes.INTEGER, allowNull: false },
      parentCommentId: { type: DataTypes.INTEGER },
      comment: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Book, { foreignKey: "bookId" });
  };
  return Comment;
};
