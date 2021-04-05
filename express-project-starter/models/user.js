"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  return User;
};
