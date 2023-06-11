const connection = require('../config/connection');
const { User } = require('../models');
const { getName, getEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing users
    await User.deleteMany({});

    const userList = [];

    for (let i = 0; i < 5; i++) {
        const username = getName(i);
        const email = getEmail(i);

        userList.push({ username, email });
    }

    console.log('List', userList);

    await User.collection.insertMany(userList);

    console.table(userList);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});



