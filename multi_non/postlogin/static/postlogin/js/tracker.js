const clients = document.getElementById("clients");
const afeed = document.getElementById("animalfeed");
const compost = document.getElementById("compost/fert");
const partNet = document.getElementById("partnet");
const landfill = document.getElementById('landfill');

function calculateLandfill(){
  const sum = Number(clients.value) + Number(afeed.value) + Number(compost.value) + Number(partNet.value);
  const diff = 100 - Number(sum);

  landfill.value = Number(diff);
}