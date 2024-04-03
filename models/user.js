const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const User = sequelize.define(
  "User",
  {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    last_updated_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // 추가 필드 정의
  },
  {
    // 모델 옵션
  }
);

module.exports = User;
