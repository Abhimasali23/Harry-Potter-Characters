import React from "react";

const CharacterModal = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded shadow-lg w-1/2">        
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-2xl font-bold mt-2">{character.name}</h2>
        <p>
          <strong>House:</strong> {character.house}
        </p>
        <p>
          <strong>Ancestry:</strong> {character.ancestry}
        </p>
        <p>
          <strong>Actor:</strong> {character.actor}
        </p>
      </div>
    </div>
  );
};

export default CharacterModal;
