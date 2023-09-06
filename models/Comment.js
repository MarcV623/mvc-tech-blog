const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    content: {
      allowNull: false,
      type: DataTypes.STRING, 
    },
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
