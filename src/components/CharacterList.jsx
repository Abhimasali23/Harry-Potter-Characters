
import React, { useState, useEffect } from "react";

const CharacterList = ({ onCharacterClick }) => {
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  const filteredCharacters = characters.filter(
    (character) => houseFilter === "" || character.house === houseFilter
  );

  return (
    <div>
      <div className="p-5">
        <select
          value={houseFilter}
          onChange={(e) => setHouseFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Houses</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredCharacters.map((character) => (
          <div
            key={character.id}
            className="bg-white rounded shadow p-4 cursor-pointer"
            onClick={() => onCharacterClick(character)}
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-50 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{character.name}</h2>
            <p>{character.house}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
