# BingoKata

## Description
Bingo is a game of chance played using cards with numbers printed on them, which are marked off of the card as the
caller reads out some manner of random numbers. Play usually ceases once a certain pattern is achieved on a card,
where the winner will shout out "Bingo!" in order to let the caller and the room know that there may be a winner.
There are lots of different variations of Bingo, each with their own specific rules. Classic US Bingo is perhaps the most
well known, where the game is played using a 5x5 grid of numbers between 1 and 75, with a FREE space in the
middle. There is also a UK version of Bingo, which uses a 9x3 grid of spaces containing numbers between 1 and 90, of
which five spaces on each row are filled in.

For this application we will be playing with the US version.

## Installation and Setup
For this program you need to make sure you have node installed.
Click here to install [https://nodejs.org/en/download/]

if you have a package manager you can go through this to:

#### Using homebrew
```
brew install node
```

#### using MacPorts
```
port install nodejs<major version>

# Example
port install nodejs7
```

#### Using pkgsrc
```
pkgin -y install nodejs
```

### Package Dependencies
- [lodash](https://lodash.com/) - A JavaScript utility library delivering consistency, modularity,
  performance, & extra.
- [Jest](https://jestjs.io/) - A testing framework for Node.js
- [Prompt-sync](https://www.npmjs.com/package/prompt-sync) - A node package to help prompting for user input

## Running the application

To start the application run the following command:
```
npm start
```

### Interacting with the application
From here you can begin by initializing how many bingo cards you would want to create.
#### Initializing
```
Welcome to a game of Bingo Kata
Let's start by generating a bunch of bingo cards
How many cards do you want to build? 3
```
#### Performing actions


From there you will have the ability to perform actions:
```
Enter X to End Game
Enter P to print bingo cards
Enter N to call a bingo number
Enter C to check a given card
Enter B to check if any cards hav a bingo
```

## Running Tests
We use `jest` for a testing framework.
To run tests execute the following command:
```
npm test
```
