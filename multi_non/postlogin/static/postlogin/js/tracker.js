const div = document.getElementById('form-wrapper');

function duplicateForm() {
  let forms = div.getElementsByClassName('tracker-data-entry');
  let original = forms[0];
  let clone = original.cloneNode(true);
  div.appendChild(clone);
}