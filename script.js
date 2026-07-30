const about= document.querySelector("#page1");
const personnal= document.getElementById("page2");
const pv_team= document.getElementById("page3");
const us_team=document.getElementById("page4")
const link1 = document.getElementById("l1");
const link2 = document.getElementById("l2");
const link3 = document.getElementById("l3");
const link4 = document.getElementById("l4");

const img1 = document.getElementById("im1");
const img2 = document.getElementById("im2");
const img3 = document.getElementById("im3");
const img4 = document.getElementById("im4");

const bout_cont=document.getElementById("go-to-p1");
const head=document.getElementById('head')
const videoContainer = document.querySelector('.video-container');
const video = videoContainer.querySelector('video');
const stopButton = document.getElementById('stop-video');

pv_team.style.display = "none";
personnal.style.display = "none";
us_team.style.display='none';
head.style.minWidth='350px'

stopButton.addEventListener('click', () => {
  video.pause();
  videoContainer.style.display = 'none';
});

link1.addEventListener("click", function () {
  head.style.minWidth='350px'
  img1.src="images/step-1-active.png"
  img2.src="images/step-2.png"
  img3.src="images/step-3.png"
  img4.src="images/step-4.png"
  about.style.display = "block";
  personnal.style.display = "none";
  pv_team.style.display = "none";
  us_team.style.display = "none";
});
link2.addEventListener("click", function () {
    head.style.minWidth='480px'
  img1.src="images/step-1.png"
  img2.src="images/step-2-active.png";
  img3.src="images/step-3.png"
  img4.src="images/step-4.png"
  personnal.style.display = "block";
  about.style.display = "none";
  us_team.style.display = "none";
  pv_team.style.display = "none";
});
link3.addEventListener("click", function () {
    head.style.minWidth='480px'
  img1.src="images/step-1.png"
  img2.src="images/step-2.png"
  img3.src="images/step-3-active.png";
  img4.src="images/step-4.png"
  about.style.display = "none";
  personnal.style.display = "none";
  pv_team.style.display = "block";
  us_team.style.display = "none";
 
});

link4.addEventListener("click", function () {
    head.style.minWidth='480px'
  img1.src="images/step-1.png"
  img2.src="images/step-2.png"
  img3.src="images/step-3.png"
  img4.src="images/step-4-active.png"
  about.style.display = "none";
  personnal.style.display = "none";
  pv_team.style.display = "none";
  us_team.style.display = "block";

});
 bout_cont.addEventListener("click",()=>{
    head.style.minWidth='480px'
  img1.src="images/step-1.png"
  img2.src="images/step-2.png"
  img3.src="images/step-3.png"
  img4.src="images/step-4.png"
  personnal.style.display = "block";
  about.style.display = "none";
  us_team.style.display = "none";
  pv_team.style.display = "none";
 })

function supprimerEtAfficher(element1, element2,element3, elementAfficher1,elementAfficher2,elementAfficher3) {
  $(element1).css("display", "none");
  $(element2).css("display", "none");
  $(element3).css("display", "none");
  $(elementAfficher1).css("display", "block");
  $(elementAfficher2).css("display", "block");
  $(elementAfficher3).css("display", "block");
}

$("#rideau-intro #options button").click(function (e) { 
  $("#rideau-intro").css("display", "none");
  $("#control-level").css("display", "block");
  
});
$("#bl3").click(function (e) { 
  supprimerEtAfficher("#tableau-l2","#optl3","#aboutl1","#tableau-l3","#optl1","#aboutl3")

});
$("#bl1").click(function (e) { 
  supprimerEtAfficher("#optl1","#tableau-l3","#aboutl3","#tableau-l2","#optl3","#aboutl1")
});
$("#optl1").click(function (e) { 
  supprimerEtAfficher("#optl1","#tableau-l3","#aboutl3","#tableau-l2","#optl3","#aboutl1")
});
$("#optl3").click(function (e) { 
  supprimerEtAfficher("#tableau-l2","#optl3","#aboutl1","#tableau-l3","#optl1","#aboutl3")
});

const personalScoreTables = Array.from(document.querySelectorAll("#tableau-l2, #tableau-l3"));
const personalScoreSearch = document.getElementById("personal-score-search");
const personalScoreFiliere = document.getElementById("personal-score-filiere");
const personalScoreSortButtons = document.querySelectorAll(".score-sort-button");
const revealedTopScores = new Set();
let personalScoreCandidates = [];
let personalScoreSort = "score";

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (character) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[character];
  });
}

function getCandidateKey(candidate) {
  return `${candidate.matricule}-${candidate.nom}`;
}

function getStudentStatus(score) {
  const numericScore = Number(score || 0);

  if (numericScore > 600) {
    return {
      label: "Diamond Student",
      icon: "images/diamond.png",
      rule: "Plus de 600 points",
      scoreLabel: "> 600",
    };
  }

  if (numericScore >= 300) {
    return {
      label: "Gold Student",
      icon: "images/coin.png",
      rule: "300 \u00e0 600 points",
      scoreLabel: ">= 300",
    };
  }

  return {
    label: "Standard Student",
    icon: "images/dollar.png",
    rule: "Moins de 300 points",
    scoreLabel: "< 300",
  };
}

function renderStudentStatus(status) {
  return `
    <span class="student-status">
      <img src="${escapeHtml(status.icon)}" alt="${escapeHtml(status.label)}">
      ${escapeHtml(status.label)}
    </span>
  `;
}

function renderScoreGuideRows() {
  return [
    getStudentStatus(0),
    getStudentStatus(300),
    getStudentStatus(601),
  ]
    .map(function (status) {
      return `
        <tr class="score-guide-row">
          <td class="rank-cell" data-label="Rang">&#127942;</td>
          <td class="particulier" data-label="Nom">Guide</td>
          <td data-label="STATUT">${renderStudentStatus(status)}</td>
          <td data-label="Filiere">${escapeHtml(status.rule)}</td>
          <td data-label="Universite">Palier de score</td>
          <td data-label="Score">${escapeHtml(status.scoreLabel)}</td>
        </tr>
      `;
    })
    .join("");
}

function getVisiblePersonalScores() {
  const searchTerm = normalizeText(personalScoreSearch?.value);
  const filiere = personalScoreFiliere?.value || "";

  const filteredCandidates = personalScoreCandidates.filter(function (candidate) {
    const matchesName = !searchTerm || normalizeText(candidate.nom).includes(searchTerm);
    const matchesFiliere = !filiere || candidate.filiere === filiere;
    return matchesName && matchesFiliere;
  });

  return filteredCandidates.sort(function (firstCandidate, secondCandidate) {
    if (personalScoreSort === "name") {
      return String(firstCandidate.nom).localeCompare(String(secondCandidate.nom), "fr", {
        sensitivity: "base",
      });
    }

    const scoreDifference = Number(secondCandidate.score || 0) - Number(firstCandidate.score || 0);
    if (scoreDifference !== 0) {
      return scoreDifference;
    }

    return String(firstCandidate.nom).localeCompare(String(secondCandidate.nom), "fr", {
      sensitivity: "base",
    });
  });
}

function renderPersonalScores() {
  if (personalScoreTables.length === 0) {
    return;
  }

  const visibleCandidates = getVisiblePersonalScores();

  const rows = visibleCandidates
    .map(function (candidate, index) {
      const rank = index + 1;
      const candidateKey = getCandidateKey(candidate);
      const status = getStudentStatus(candidate.score);
      const shouldMaskScore = rank <= 10 && !revealedTopScores.has(candidateKey);
      const scoreContent = shouldMaskScore
        ? `<button type="button" class="reveal-score-button" data-candidate-key="${escapeHtml(
            candidateKey
          )}">Reveal</button>`
        : `<span class="score-value">${escapeHtml(candidate.score)} pts</span>`;

      return `
        <tr>
          <td class="rank-cell" data-label="Rang">${rank}</td>
          <td class="particulier" data-label="Nom">${escapeHtml(candidate.nom)}</td>
          <td data-label="STATUT">${renderStudentStatus(status)}</td>
          <td data-label="Filiere">${escapeHtml(candidate.filiere)}</td>
          <td data-label="Universite">${escapeHtml(candidate.universite)}</td>
          <td data-label="Score">${scoreContent}</td>
        </tr>
      `;
    })
    .join("");

  const tableContent = `
    <thead>
      <tr>
        <th>Rang</th>
        <th>Nom</th>
        <th>STATUT</th>
        <th>Filiere</th>
        <th>Universite</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      ${renderScoreGuideRows()}
      ${
        rows ||
        `<tr><td colspan="6" class="score-empty-state">No candidate found.</td></tr>`
      }
    </tbody>
  `;

  personalScoreTables.forEach(function (scoreTable) {
    scoreTable.innerHTML = tableContent;
  });
}

function fillFiliereFilter() {
  if (!personalScoreFiliere) {
    return;
  }

  const filieres = Array.from(
    new Set(personalScoreCandidates.map(function (candidate) {
      return candidate.filiere;
    }).filter(Boolean))
  ).sort(function (firstFiliere, secondFiliere) {
    return firstFiliere.localeCompare(secondFiliere, "fr", { sensitivity: "base" });
  });

  personalScoreFiliere.innerHTML = '<option value="">All filieres</option>';
  filieres.forEach(function (filiere) {
    const option = document.createElement("option");
    option.value = filiere;
    option.textContent = filiere;
    personalScoreFiliere.appendChild(option);
  });
}

function launchConfetti() {
  const confettiLayer = document.createElement("div");
  confettiLayer.className = "confetti-layer";
  document.body.appendChild(confettiLayer);

  for (let index = 0; index < 120; index += 1) {
    const confetti = document.createElement("span");
    confetti.className = "confetti-piece";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = ["#6907fa", "#ffbe0b", "#fb5607", "#06d6a0", "#3a86ff"][
      index % 5
    ];
    confetti.style.animationDelay = `${Math.random() * 0.7}s`;
    confetti.style.animationDuration = `${2.2 + Math.random() * 1.8}s`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(confetti);
  }

  setTimeout(function () {
    confettiLayer.remove();
  }, 4500);
}

function showScorePopup(candidate) {
  const existingPopup = document.querySelector(".score-popup-backdrop");
  if (existingPopup) {
    existingPopup.remove();
  }

  const popup = document.createElement("div");
  popup.className = "score-popup-backdrop";
  popup.innerHTML = `
    <div class="score-popup" role="dialog" aria-modal="true" aria-labelledby="score-popup-title">
      <div class="score-trophy" aria-hidden="true">&#127942;</div>
      <p class="score-popup-kicker">Congratulations candidate</p>
      <h2 id="score-popup-title">${escapeHtml(candidate.nom)}</h2>
      <p class="score-popup-points">${escapeHtml(candidate.score)} points</p>
      <button type="button" class="score-popup-close">Close</button>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelector(".score-popup-close").focus();
  popup.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("score-popup-backdrop") ||
      event.target.classList.contains("score-popup-close")
    ) {
      popup.remove();
    }
  });
}

function revealCandidateScore(candidateKey) {
  const candidate = personalScoreCandidates.find(function (item) {
    return getCandidateKey(item) === candidateKey;
  });

  if (!candidate) {
    return;
  }

  revealedTopScores.add(candidateKey);
  renderPersonalScores();
  launchConfetti();
  showScorePopup(candidate);
}

function bindPersonalScoreEvents() {
  personalScoreSearch?.addEventListener("input", renderPersonalScores);
  personalScoreFiliere?.addEventListener("change", renderPersonalScores);
  personalScoreSortButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      personalScoreSort = button.dataset.sort;
      personalScoreSortButtons.forEach(function (sortButton) {
        sortButton.classList.toggle("active", sortButton === button);
      });
      renderPersonalScores();
    });
  });

  personalScoreTables.forEach(function (scoreTable) {
    scoreTable.addEventListener("click", function (event) {
      const revealButton = event.target.closest(".reveal-score-button");
      if (revealButton) {
        revealCandidateScore(revealButton.dataset.candidateKey);
      }
    });
  });
}

function loadPersonalScores() {
  if (personalScoreTables.length === 0) {
    return;
  }

  if (personalScoreSearch) {
    personalScoreSearch.value = "";
  }
  if (personalScoreFiliere) {
    personalScoreFiliere.value = "";
  }
  personalScoreSort = "score";
  personalScoreSortButtons.forEach(function (sortButton) {
    sortButton.classList.toggle("active", sortButton.dataset.sort === "score");
  });

  personalScoreTables.forEach(function (scoreTable) {
    scoreTable.innerHTML =
      '<tbody><tr><td class="score-empty-state">Loading personal scores...</td></tr></tbody>';
  });

  fetch("data/stagelink_points.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to load personal scores");
      }
      return response.json();
    })
    .then(function (data) {
      personalScoreCandidates = Array.isArray(data.candidates) ? data.candidates : [];
      fillFiliereFilter();
      renderPersonalScores();
    })
    .catch(function () {
      personalScoreTables.forEach(function (scoreTable) {
        scoreTable.innerHTML =
          '<tbody><tr><td class="score-empty-state">Personal scores are currently unavailable.</td></tr></tbody>';
      });
    });
}

bindPersonalScoreEvents();
loadPersonalScores();
