async function submitForm() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const body = {
    id,
    attending: document.getElementById("attending").value,
    plusOneName: document.getElementById("plusOneName").value,
    comment: document.getElementById("comment").value
  };

  const response = await fetch(GAS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  if (data.success) {
    alert("Danke! Deine Antwort wurde gespeichert.");
  } else {
    alert("Fehler beim Speichern.");
  }
}
