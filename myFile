let fs = require('fs')

function addElementToJSON(jsonData, element) {
  jsonData.push(element)
}

function writeFileJSON(file, dataJSON) {
  fs.writeFile(file, JSON.stringify(dataJSON), (err) => {
    if (err) {
      throw err;
    } else
      console.log('i dati li ho scritti nel file person.json');
  })
}

function readFile(percorsoFile) {
  var data;
  data = fs.readFileSync(percorsoFile, "utf8", (err, dati) => {
    if (err) {
      console.error(err);
      return;
    } else {
      return dati;
    }
  });
  return JSON.parse(data);
}

module.exports = { addElementToJSON: addElementToJSON, writeFileJSON: writeFileJSON, readFile: readFile }