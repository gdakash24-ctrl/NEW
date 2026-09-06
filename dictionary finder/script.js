function searchWord() {
  const word = document.getElementById('wordInput').value;
  const resultDiv = document.getElementById('result');

  if (!word) {
    resultDiv.innerHTML = '<p>Please enter a word.</p>';
    return;
  }

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
      if (data.title === "No Definitions Found") {
        resultDiv.innerHTML = `<p>No definitions found for "${word}".</p>`;
        return;
      }

      const definition = data[0].meanings[0].definitions[0];
      const partOfSpeech = data[0].meanings[0].partOfSpeech;
      const phonetic = data[0].phonetic || '';

      resultDiv.innerHTML = `
        <h2>${data[0].word} ${phonetic}</h2>
        <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
        <p><strong>Definition:</strong> ${definition.definition}</p>
        ${definition.example ? `<p><strong>Example:</strong> ${definition.example}</p>` : ''}
      `;
    })
    .catch(() => {
      resultDiv.innerHTML = '<p>Error fetching data. Please try again.</p>';
    });
}
