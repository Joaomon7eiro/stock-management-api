module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'pedfarma',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
