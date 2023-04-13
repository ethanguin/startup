const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const dice = {
  "1": "AAEEGN",
  "2": "ABBJOO",
  "3": "ACHOPS",
  "4": "AFFKPS",
  "5": "AOOTTW",
  "6": "CIMOTU",
  "7": "DEILRX",
  "8": "DELRVY",
  "9": "DISTTY",
  "10": "EEGHNW",
  "11": "EEINSU",
  "12": "EHRTVW",
  "13": "EIOSST",
  "14": "ELRTTY",
  "15": "HIMNQU",
  "16": "HLNNRZ",
}

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const boardCollection = client.db('startup').collection('boards');
const userWordsCollection = client.db('startup').collection('user-words');

async function getBoardByCode(roomCode) {
  console.log('getting board');
  const collection = await boardCollection.findOne({ roomcode: roomCode });

  return collection.board;
}

async function addBoard(roomCode) {
  const board = {
    roomcode: roomCode,
    board: getRandBoard(),
  };
  if(await boardCollection.findOne({ roomcode: roomCode })) {
    await boardCollection.findOneAndReplace({roomcode: roomCode}, board);
    console.log('added and replaced :)');
  } else {
    await boardCollection.insertOne(board);
    console.log('added :)');
  }
}

function getRandBoard() {
  let letterList = getUniqueLetters(getUniqueNumbers());
  while (!checkLetters(letterList)) {
    letterList = getUniqueLetters(getUniqueNumbers());
  }
  return letterList;
}
// Generate list of numbers from 1 to 16 in random order
function getUniqueNumbers() {
  const numbers = [];

  for (let i = 1; i <= 16; i++) {
    numbers.push(i);
  }

  const uniqueNumbers = [];
  while (uniqueNumbers.length < 16) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];

    uniqueNumbers.push(randomNumber);
    numbers.splice(randomIndex, 1);
  }

  return uniqueNumbers;
}

function getUniqueLetters(dice_numbers_list) {
  const board_list = []
  for (let i=0; i<dice_numbers_list.length; i++) {
      const letters = "abcdefghijklmnopqrstuvwxyz";
      const randomIndex = Math.floor(Math.random() * letters.length);
      const randomLetter = letters[randomIndex];
      
      board_list.push(randomLetter)
  };

  return board_list
};

function checkLetters(list_letters) {
  let count = 0
  const vowels = 'aeiou'
  for (let i=0; i<list_letters.length; i++) {
      if (vowels.includes(list_letters[i])) {
          count++
      };
  };
  if (count >= 3) {
      return true
  } else {
      return false
  }
}

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  getBoardByCode,
  addBoard,
};
