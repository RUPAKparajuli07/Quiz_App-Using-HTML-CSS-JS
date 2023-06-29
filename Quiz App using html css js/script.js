const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');


// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        "questions": [
            {
                question: "Q. Who is known as the father of modern physics?",
                choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
                answer: "Albert Einstein"
                },
                {
                question: "Q. Which of the following is the largest planet in our solar system?",
                choices: ["Mars", "Jupiter", "Venus", "Saturn"],
                answer: "Jupiter"
                },
                {
                question: "Q. Who is the current Prime Minister of Nepal?",
                choices: ["K P Sharma Oli", "Sher Bahadur Deuba", "Pushpa Kamal Dahal", "Baburam Bhattarai"],
                answer: "Sher Bahadur Deuba"
                },
                {
                question: "Q. In which year did Nepal officially become a federal democratic republic?",
                choices: ["2006", "2007", "2008", "2009"],
                answer: "2008"
                },
                {
                question: "Q. Who is considered the founder of Buddhism?",
                choices: ["Gautama Buddha", "Mahavira Jain", "Ashoka the Great", "Adi Shankara"],
                answer: "Gautama Buddha"
                },
                {
                question: "Q. Which mountain is the highest peak in Nepal?",
                choices: ["Kangchenjunga", "Annapurna", "Makalu", "Mount Everest"],
                answer: "Mount Everest"
                },
                {
                question: "Q. Who won the FIFA World Cup 2018?",
                choices: ["Germany", "France", "Brazil", "Croatia"],
                answer: "France"
                },
                {
                question: "Q. Which country has won the most Olympic gold medals in history?",
                choices: ["United States", "China", "Russia", "Germany"],
                answer: "United States"
                },
                {
                question: "Q. In which year did Nepal officially join the United Nations?",
                choices: ["1945", "1951", "1955", "1960"],
                answer: "1955"
                },
                {
                question: "Q. Who painted the famous Mona Lisa?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
                },
                {
                question: "Q. What is the chemical symbol for the element gold?",
                choices: ["Ag", "Au", "Fe", "Cu"],
                answer: "Au"
                },
                {
                question: "Q. Who is credited with inventing the telephone?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
                },
                {
                question: "Q. Which planet is known as the Red Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
                },
                {
                question: "Q. Who is the current President of the United States?",
                choices: ["Donald Trump", "Joe Biden", "Barack Obama", "George W. Bush"],
                answer: "Joe Biden"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first parliamentary elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1951"
                },
                {
                question: "Q. Who wrote the famous novel 'Pride and Prejudice'?",
                choices: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "Virginia Woolf"],
                answer: "Jane Austen"
                },
                {
                question: "Q. Which country is known as the Land of the Rising Sun?",
                choices: ["China", "India", "Japan", "South Korea"],
                answer: "Japan"
                },
                {
                question: "Q. What is the capital city of Nepal?",
                choices: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
                answer: "Kathmandu"
                },
                {
                question: "Q. Who is the founder of Microsoft?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Bill Gates"
                },
                {
                question: "Q. Which country hosted the 2022 FIFA World Cup?",
                choices: ["Russia", "Brazil", "Qatar", "Germany"],
                answer: "Qatar"
                },
                {
                question: "Q. What is the national animal of Nepal?",
                choices: ["Tiger", "Cow", "Elephant", "Rhinoceros"],
                answer: "Cow"
                },
                {
                question: "Q. Who is considered the father of the computer?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Roof of the World'?",
                choices: ["Nepal", "India", "China", "Tibet"],
                answer: "Tibet"
                },
                {
                question: "Q. Who painted the famous artwork 'The Starry Night'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Vincent van Gogh"
                },
                {
                question: "Q. What is the chemical symbol for the element oxygen?",
                choices: ["O", "Om", "Ox", "Oz"],
                answer: "O"
                },
                {
                question: "Q. Who is credited with inventing the light bulb?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Thomas Edison"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of India?",
                choices: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
                answer: "Narendra Modi"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first democratic elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1990"
                },
                {
                question: "Q. Who wrote the famous play 'Romeo and Juliet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the Land of the Midnight Sun?",
                choices: ["Norway", "Sweden", "Finland", "Denmark"],
                answer: "Norway"
                },
                {
                question: "Q. What is the capital city of India?",
                choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                answer: "New Delhi"
                },
                {
                question: "Q. Who is the founder of Apple Inc.?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Steve Jobs"
                },
                {
                question: "Q. Which country hosted the 2016 Summer Olympics?",
                choices: ["United States", "China", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national bird of Nepal?",
                choices: ["Peacock", "Dove", "Eagle", "Impeyan pheasant"],
                answer: "Impeyan pheasant"
                },
                {
                question: "Q. Who is considered the father of modern computer science?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Land of Smiles'?",
                choices: ["Nepal", "India", "Thailand", "Bhutan"],
                answer: "Thailand"
                },
                {
                question: "Q. Who painted the famous artwork 'The Last Supper'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
                },
                {
                question: "Q. What is the chemical symbol for the element carbon?",
                choices: ["C", "Ca", "Co", "Cu"],
                answer: "C"
                },
                {
                question: "Q. Who is credited with inventing the airplane?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Wright brothers", "Guglielmo Marconi"],
                answer: "Wright brothers"
                },
                {
                question: "Q. Which planet is known as the Red Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
                },
                {
                question: "Q. Who is the current Prime Minister of the United Kingdom?",
                choices: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
                answer: "Boris Johnson"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first general elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1951"
                },
                {
                question: "Q. Who wrote the famous novel 'To Kill a Mockingbird'?",
                choices: ["Emily Brontë", "Harper Lee", "Charlotte Brontë", "Virginia Woolf"],
                answer: "Harper Lee"
                },
                {
                question: "Q. Which country is known as the Land of the Long White Cloud?",
                choices: ["Australia", "New Zealand", "Canada", "United States"],
                answer: "New Zealand"
                },
                {
                question: "Q. What is the capital city of China?",
                choices: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
                answer: "Beijing"
                },
                {
                question: "Q. Who is the founder of Facebook?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Mark Zuckerberg"
                },
                {
                question: "Q. Which country hosted the 2014 FIFA World Cup?",
                choices: ["Germany", "France", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national flower of Nepal?",
                choices: ["Lotus", "Rhododendron", "Sunflower", "Rose"],
                answer: "Rhododendron"
                },
                {
                question: "Q. Who is considered the father of the internet?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Tim Berners-Lee"
                },
                {
                question: "Q. Which country is known as the 'Land of Fire and Ice'?",
                choices: ["Iceland", "Greenland", "Canada", "Norway"],
                answer: "Iceland"
                },
                {
                question: "Q. Who painted the famous artwork 'The Scream'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Edvard Munch", "Michelangelo"],
                answer: "Edvard Munch"
                },
                {
                question: "Q. What is the chemical symbol for the element iron?",
                choices: ["I", "Fe", "Ir", "In"],
                answer: "Fe"
                },
                {
                question: "Q. Who is credited with inventing the telephone?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of Australia?",
                choices: ["Scott Morrison", "Malcolm Turnbull", "Julia Gillard", "Tony Abbott"],
                answer: "Scott Morrison"
                },
                {
                question: "Q. In which year did Nepal officially become a republic?",
                choices: ["2006", "2007", "2008", "2009"],
                answer: "2008"
                },
                {
                question: "Q. Who wrote the famous play 'Hamlet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the Land of the Rising Sun?",
                choices: ["China", "India", "Japan", "South Korea"],
                answer: "Japan"
                },
                {
                question: "Q. What is the capital city of Nepal?",
                choices: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
                answer: "Kathmandu"
                },
                {
                question: "Q. Who is the founder of Microsoft?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Bill Gates"
                },
                {
                question: "Q. Which country hosted the 2022 FIFA World Cup?",
                choices: ["Russia", "Brazil", "Qatar", "Germany"],
                answer: "Qatar"
                },
                {
                question: "Q. What is the national animal of Nepal?",
                choices: ["Tiger", "Cow", "Elephant", "Rhinoceros"],
                answer: "Cow"
                },
                {
                question: "Q. Who is considered the father of the computer?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Roof of the World'?",
                choices: ["Nepal", "India", "China", "Tibet"],
                answer: "Tibet"
                },
                {
                question: "Q. Who painted the famous artwork 'The Starry Night'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Vincent van Gogh"
                },
                {
                question: "Q. What is the chemical symbol for the element oxygen?",
                choices: ["O", "Om", "Ox", "Oz"],
                answer: "O"
                },
                {
                question: "Q. Who is credited with inventing the light bulb?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Thomas Edison"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of India?",
                choices: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
                answer: "Narendra Modi"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first democratic elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1990"
                },
                {
                question: "Q. Who wrote the famous play 'Romeo and Juliet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the 'Land of the Midnight Sun'?",
                choices: ["Norway", "Sweden", "Finland", "Denmark"],
                answer: "Norway"
                },
                {
                question: "Q. What is the capital city of India?",
                choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                answer: "New Delhi"
                },
                {
                question: "Q. Who is the founder of Apple Inc.?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Steve Jobs"
                },
                {
                question: "Q. Which country hosted the 2016 Summer Olympics?",
                choices: ["United States", "China", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national bird of Nepal?",
                choices: ["Peacock", "Dove", "Eagle", "Impeyan pheasant"],
                answer: "Impeyan pheasant"
                },
                {
                question: "Q. Who is considered the father of modern computer science?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Land of Smiles'?",
                choices: ["Nepal", "India", "Thailand", "Bhutan"],
                answer: "Thailand"
                },
                {
                question: "Q. Who painted the famous artwork 'The Last Supper'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
                },
                {
                question: "Q. What is the chemical symbol for the element carbon?",
                choices: ["C", "Ca", "Co", "Cu"],
                answer: "C"
                },
                {
                question: "Q. Who is credited with inventing the airplane?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Wright brothers", "Guglielmo Marconi"],
                answer: "Wright brothers"
                },
                {
                question: "Q. Which planet is known as the Red Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
                },
                {
                question: "Q. Who is the current Prime Minister of the United Kingdom?",
                choices: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
                answer: "Boris Johnson"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first general elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1951"
                },
                {
                question: "Q. Who wrote the famous novel 'To Kill a Mockingbird'?",
                choices: ["Emily Brontë", "Harper Lee", "Charlotte Brontë", "Virginia Woolf"],
                answer: "Harper Lee"
                },
                {
                question: "Q. Which country is known as the Land of the Long White Cloud?",
                choices: ["Australia", "New Zealand", "Canada", "United States"],
                answer: "New Zealand"
                },
                {
                question: "Q. What is the capital city of China?",
                choices: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
                answer: "Beijing"
                },
                {
                question: "Q. Who is the founder of Facebook?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Mark Zuckerberg"
                },
                {
                question: "Q. Which country hosted the 2014 FIFA World Cup?",
                choices: ["Germany", "France", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national flower of Nepal?",
                choices: ["Lotus", "Rhododendron", "Sunflower", "Rose"],
                answer: "Rhododendron"
                },
                {
                question: "Q. Who is considered the father of the internet?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Tim Berners-Lee"
                },
                {
                question: "Q. Which country is known as the 'Land of Fire and Ice'?",
                choices: ["Iceland", "Greenland", "Canada", "Norway"],
                answer: "Iceland"
                },
                {
                question: "Q. Who painted the famous artwork 'The Scream'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Edvard Munch", "Michelangelo"],
                answer: "Edvard Munch"
                },
                {
                question: "Q. What is the chemical symbol for the element iron?",
                choices: ["I", "Fe", "Ir", "In"],
                answer: "Fe"
                },
                {
                question: "Q. Who is credited with inventing the telephone?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of Australia?",
                choices: ["Scott Morrison", "Malcolm Turnbull", "Julia Gillard", "Tony Abbott"],
                answer: "Scott Morrison"
                },
                {
                question: "Q. In which year did Nepal officially become a republic?",
                choices: ["2006", "2007", "2008", "2009"],
                answer: "2008"
                },
                {
                question: "Q. Who wrote the famous play 'Hamlet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the Land of the Rising Sun?",
                choices: ["China", "India", "Japan", "South Korea"],
                answer: "Japan"
                },
                {
                question: "Q. What is the capital city of Nepal?",
                choices: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
                answer: "Kathmandu"
                },
                {
                question: "Q. Who is the founder of Microsoft?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Bill Gates"
                },
                {
                question: "Q. Which country hosted the 2022 FIFA World Cup?",
                choices: ["Russia", "Brazil", "Qatar", "Germany"],
                answer: "Qatar"
                },
                {
                question: "Q. What is the national animal of Nepal?",
                choices: ["Tiger", "Cow", "Elephant", "Rhinoceros"],
                answer: "Cow"
                },
                {
                question: "Q. Who is considered the father of the computer?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Roof of the World'?",
                choices: ["Nepal", "India", "China", "Tibet"],
                answer: "Tibet"
                },
                {
                question: "Q. Who painted the famous artwork 'The Starry Night'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Vincent van Gogh"
                },
                {
                question: "Q. What is the chemical symbol for the element oxygen?",
                choices: ["O", "Om", "Ox", "Oz"],
                answer: "O"
                },
                {
                question: "Q. Who is credited with inventing the light bulb?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Thomas Edison"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of India?",
                choices: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
                answer: "Narendra Modi"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first democratic elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1990"
                },
                {
                question: "Q. Who wrote the famous play 'Romeo and Juliet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the 'Land of the Midnight Sun'?",
                choices: ["Norway", "Sweden", "Finland", "Denmark"],
                answer: "Norway"
                },
                {
                question: "Q. What is the capital city of India?",
                choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                answer: "New Delhi"
                },
                {
                question: "Q. Who is the founder of Apple Inc.?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Steve Jobs"
                },
                {
                question: "Q. Which country hosted the 2016 Summer Olympics?",
                choices: ["United States", "China", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national bird of Nepal?",
                choices: ["Peacock", "Dove", "Eagle", "Impeyan pheasant"],
                answer: "Impeyan pheasant"
                },
                {
                question: "Q. Who is considered the father of modern computer science?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Land of Smiles'?",
                choices: ["Nepal", "India", "Thailand", "Bhutan"],
                answer: "Thailand"
                },
                {
                question: "Q. Who painted the famous artwork 'The Last Supper'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
                },
                {
                question: "Q. What is the chemical symbol for the element carbon?",
                choices: ["C", "Ca", "Co", "Cu"],
                answer: "C"
                },
                {
                question: "Q. Who is credited with inventing the airplane?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Wright brothers", "Guglielmo Marconi"],
                answer: "Wright brothers"
                },
                {
                question: "Q. Which planet is known as the Red Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
                },
                {
                question: "Q. Who is the current Prime Minister of the United Kingdom?",
                choices: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
                answer: "Boris Johnson"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first general elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1951"
                },
                {
                question: "Q. Who wrote the famous novel 'To Kill a Mockingbird'?",
                choices: ["Emily Brontë", "Harper Lee", "Charlotte Brontë", "Virginia Woolf"],
                answer: "Harper Lee"
                },
                {
                question: "Q. Which country is known as the Land of the Long White Cloud?",
                choices: ["Australia", "New Zealand", "Canada", "United States"],
                answer: "New Zealand"
                },
                {
                question: "Q. What is the capital city of China?",
                choices: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
                answer: "Beijing"
                },
                {
                question: "Q. Who is the founder of Facebook?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Mark Zuckerberg"
                },
                {
                question: "Q. Which country hosted the 2014 FIFA World Cup?",
                choices: ["Germany", "France", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national flower of Nepal?",
                choices: ["Lotus", "Rhododendron", "Sunflower", "Rose"],
                answer: "Rhododendron"
                },
                {
                question: "Q. Who is considered the father of the internet?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Tim Berners-Lee"
                },
                {
                question: "Q. Which country is known as the 'Land of Fire and Ice'?",
                choices: ["Iceland", "Greenland", "Canada", "Norway"],
                answer: "Iceland"
                },
                {
                question: "Q. Who painted the famous artwork 'The Scream'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Edvard Munch", "Michelangelo"],
                answer: "Edvard Munch"
                },
                {
                question: "Q. What is the chemical symbol for the element iron?",
                choices: ["I", "Fe", "Ir", "In"],
                answer: "Fe"
                },
                {
                question: "Q. Who is credited with inventing the telephone?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of Australia?",
                choices: ["Scott Morrison", "Malcolm Turnbull", "Julia Gillard", "Tony Abbott"],
                answer: "Scott Morrison"
                },
                {
                question: "Q. In which year did Nepal officially become a republic?",
                choices: ["2006", "2007", "2008", "2009"],
                answer: "2008"
                },
                {
                question: "Q. Who wrote the famous play 'Hamlet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the Land of the Rising Sun?",
                choices: ["China", "India", "Japan", "South Korea"],
                answer: "Japan"
                },
                {
                question: "Q. What is the capital city of Nepal?",
                choices: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
                answer: "Kathmandu"
                },
                {
                question: "Q. Who is the founder of Microsoft?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Bill Gates"
                },
                {
                question: "Q. Which country hosted the 2022 FIFA World Cup?",
                choices: ["Russia", "Brazil", "Qatar", "Germany"],
                answer: "Qatar"
                },
                {
                question: "Q. What is the national animal of Nepal?",
                choices: ["Tiger", "Cow", "Elephant", "Rhinoceros"],
                answer: "Cow"
                },
                {
                question: "Q. Who is considered the father of the computer?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Roof of the World'?",
                choices: ["Nepal", "India", "China", "Tibet"],
                answer: "Tibet"
                },
                {
                question: "Q. Who painted the famous artwork 'The Starry Night'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Vincent van Gogh"
                },
                {
                question: "Q. What is the chemical symbol for the element oxygen?",
                choices: ["O", "Om", "Ox", "Oz"],
                answer: "O"
                },
                {
                question: "Q. Who is credited with inventing the light bulb?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Thomas Edison"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of India?",
                choices: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
                answer: "Narendra Modi"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first democratic elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1990"
                },
                {
                question: "Q. Who wrote the famous play 'Romeo and Juliet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the 'Land of the Midnight Sun'?",
                choices: ["Norway", "Sweden", "Finland", "Denmark"],
                answer: "Norway"
                },
                {
                question: "Q. What is the capital city of India?",
                choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                answer: "New Delhi"
                },
                {
                question: "Q. Who is the founder of Apple Inc.?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Steve Jobs"
                },
                {
                question: "Q. Which country hosted the 2016 Summer Olympics?",
                choices: ["United States", "China", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national bird of Nepal?",
                choices: ["Peacock", "Dove", "Eagle", "Impeyan pheasant"],
                answer: "Impeyan pheasant"
                },
                {
                question: "Q. Who is considered the father of modern computer science?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Land of Smiles'?",
                choices: ["Nepal", "India", "Thailand", "Bhutan"],
                answer: "Thailand"
                },
                {
                question: "Q. Who painted the famous artwork 'The Last Supper'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
                },
                {
                question: "Q. What is the chemical symbol for the element carbon?",
                choices: ["C", "Ca", "Co", "Cu"],
                answer: "C"
                },
                {
                question: "Q. Who is credited with inventing the airplane?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Wright brothers", "Guglielmo Marconi"],
                answer: "Wright brothers"
                },
                {
                question: "Q. Which planet is known as the Red Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
                },
                {
                question: "Q. Who is the current Prime Minister of the United Kingdom?",
                choices: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
                answer: "Boris Johnson"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first general elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1951"
                },
                {
                question: "Q. Who wrote the famous novel 'To Kill a Mockingbird'?",
                choices: ["Emily Brontë", "Harper Lee", "Charlotte Brontë", "Virginia Woolf"],
                answer: "Harper Lee"
                },
                {
                question: "Q. Which country is known as the Land of the Long White Cloud?",
                choices: ["Australia", "New Zealand", "Canada", "United States"],
                answer: "New Zealand"
                },
                {
                question: "Q. What is the capital city of China?",
                choices: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
                answer: "Beijing"
                },
                {
                question: "Q. Who is the founder of Facebook?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Mark Zuckerberg"
                },
                {
                question: "Q. Which country hosted the 2014 FIFA World Cup?",
                choices: ["Germany", "France", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national flower of Nepal?",
                choices: ["Lotus", "Rhododendron", "Sunflower", "Rose"],
                answer: "Rhododendron"
                },
                {
                question: "Q. Who is considered the father of the internet?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Tim Berners-Lee"
                },
                {
                question: "Q. Which country is known as the 'Land of Fire and Ice'?",
                choices: ["Iceland", "Greenland", "Canada", "Norway"],
                answer: "Iceland"
                },
                {
                question: "Q. Who painted the famous artwork 'The Scream'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Edvard Munch", "Michelangelo"],
                answer: "Edvard Munch"
                },
                {
                question: "Q. What is the chemical symbol for the element iron?",
                choices: ["I", "Fe", "Ir", "In"],
                answer: "Fe"
                },
                {
                question: "Q. Who is credited with inventing the telephone?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of Australia?",
                choices: ["Scott Morrison", "Malcolm Turnbull", "Julia Gillard", "Tony Abbott"],
                answer: "Scott Morrison"
                },
                {
                question: "Q. In which year did Nepal officially become a republic?",
                choices: ["2006", "2007", "2008", "2009"],
                answer: "2008"
                },
                {
                question: "Q. Who wrote the famous play 'Hamlet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the Land of the Rising Sun?",
                choices: ["China", "India", "Japan", "South Korea"],
                answer: "Japan"
                },
                {
                question: "Q. What is the capital city of Nepal?",
                choices: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
                answer: "Kathmandu"
                },
                {
                question: "Q. Who is the founder of Microsoft?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Bill Gates"
                },
                {
                question: "Q. Which country hosted the 2022 FIFA World Cup?",
                choices: ["Russia", "Brazil", "Qatar", "Germany"],
                answer: "Qatar"
                },
                {
                question: "Q. What is the national animal of Nepal?",
                choices: ["Tiger", "Cow", "Elephant", "Rhinoceros"],
                answer: "Cow"
                },
                {
                question: "Q. Who is considered the father of the computer?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Roof of the World'?",
                choices: ["Nepal", "India", "China", "Tibet"],
                answer: "Tibet"
                },
                {
                question: "Q. Who painted the famous artwork 'The Starry Night'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Vincent van Gogh"
                },
                {
                question: "Q. What is the chemical symbol for the element oxygen?",
                choices: ["O", "Om", "Ox", "Oz"],
                answer: "O"
                },
                {
                question: "Q. Who is credited with inventing the light bulb?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Thomas Edison"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of India?",
                choices: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
                answer: "Narendra Modi"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first democratic elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1990"
                },
                {
                question: "Q. Who wrote the famous play 'Romeo and Juliet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the 'Land of the Midnight Sun'?",
                choices: ["Norway", "Sweden", "Finland", "Denmark"],
                answer: "Norway"
                },
                {
                question: "Q. What is the capital city of India?",
                choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                answer: "New Delhi"
                },
                {
                question: "Q. Who is the founder of Apple Inc.?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Steve Jobs"
                },
                {
                question: "Q. Which country hosted the 2016 Summer Olympics?",
                choices: ["United States", "China", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national bird of Nepal?",
                choices: ["Peacock", "Dove", "Eagle", "Impeyan pheasant"],
                answer: "Impeyan pheasant"
                },
                {
                question: "Q. Who is considered the father of modern computer science?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Land of Smiles'?",
                choices: ["Nepal", "India", "Thailand", "Bhutan"],
                answer: "Thailand"
                },
                {
                question: "Q. Who painted the famous artwork 'The Last Supper'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
                },
                {
                question: "Q. What is the chemical symbol for the element carbon?",
                choices: ["C", "Ca", "Co", "Cu"],
                answer: "C"
                },
                {
                question: "Q. Who is credited with inventing the airplane?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Wright brothers", "Guglielmo Marconi"],
                answer: "Wright brothers"
                },
                {
                question: "Q. Which planet is known as the Red Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
                },
                {
                question: "Q. Who is the current Prime Minister of the United Kingdom?",
                choices: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
                answer: "Boris Johnson"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first general elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1951"
                },
                {
                question: "Q. Who wrote the famous novel 'To Kill a Mockingbird'?",
                choices: ["Emily Brontë", "Harper Lee", "Charlotte Brontë", "Virginia Woolf"],
                answer: "Harper Lee"
                },
                {
                question: "Q. Which country is known as the Land of the Long White Cloud?",
                choices: ["Australia", "New Zealand", "Canada", "United States"],
                answer: "New Zealand"
                },
                {
                question: "Q. What is the capital city of China?",
                choices: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
                answer: "Beijing"
                },
                {
                question: "Q. Who is the founder of Facebook?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Mark Zuckerberg"
                },
                {
                question: "Q. Which country hosted the 2014 FIFA World Cup?",
                choices: ["Germany", "France", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national flower of Nepal?",
                choices: ["Lotus", "Rhododendron", "Sunflower", "Rose"],
                answer: "Rhododendron"
                },
                {
                question: "Q. Who is considered the father of the internet?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Tim Berners-Lee"
                },
                {
                question: "Q. Which country is known as the 'Land of Fire and Ice'?",
                choices: ["Iceland", "Greenland", "Canada", "Norway"],
                answer: "Iceland"
                },
                {
                question: "Q. Who painted the famous artwork 'The Scream'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Edvard Munch", "Michelangelo"],
                answer: "Edvard Munch"
                },
                {
                question: "Q. What is the chemical symbol for the element iron?",
                choices: ["I", "Fe", "Ir", "In"],
                answer: "Fe"
                },
                {
                question: "Q. Who is credited with inventing the telephone?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of Australia?",
                choices: ["Scott Morrison", "Malcolm Turnbull", "Julia Gillard", "Tony Abbott"],
                answer: "Scott Morrison"
                },
                {
                question: "Q. In which year did Nepal officially become a republic?",
                choices: ["2006", "2007", "2008", "2009"],
                answer: "2008"
                },
                {
                question: "Q. Who wrote the famous play 'Hamlet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the Land of the Rising Sun?",
                choices: ["China", "India", "Japan", "South Korea"],
                answer: "Japan"
                },
                {
                question: "Q. What is the capital city of Nepal?",
                choices: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
                answer: "Kathmandu"
                },
                {
                question: "Q. Who is the founder of Microsoft?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Bill Gates"
                },
                {
                question: "Q. Which country hosted the 2022 FIFA World Cup?",
                choices: ["Russia", "Brazil", "Qatar", "Germany"],
                answer: "Qatar"
                },
                {
                question: "Q. What is the national animal of Nepal?",
                choices: ["Tiger", "Cow", "Elephant", "Rhinoceros"],
                answer: "Cow"
                },
                {
                question: "Q. Who is considered the father of the computer?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Roof of the World'?",
                choices: ["Nepal", "India", "China", "Tibet"],
                answer: "Tibet"
                },
                {
                question: "Q. Who painted the famous artwork 'The Starry Night'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Vincent van Gogh"
                },
                {
                question: "Q. What is the chemical symbol for the element oxygen?",
                choices: ["O", "Om", "Ox", "Oz"],
                answer: "O"
                },
                {
                question: "Q. Who is credited with inventing the light bulb?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Thomas Edison"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of India?",
                choices: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
                answer: "Narendra Modi"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first democratic elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1990"
                },
                {
                question: "Q. Who wrote the famous play 'Romeo and Juliet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the 'Land of the Midnight Sun'?",
                choices: ["Norway", "Sweden", "Finland", "Denmark"],
                answer: "Norway"
                },
                {
                question: "Q. What is the capital city of India?",
                choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                answer: "New Delhi"
                },
                {
                question: "Q. Who is the founder of Apple Inc.?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Steve Jobs"
                },
                {
                question: "Q. Which country hosted the 2016 Summer Olympics?",
                choices: ["United States", "China", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national bird of Nepal?",
                choices: ["Peacock", "Dove", "Eagle", "Impeyan pheasant"],
                answer: "Impeyan pheasant"
                },
                {
                question: "Q. Who is considered the father of modern computer science?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Land of Smiles'?",
                choices: ["Nepal", "India", "Thailand", "Bhutan"],
                answer: "Thailand"
                },
                {
                question: "Q. Who painted the famous artwork 'The Last Supper'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
                },
                {
                question: "Q. What is the chemical symbol for the element carbon?",
                choices: ["C", "Ca", "Co", "Cu"],
                answer: "C"
                },
                {
                question: "Q. Who is credited with inventing the airplane?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Wright brothers", "Guglielmo Marconi"],
                answer: "Wright brothers"
                },
                {
                question: "Q. Which planet is known as the Red Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
                },
                {
                question: "Q. Who is the current Prime Minister of the United Kingdom?",
                choices: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
                answer: "Boris Johnson"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first general elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1951"
                },
                {
                question: "Q. Who wrote the famous novel 'To Kill a Mockingbird'?",
                choices: ["Emily Brontë", "Harper Lee", "Charlotte Brontë", "Virginia Woolf"],
                answer: "Harper Lee"
                },
                {
                question: "Q. Which country is known as the Land of the Long White Cloud?",
                choices: ["Australia", "New Zealand", "Canada", "United States"],
                answer: "New Zealand"
                },
                {
                question: "Q. What is the capital city of China?",
                choices: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
                answer: "Beijing"
                },
                {
                question: "Q. Who is the founder of Facebook?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Mark Zuckerberg"
                },
                {
                question: "Q. Which country hosted the 2014 FIFA World Cup?",
                choices: ["Germany", "France", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national flower of Nepal?",
                choices: ["Lotus", "Rhododendron", "Sunflower", "Rose"],
                answer: "Rhododendron"
                },
                {
                question: "Q. Who is considered the father of the internet?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Tim Berners-Lee"
                },
                {
                question: "Q. Which country is known as the 'Land of Fire and Ice'?",
                choices: ["Iceland", "Greenland", "Canada", "Norway"],
                answer: "Iceland"
                },
                {
                question: "Q. Who painted the famous artwork 'The Scream'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Edvard Munch", "Michelangelo"],
                answer: "Edvard Munch"
                },
                {
                question: "Q. What is the chemical symbol for the element iron?",
                choices: ["I", "Fe", "Ir", "In"],
                answer: "Fe"
                },
                {
                question: "Q. Who is credited with inventing the telephone?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of Australia?",
                choices: ["Scott Morrison", "Malcolm Turnbull", "Julia Gillard", "Tony Abbott"],
                answer: "Scott Morrison"
                },
                {
                question: "Q. In which year did Nepal officially become a republic?",
                choices: ["2006", "2007", "2008", "2009"],
                answer: "2008"
                },
                {
                question: "Q. Who wrote the famous play 'Hamlet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the Land of the Rising Sun?",
                choices: ["China", "India", "Japan", "South Korea"],
                answer: "Japan"
                },
                {
                question: "Q. What is the capital city of Nepal?",
                choices: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
                answer: "Kathmandu"
                },
                {
                question: "Q. Who is the founder of Microsoft?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Bill Gates"
                },
                {
                question: "Q. Which country hosted the 2022 FIFA World Cup?",
                choices: ["Russia", "Brazil", "Qatar", "Germany"],
                answer: "Qatar"
                },
                {
                question: "Q. What is the national animal of Nepal?",
                choices: ["Tiger", "Cow", "Elephant", "Rhinoceros"],
                answer: "Cow"
                },
                {
                question: "Q. Who is considered the father of the computer?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Roof of the World'?",
                choices: ["Nepal", "India", "China", "Tibet"],
                answer: "Tibet"
                },
                {
                question: "Q. Who painted the famous artwork 'The Starry Night'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Vincent van Gogh"
                },
                {
                question: "Q. What is the chemical symbol for the element oxygen?",
                choices: ["O", "Om", "Ox", "Oz"],
                answer: "O"
                },
                {
                question: "Q. Who is credited with inventing the light bulb?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Thomas Edison"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of India?",
                choices: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
                answer: "Narendra Modi"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first democratic elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1990"
                },
                {
                question: "Q. Who wrote the famous play 'Romeo and Juliet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the 'Land of the Midnight Sun'?",
                choices: ["Norway", "Sweden", "Finland", "Denmark"],
                answer: "Norway"
                },
                {
                question: "Q. What is the capital city of India?",
                choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                answer: "New Delhi"
                },
                {
                question: "Q. Who is the founder of Apple Inc.?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Steve Jobs"
                },
                {
                question: "Q. Which country hosted the 2016 Summer Olympics?",
                choices: ["United States", "China", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national bird of Nepal?",
                choices: ["Peacock", "Dove", "Eagle", "Impeyan pheasant"],
                answer: "Impeyan pheasant"
                },
                {
                question: "Q. Who is considered the father of modern computer science?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Land of Smiles'?",
                choices: ["Nepal", "India", "Thailand", "Bhutan"],
                answer: "Thailand"
                },
                {
                question: "Q. Who painted the famous artwork 'The Last Supper'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
                },
                {
                question: "Q. What is the chemical symbol for the element carbon?",
                choices: ["C", "Ca", "Co", "Cu"],
                answer: "C"
                },
                {
                question: "Q. Who is credited with inventing the airplane?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Wright brothers", "Guglielmo Marconi"],
                answer: "Wright brothers"
                },
                {
                question: "Q. Which planet is known as the Red Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
                },
                {
                question: "Q. Who is the current Prime Minister of the United Kingdom?",
                choices: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
                answer: "Boris Johnson"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first general elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1951"
                },
                {
                question: "Q. Who wrote the famous novel 'To Kill a Mockingbird'?",
                choices: ["Emily Brontë", "Harper Lee", "Charlotte Brontë", "Virginia Woolf"],
                answer: "Harper Lee"
                },
                {
                question: "Q. Which country is known as the Land of the Long White Cloud?",
                choices: ["Australia", "New Zealand", "Canada", "United States"],
                answer: "New Zealand"
                },
                {
                question: "Q. What is the capital city of China?",
                choices: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
                answer: "Beijing"
                },
                {
                question: "Q. Who is the founder of Facebook?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Mark Zuckerberg"
                },
                {
                question: "Q. Which country hosted the 2014 FIFA World Cup?",
                choices: ["Germany", "France", "Brazil", "Russia"],
                answer: "Brazil"
                },
                {
                question: "Q. What is the national flower of Nepal?",
                choices: ["Lotus", "Rhododendron", "Sunflower", "Rose"],
                answer: "Rhododendron"
                },
                {
                question: "Q. Who is considered the father of the internet?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Tim Berners-Lee"
                },
                {
                question: "Q. Which country is known as the 'Land of Fire and Ice'?",
                choices: ["Iceland", "Greenland", "Canada", "Norway"],
                answer: "Iceland"
                },
                {
                question: "Q. Who painted the famous artwork 'The Scream'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Edvard Munch", "Michelangelo"],
                answer: "Edvard Munch"
                },
                {
                question: "Q. What is the chemical symbol for the element iron?",
                choices: ["I", "Fe", "Ir", "In"],
                answer: "Fe"
                },
                {
                question: "Q. Who is credited with inventing the telephone?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of Australia?",
                choices: ["Scott Morrison", "Malcolm Turnbull", "Julia Gillard", "Tony Abbott"],
                answer: "Scott Morrison"
                },
                {
                question: "Q. In which year did Nepal officially become a republic?",
                choices: ["2006", "2007", "2008", "2009"],
                answer: "2008"
                },
                {
                question: "Q. Who wrote the famous play 'Hamlet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                },
                {
                question: "Q. Which country is known as the Land of the Rising Sun?",
                choices: ["China", "India", "Japan", "South Korea"],
                answer: "Japan"
                },
                {
                question: "Q. What is the capital city of Nepal?",
                choices: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
                answer: "Kathmandu"
                },
                {
                question: "Q. Who is the founder of Microsoft?",
                choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
                answer: "Bill Gates"
                },
                {
                question: "Q. Which country hosted the 2022 FIFA World Cup?",
                choices: ["Russia", "Brazil", "Qatar", "Germany"],
                answer: "Qatar"
                },
                {
                question: "Q. What is the national animal of Nepal?",
                choices: ["Tiger", "Cow", "Elephant", "Rhinoceros"],
                answer: "Cow"
                },
                {
                question: "Q. Who is considered the father of the computer?",
                choices: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
                answer: "Alan Turing"
                },
                {
                question: "Q. Which country is known as the 'Roof of the World'?",
                choices: ["Nepal", "India", "China", "Tibet"],
                answer: "Tibet"
                },
                {
                question: "Q. Who painted the famous artwork 'The Starry Night'?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Vincent van Gogh"
                },
                {
                question: "Q. What is the chemical symbol for the element oxygen?",
                choices: ["O", "Om", "Ox", "Oz"],
                answer: "O"
                },
                {
                question: "Q. Who is credited with inventing the light bulb?",
                choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Thomas Edison"
                },
                {
                question: "Q. Which planet is known as the Blue Planet?",
                choices: ["Mars", "Jupiter", "Venus", "Earth"],
                answer: "Earth"
                },
                {
                question: "Q. Who is the current Prime Minister of India?",
                choices: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
                answer: "Narendra Modi"
                },
                {
                question: "Q. In which year did Nepal successfully hold its first democratic elections?",
                choices: ["1951", "1990", "2006", "2017"],
                answer: "1990"
                },
                {
                question: "Q. Who wrote the famous play 'Romeo and Juliet'?",
                choices: ["William Shakespeare", "Arthur Miller", "Oscar Wilde", "George Bernard Shaw"],
                answer: "William Shakespeare"
                }]

    
    
        ],

// Making Variables
const currentQuestionIndex: number = 0; 
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;


// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }

    if(currentQuestionIndex < quiz.length){
        startTimer();
    }
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        // alert("Wrong answer");
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 15;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 2000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = ()=>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
            if(confirmUser){
                timeLeft = 15;
                startQuiz();
            }
            else{
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}

// Function to shuffle question
const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Function to Start Quiz
const startQuiz = () =>{
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=>{
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});