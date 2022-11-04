function createGame(team1, time, team2) {
	return `
  <li>
		<img src="./assets/icon-${team1}.svg" alt="${team1}" />
		<strong>${time}</strong>
		<img src="./assets/icon-${team2}.svg" alt="${team2}" />
  </li>
  `;
}

let delay = -0.2;
function createCard(date, day, games) {
	delay = delay + 0.2;
	return `
    <div class="card" style="animation-delay:${delay}s ">
					<h2>${date}<span>${day}</span></h2>
					<ul>
          ${games}
					</ul>
				</div>
    `;
}

document.querySelector("#cards").innerHTML =
	createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
	createCard(
		"28/11",
		"segunda",
		createGame("switzerland", "13:00", "brazil") + createGame("portugal", "16:00", "uruguay")
	) +
	createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"));
