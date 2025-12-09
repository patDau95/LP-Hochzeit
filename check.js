async function loadInvite() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    document.getElementById("error").innerText = "Kein Einladungslink.";
    document.getElementById("error").style.display = "block";
    document.getElementById("loading").style.display = "none";
    return;
  }

  const response = await fetch(GAS_URL + "?id=" + encodeURIComponent(id));
  const data = await response.json();

  if (!data.valid) {
    document.getElementById("error").innerText = "Ungültige oder abgelaufene Einladung.";
    document.getElementById("error").style.display = "block";
    document.getElementById("loading").style.display = "none";
    return;
  }

  document.getElementById("loading").style.display = "none";
  document.getElementById("formContainer").style.display = "block";

  document.getElementById("welcome").innerText = `Hallo ${data.name}!`;

  document.getElementById("attending").value = data.attending || "";

  if (data.allowedPlusOne === "ja" || data.allowedPlusOne === "TRUE") {
    document.getElementById("plusOneSection").style.display = "block";
    document.getElementById("plusOneName").value = data.plusOneName || "";
  }

  document.getElementById("comment").value = data.comment || "";
}

window.onload = loadInvite;
