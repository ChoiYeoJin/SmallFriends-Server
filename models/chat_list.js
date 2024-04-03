const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const chatList = sequelize.define("chat_list", {
  room_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  createdAt: {
    type: DataTypes.STRING,
  },
});
