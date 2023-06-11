const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getName, getEmail, getThought, getThoughtUsername, getReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Successfully connected to database');

    // Drop existing users
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Database cleared');


    const userList = [];
    const thoughtList = [];

    // User
    for (let i = 0; i < 5; i++) {
        const username = getName(i);
        const email = getEmail(i);

        userList.push({ username, email });
    }

    // Thought
    for (let i = 0; i < 5; i++) {
        const thoughtText = getThought(i);
        const username = getThoughtUsername(i);
        const reactions = getReaction(i);

        thoughtList.push({ thoughtText, username, reactions });
    }

    await Thought.collection.insertOne(
        {
            thoughtText: 'This is complete and utter craziness, but I love it',
            username: 'Manny',
            
        }
        );
        await User.collection.insertMany(userList);
        
    console.table(userList);
    console.table(thoughtList);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});



