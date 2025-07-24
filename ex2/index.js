const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function checkReservation() {
  const input = document.getElementById("name-input").value.trim();
  const message = document.getElementById("message");

  if (reservations.hasOwnProperty(input)) {
    if (reservations[input].claimed === false) {
      message.innerText = `Welcome, ${input}`;
      reservations[input].claimed = true; // Mark as claimed
    } else {
      message.innerText = "Hmm, someone already claimed this reservation";
    }
  } else {
    message.innerText = "You have no reservation";
  }
}
