const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const UserList = sequelize.define("user_list", {
  room_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  create_at: {
    type: DataTypes.DATE,
  },
});
