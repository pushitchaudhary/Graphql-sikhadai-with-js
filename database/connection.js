
const Sequelize = require('sequelize')
const path = require('path')

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'mysql',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    models: [path.join(__dirname, '/models')], // Use path.join for better cross-platform compatibility
    pool: {
        max: 50, // Increase this value to handle more connections
        min:5,
        acquire: 60000, // Maximum time (in ms) to acquire a connection before throwing error
        idle: 10000 // Maximum time (in ms) that a connection can be idle before being released
    }
});


sequelize.authenticate()
    .then(() => {
        console.log('Connected to database!');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

// Syncing the models with the database
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized!');
    })
    .catch((err) => {
        console.error('Error synchronizing database:', err);
    });


// export default sequelize;
module.exports = sequelize
