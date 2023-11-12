//your JS code here. If required.
function updateOutputText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newText = 'Hello, world!';
      resolve(newText);
    }, 1000); 
  });
}

updateOutputText().then((text) => {
  const outputElement = document.getElementById('output');
  outputElement.innerText = text;
});
