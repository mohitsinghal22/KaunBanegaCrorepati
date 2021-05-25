var readlineSync = require('readline-sync');
const chalk = require('chalk');

var priceWon = 0

var questions = [
  {question:"Cold brew, Latte, Espresso are all examples of which beverage?",
  choices:["A. Tea","B. Coffee","C. FruitJuice","D. Lassi"],
  answer:"B",
  price:1000
  },{question:"Which of these is a term for a score used in racquet sports?",
  choices:["A. Hate","B. Love","C. Down","D. Up"],
  answer:"B",
  price:2000
  },{question:"Rahul Gandhi, Sonia Gandhi, Narendra Modi and Amit Shah are all associated with which profession?",
  choices:["A. Comedian","B. Law","C. Politics","D. Actors"],
  answer:"C",
  price:3000
  },{question:"In Sept 2020, which iconic motorcycle brand announced that it is shutting down its manufacturing facilities in India?",
  choices:["A. Harley Davidson","B.  Triumph","C. Indian","D. Arctic Cat"],
  answer:"A",
  price:5000
  },{question:"Which was the colour of the saree worn by Madhuri Dixit in the song 'Didi tera dewar deewana,' which triggered a fashion trend in the country?",
  choices:["A. Green","B. Red","C. Yellow","D. Purple"],
  answer:"D",
  price:10000
  },{question:"Which of these does not feature in the five pillars of Islam?",
  choices:["A. Salat","B. Zakat","C. Hadith","D. Hajj"],
  answer:"C",
  price:20000
  },{question:"In which state of India is the town of Jamtara located?",
  choices:["A. Jharkhand","B. Orrisa","C. West Bengal","D. Bihar"],
  answer:"A",
  price:40000
  },{question:"Which novel, made into a TV series by Mira Nair in 2020, revolves around the lives of four Indian families -- the Mehras, the Kapoors, the Khans and the Chatterjis?",
  choices:["A. The Great Indian Novel","B. A Suitable Boy","C. A Fine Balance","D. The Golden Gate"],
  answer:"B",
  price:80000,
  },{question:"The leader heard in this audio clip has never served in which of these ministries?",
  choices:["A. Human Resource Development","B. Women and Child Development","C. Textiles","D. Law and Justice"],
  answer:"D",
  price:160000,
  },{question:"What bird is seen in this video clip?",
  choices:["A. Hornbill","B. Ibis","C. Lark","D. Moa"],
  answer:"A",
  price:320000,
  },{question:"The 2020 film Gul Makai is a biopic of which of these personalities?",
  choices:["A. Benazir Bhutto","B. Aisha Chaudhary","C. Greta Thunberg","D. Malala Yousafzai"],
  answer:"D",
  price:640000,
  },{question:"Which of the following dynasties did the Kanva dynasty overthrow to come to power around 73 BCE in Magadha",
  choices:["A. Maurya dynasty","B. Shunga dynasty","C. Pala dynasty","D. Chera dynasty"],
  answer:"B",
  price:1250000,
  },{question:"The trophy which is awarded to the winners of the women's singles at the Australian open is named after which legendary tennis star?",
  choices:["A. Daphne Akhurst","B. Margaret Court","C. Evonne Goolagong Cawley","D. Lesley Bowrey"],
  answer:"A",
  price:2500000,
  },{question:"Who became the first chancellor of the Aligarh Muslim University in 1920?",
  choices:["A. Sultan Jahan Begum","B. Maulana Abul Kalam Azad","C. Sir Syed Ahmad Khan","D. Mir Usman Ali Khan"],
  answer:"A",
  price:5000000,
  },{question:"Which of these actresses once won a National Film Award for best female playback singer?",
  choices:["A. Deepika Chikhlia","B. Roopa Ganguly","C. Neena Gupta","D. Salman Khan"],
  answer:"B",
  price:10000000,
  },{question:"Where in Singapore did Netaji Subhash Chandra Bose make the first proclamation of an Azad Hind government?",
  choices:["A. Cathay cinema hall","B. Fort Canning park","C. National University of Singapore","D. National Gallery of Singapore"],
  answer:"A",
  price:50000000,
  }
]

function execution(){
  for(var i=0;i<16;i++){
    console.log(chalk.cyan.bold("Here we go with question " + (i+1)))
    console.log(chalk.cyan.bold(questions[i].question))
    console.log(chalk.cyan("Choices are: "))

    for(var j=0;j<4;j++){
      console.log(chalk.cyan(questions[i].choices[j]))
    }

    var choosedAnswer = readlineSync.question(chalk.green.bold("Enter your choice. If you want to quit the game,Type quit : "))
  
    if(choosedAnswer.toLowerCase() === 'quit'){
      console.log(chalk.green("You made a good choice!"))
      if(i === 0){
        console.log(chalk.yellow("Unfortunately, you are not taking anything home"))
        console.log(chalk.green("Our good Wishes is always with you"))
        break
      }
      console.log(chalk.green("Congratulations, you are taking home " + question[i-1].price))
      break
    }else if(choosedAnswer.toUpperCase() === questions[i].answer){
      console.log(chalk.green("Congratulations! You Won : Rs." + questions[i].price))
    }else{
      console.log(chalk.bgRed("Opps! Wrong Answer"))
      console.log(chalk.green("Thanks for playing. You won : Rs." + priceWon))
      break;
    }

  // conditions for Level
    if(i === 4){
      console.log(chalk.magenta.bold.bold("Congratulations you have passed level 1."))
     priceWon = questions[i].price
    }else if(i === 9){
      console.log(chalk.magenta.bold.bold("Congratulation you have passed level 2"))
      priceWon = questions[i].price
    }else if(i === 15){
      console.log(chalk.green.bold.bold.bgBlackBright("Whooohoo! Congratulations, you won the game. You will be taking home 7 crores."))
    }
    console.log(chalk.yellow.bold.bold("---------------------------------------"))
  }
}

var name = readlineSync.question(chalk.blue("Hello, What's your good name? "))
console.log(chalk.blue("Hi " + name + "!, Welcome to KBC"))
console.log(chalk.blue.bold("Here are the Rules!"))
console.log(chalk.blue.bold.bgWhite("There will in total 16 questions divided in levels. Level 1 start with Question1 and ends at Question 5, Level 2 start with Question 6 and ends at question 10, Level 3 start with question 11 and ends at question 16"))
console.log(chalk.blue.bold.bgWhite("You will get 4 choices to answer the question, Choose any 1, You can type quit in resposne to the question to quit with your amount"))
console.log(chalk.red.bold("Disclaimer: It is for fun only. You will not recieve actual amount"))
console.log(chalk.green("Let's Play!!!!"))
console.log(chalk.green.bold.bold("--------ding ding ding ding ding------"))
execution()