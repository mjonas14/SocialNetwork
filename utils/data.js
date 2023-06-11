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

module.exports = { getName, getEmail };

