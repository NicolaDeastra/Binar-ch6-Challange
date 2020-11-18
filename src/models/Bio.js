module.exports = (sequelize, DataTypes) => {
  const Bio = sequelize.define(
    'Bio',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      address: {
        type: DataTypes.TEXT,
        min: 6,
        max: 30,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        min: 6,
        max: 14,
        allowNull: false,
      },
      school: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },
      steamLevel: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Bio',
      tableName: 'Bio',
    }
  );

  Bio.associate = (models) => {
    Bio.belongsTo(models.User, {
      foreignKey: 'userId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Bio;
};
