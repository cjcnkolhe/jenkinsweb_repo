function validateForm() {
  let name = document.getElementById("name").value;

  if (name === "") {
    alert("Enter name");
    return false;
  }

  alert("Form Submitted");
  return true;
}
