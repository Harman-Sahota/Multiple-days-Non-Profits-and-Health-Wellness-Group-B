const clients = document.getElementById("clients");
const afeed = document.getElementById("animalfeed");
const compost = document.getElementById("compost/fert");
const partNet = document.getElementById("partnet");
const landfill = document.getElementById('landfill');

function calculateLandfill() {
  const sum = Number(clients.value) + Number(afeed.value) + Number(compost.value) + Number(partNet.value);
  const diff = 100 - Number(sum);

  landfill.value = Number(diff);
}

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

function downloadPDF(pdf, filename) {
  var pdfFile;
  var downloadLink;

  pdfFile = new Blob([pdf], { type: "text/pdf" });

  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(pdfFile);
  downloadLink.style.display = "none";

  document.body.appendChild(downloadLink);
  downloadLink.click();
}

function exportTableToPDF(filename) {
  var pdf = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");

    for (var j = 0; j < cols.length - 1; j++)
      row.push(cols[j].innerText);

    pdf.push(row.join(","));
  }

  downloadPDF(pdf.join("\n"), filename);
}