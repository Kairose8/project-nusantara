import React, { useState, useEffect } from 'react';

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [randomIndex, setRandomIndex] = useState(null);

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
          .then(response => response.json())
          .then(data => {
              setQuotes(data);
              setRandomIndex(Math.floor(Math.random() * data.length));
              console.log(data);
          });
    }, []);

    return (
        <>
            {quotes.length > 0 && randomIndex !== null && (
                    <p className=''>{quotes[randomIndex].text}</p>
            )}
        </>
    );
}
