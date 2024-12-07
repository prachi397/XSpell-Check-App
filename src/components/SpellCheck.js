import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function SpellCheck() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  function handleInputChange(e) {
    const text = e.target.value;
    setInputText(text);
    // Implement spelling check logic
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    const correctedText = correctedWords.join(" ");
    // Set the first corrected word
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection);
  }
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        value={inputText}
        onChange={handleInputChange}
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}?</strong>
        </p>
      )}
    </div>
  );
}

export default SpellCheck;
