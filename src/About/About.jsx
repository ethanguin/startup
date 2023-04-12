import React from 'react';

export function About () {
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
    React.useEffect(() => {
        fetch('https://api.quotable.io/random')
          .then((response) => response.json())
          .then((data) => {
            setQuote(data.content);
            setQuoteAuthor(data.author);
          })
          .catch();
      }, []);
    return (
        <div className='about'>
            <div>
                <p>
                This startup application is a solution to the extremely common problem with the board game Boggle, where 
                all players have to be in person. In this application, Boggle will be accessible to users across the 
                world, all in real time based on the round they are in.
                </p>

                <p>
                The name Boggle is a registered trademark of Hasbro Inc. Our use of the name and the game is for non-profit,
                educational use only.
                </p>

            <div className='quote-box bg-light text-dark'>
                <p className='quote'>{quote}</p>
                <p className='author'>{quoteAuthor}</p>
            </div>
        </div>
        </div>
    );
}