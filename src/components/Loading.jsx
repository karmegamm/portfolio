// LoadingSpinner.js
import React,{useState,useEffect} from 'react';
import '../loading.css'
import { Typography } from '@material-tailwind/react';

const inspirationalMessages = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston S. Churchill" },
  { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" }
];

const LoadingSpinner = () => {
  const [randomMessage, setRandomMessage] = useState('');  
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * inspirationalMessages.length);
    setRandomMessage(inspirationalMessages[randomIndex]);
  }, []);

  return (
     <div className='w-full min-h-screen flex justify-center items-center con' >
          <div className='flex flex-col gap-8 justify-center items-center'>
            <div className="loading ">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
            </div>  
            <div className='max-w-[80%] border-l-2 lg:pl-5 pl-3 border-[#8a0e9f]'>
            <Typography className='font-secondary lg:text-3xl font-bold text-gradient '  >❝ {randomMessage.quote} ❞</Typography>
            <Typography className='font-primary  font-bold text-right text-gradient lg:text-xl lg:pr-8 pr-2' >- {randomMessage.author}</Typography>
            </div>
          </div>
     </div>
  );
};

export default LoadingSpinner;
