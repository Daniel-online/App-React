import './App.css'

export default function App() {
  fetch("https://api.football-data.org/v2/competitions/2003/teams", {
  headers: {
    "X-Auth-Token": "17d927f54bd24e358082eb029316cdca"
  }
})
  .then(response => response.json())
  .then(data => {
    const teams = data.teams;
    const tableBody = document.querySelector("tbody");
    teams.forEach(team => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = team.name;
      row.appendChild(NOME);
      const foundedCell = document.createElement("td");
      foundedCell.textContent = team.founded;
      row.appendChild(FUNDAÇAO);
      const crestUrlCell = document.createElement("td");
      crestUrlCell.innerHTML = `<img src="${team.crestUrl}" alt="Team Crest">`;
      row.appendChild(BRASAO);
      tableBody.appendChild(row);
    });
  });

}
