import React, { useState } from "react";
import CharacterList from "./components/CharacterList";
import CharacterModal from "./components/CharacterModal";

const App = () => {

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 text-center ">
        <h1 className="text-2xl">Harry Potter Characters</h1>
      </header>
      <CharacterList onCharacterClick={handleCharacterClick} />
      <CharacterModal
        character={selectedCharacter}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
