import "./App.css";
import Card from "./Components/Card";
import { useState } from "react";

function App() {
  // Define items as an array of objects for easy handling
  const itemsArray = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
  ];

  // State for shuffled items
  const [shuffledItems, setShuffledItems] = useState(itemsArray);

  // State for tracking score, clicked cards, and round state
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  // Shuffle function
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Handle card click
  const handleCardClick = (clickedCard) => {
    if (clickedCards.includes(clickedCard)) {
      // If the card has already been clicked, reset score and clicked cards
      setScore(0);
      setClickedCards([]);
    } else {
      // Otherwise, increment score and add card to clicked list
      setScore(score + 1);
      setClickedCards([...clickedCards, clickedCard]);

      // Check if all 8 cards have been clicked
      if (clickedCards.length + 1 === itemsArray.length) {
        alert("Congratulations! You've clicked all cards without repeating.");
        setScore(0);
        setClickedCards([]); // Reset for a new round
      }
    }

    // Shuffle the items on each click
    setShuffledItems(shuffleArray(shuffledItems));
  };

  return (
    <>
      <div className="Score">
        <h1>Score: {score}</h1>
      </div>
      <div
        style={{
          backgroundColor: "lightskyblue",
          borderStyle: "solid",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {shuffledItems.map((item) => (
          <Card
            imageURL={item.url}
            key={item.name}
            text={item.name}
            onClick={() => handleCardClick(item.name)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
