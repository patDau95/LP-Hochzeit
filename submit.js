async function submitForm() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    alert("Kein Einladungslink gefunden!");
    return;
  }

  const body = {
    id,
    attending: document.getElementById("attending").value,
    plusOneName: document.getElementById("plusOneName").value,
    comment: document.getElementById("comment").value
  };

  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (data.success) {
      alert("Danke! Deine Antwort wurde gespeichert.");
    } else {
      alert("Fehler beim Speichern: " + (data.error || "Unbekannt"));
    }
  } catch (err) {
    alert("Fehler beim Speichern: " + err.message);
  }
}
