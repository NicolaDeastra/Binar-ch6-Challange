module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        min: 6,
        max: 25,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        min: 6,
        max: 25,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'User',
      tableName: 'User',
    }
  );

  User.associate = (models) => {
    User.hasOne(models.Bio, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });

    User.hasMany(models.Histories, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
  };

  return User;
};
