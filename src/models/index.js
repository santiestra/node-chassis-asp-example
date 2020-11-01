const databaseUri = process.env["DATABASE_URI"];
const sequelize = new Sequelize(databaseUri);

const Example = sequelize.define(
  "Example",
  {
    // Model attributes are defined here
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

Example.sync({ alter: true });

module.exports = {
  Example,
};
