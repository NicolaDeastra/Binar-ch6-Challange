module.exports = (sequelize, DataTypes) => {
  const Histories = sequelize.define(
    'Histories',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      gameName: {
        type: DataTypes.TEXT,
        min: 6,
        max: 30,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Histories',
      tableName: 'Histories',
    }
  );

  Histories.associate = (models) => {
    Histories.belongsTo(models.User, {
      foreignKey: 'userId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Histories;
};
