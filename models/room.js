const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Room = sequelize.define("Room", {
  room_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
  },
});

module.exports = Room;
