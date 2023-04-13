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
    board_list = []
    for (let i=0; i<dice_numbers_list.length; i++) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];
        
        board_list.push(randomLetter)
    };

    return board_list
};

list_nums = getUniqueNumbers()
list_letters = getUniqueLetters(list_nums)

function check_letters(list_letters) {
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

function final_board() {
  while (!check_letters(list_letters)) {
    list_letters = getUniqueLetters(list_nums);
  }
  return list_letters;
}


const final_board_list = final_board()
