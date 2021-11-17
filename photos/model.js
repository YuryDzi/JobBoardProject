const { DataTypes } = require('sequelize');

const Photo = global.DB.define('photos', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  altText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const runMigration = async (force) => {
  if (!global.DB) {
    return Promise.reject(new Error('please initialize DB'));
  }
  await Photo.sync({ force });
  return Promise.resolve(global.DB);
};

module.exports = { Photo, runMigration };
