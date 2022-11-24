const clients = document.getElementById("clients");
const afeed = document.getElementById("animalFeed");
const compost = document.getElementById("compost");
const partNet = document.getElementById("partnet");
const landfill = document.getElementById('landfill');
const total = document.getElementById('quantity');

const percentClients = document.getElementById("percentclients");
const percentAfeed = document.getElementById("percentanimalfeed");
const percentCompost = document.getElementById("percentcompost/fert");
const percentPartNet = document.getElementById("percentpartnet");
const percentLandfill = document.getElementById('percentlandfill');

function calculateLandfill() {
  const sum = Number(clients.value) + Number(afeed.value) + Number(compost.value) + Number(partNet.value);
  const diff = Number(quantity.value) - Number(sum);

  landfill.value = Number(diff);
}

setInterval(calculateLandfillPercent,500);

function calculateLandfillPercent() {
  const sum = Number(percentClients.value) + Number(percentAfeed.value) + Number(percentCompost.value) + Number(percentPartNet.value);
  const diff = 100 - Number(sum);

  percentLandfill.value = Number(diff);
}

function calculatePercent() {
  percentClients.value = (Number(Number(clients.value)/Number(quantity.value))*100).toFixed(2);
  percentAfeed.value = (Number(Number(afeed.value)/Number(quantity.value))*100).toFixed(2);
  percentCompost.value = (Number(Number(compost.value)/Number(quantity.value))*100).toFixed(2);
  percentPartNet.value = (Number(Number(partNet.value)/Number(quantity.value))*100).toFixed(2);
}


//Exporting to CSV
function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  csvFile = new Blob([csv], { type: "text/csv" });

  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";

  document.body.appendChild(downloadLink);
  downloadLink.click();
}

function exportTableToCSV(filename) {
  var csv = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");

    for (var j = 0; j < cols.length - 1; j++)
      row.push(cols[j].innerText);

    csv.push(row.join(","));
  }

  downloadCSV(csv.join("\n"), filename);
}
