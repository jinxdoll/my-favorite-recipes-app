module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    directions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    URL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    gluten_free: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    favorite_recipe: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    add_to_shopping_list: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
    }
  });

  Recipe.associate = (models) => {
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: true,
        defaultValue: null
      }
    })
    Recipe.hasMany(models.Image, {
      onDelete: 'cascade'
    })
  };

  return Recipe;
};