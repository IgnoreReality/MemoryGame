import React, { useState, useEffect } from "react";

export default function Card({ imageURL, onClick }) {
  const [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
    fetch(imageURL)
      .then((response) => response.json())
      .then((data) => setPokemonImage(data.sprites.back_default));
  }, [imageURL]);

  function changeBackgroundEnter(e) {
    e.target.style.background = "red";
  }

  function changeBackgroundLeave(e) {
    e.target.style.background = "lightskyblue";
  }

  return (
    <div
      className="pokemonImage"
      onClick={onClick}
      style={{ borderStyle: "solid" }}
    >
      {pokemonImage && (
        <img
          src={pokemonImage}
          width="250"
          onMouseEnter={changeBackgroundEnter}
          onMouseLeave={changeBackgroundLeave}
        ></img>
      )}
    </div>
  );
}
