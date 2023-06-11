/*******************************************************/
// User Data
const username = [
    'John Highland',
    'Jane Smith',
    'Jack Attack',
    'Jill McGill',
    'Steven Peterson',
]; 

const email = [
    'HJ@gmail.com',
    'JS@gmail.com',
    'JA@gmail.com',
    'JM@gmail.com',
    'SP@gmail.com',
];

const getName = (n) => {
    return username[n];
};

const getEmail = (n) => {
    return email[n];
};

/*******************************************************/
//  Thoughts Data

const thoughts = [
    'I love to code',
    'I love to eat',
    'This is mad',
    'I love to sleep',
    'I love to play football'
];

const thoughtUsername = [
    'Manny',
    'Moe',
    'Margerie',
    'Melissa',
    'Molly',
];

const reactions = [
    'This is great',
    'This is awesome',
    'Wow',
    'Oh snap', 
    'Noice',
];

const getThought = (n) => {
    return thoughts[n];
};

const getThoughtUsername = (n) => {
    return thoughtUsername[n];
};

const getReaction = (n) => {
    return reactions[n];
};

module.exports = { getName, getEmail, getThought, getThoughtUsername, getReaction };

