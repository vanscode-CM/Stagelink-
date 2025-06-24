const fs = require("fs");
const path = require("path");

function createIndexFile(filePathl2=undefined,filePathl3=undefined) {
    let linesl2
    let linesl3
  if (filePathl2) {
    const datal2 = fs.readFileSync(filePathl2, "utf8");
   linesl2 = datal2.split("\n");
  }

   if (filePathl3) {
    const datal3 = fs.readFileSync(filePathl3, "utf8");
   linesl3 = datal3.split("\n");
  }

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" type="image/png" href="images/Logo-StageLink.png">
      <title>StageLink</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <div id="rideau-intro">
        <div id="options">
          <div id="level1"><button id="bl1">STAGELINK L1</button></div>
          <div id="level3"><button id="bl3">STAGELINK L3</button></div>
        </div>
      </div>
      <div id="logo"><img src="images/Logo-StageLink.png" alt="stageLink" style="width: 10vw;"></div>
      <div id="head">
        <div class="head_img">
          <a href='#' id="l1"><img src="images/step-1-active.png" alt="about" id="im1"><br> <span class="titre">ABOUT</span>
          </a>
        </div>

        <div class="head_img">
          <a id="l2"><img src="images/step-2.png" id="im2" alt="personnal-score "> <br><span class="titre">PERSONAL
              SCORE</span> </a>
        </div>

        <div class="head_img">
          <a id="l3" style="display: block;"><img src="images/step-3.png" alt=" pv-team-scrore" id="im3"><br><span
              class="titre">PV TEAM SCORE</span>
          </a>
        </div>
        <div class="head_img">
          <a id="l4"><img src="images/step-4.png" alt="us team score" id="im4"><br><span class="titre">US TEAM SCORE</span>
          </a>
        </div>
      </div>
      <div id="control-level" class="fixed-button"><button id="optl1">stagelink l1 </button> <button id="optl3">stagelink
          l3</button></div>
      <marquee> Bienvenue au programme StageLink L3. Le programme d'immersion dans le monde professionnel. Vous 
        demarrerez lundi le 17 février 2025. MAXIMUM D'EXPERIENCE A TOUS !
      </marquee>
      <section class="page" id="page1">
        <div id="presentation">
          <h1> C'EST QUOI STAGELINK ?</h1>

          <div class="about" id="aboutl1">
            <b>Chers parents,</b>
            <br><b>StageLink</b> est un ensemble d'entreprises (30) qui ont pour but d'encadrer les étudiants les plus
              motivés à croitre en compétence et surtout leur permettre d'intégrer progressivement notre réseau afin de sortir
              par eux-même de la boucle de l'inemployabilité.
              <br> Incompétence -&gt; Manque de Stage -&gt; Manque d'expérience -&gt; Chomage -&gt; Incompétence
              <br> <b>Pour continuer à exister et à se developper afin de mieux aider, StageLink à toujours eu besoin de
                soutien. Tout les étudiants sélectionnés au programme doivent soutenir à hauteur de 40 000 FCFA. Et bénéficier
                des avantages suivants:
              </b>
              <ol><b>
                  <li>Formation pratique (2 mois)</li>
                  <li>Stage(2 mois)</li>
                  <li>Visite des entreprises du métier</li>
                  <li>Pré-soutenance</li>
                  <li>Soutenance de fin</li>
                  <li>Assistance rapport pour le BTS</li>

                </b>
                <br> MERCI POUR LE SOUTIEN ET LA BONNE COMPREHENSION!
              </ol>
            </div>

            <div class="about" id="aboutl3">
              <b>Chers parents,</b>
              <br><b>StageLink</b> est un ensemble d'entreprises (30) qui ont pour but d'encadrer les jeunes étudiants les plus motivés à avoir un ensemble d'outils indispensables pour le monde professionnel, à savoir : les compétences réellement recherchées par les employeurs, la culture d'entreprises, les techniques d'intégration ...
              <br> En cette année 2025, le programme se donne l'objectif de donner un <b>contrat de travail (CDD)</b> à 50 étudiants les plus talentueux dans les entreprises partenaires et vise à en faire davantage au fil du temps.
              <br> Mais pour garantir une progression permanente dans le temps, le programme nécessite néanmoins quelques fonds dont le soutien des profils sélectionnés aidera à alléger certains coûts. Les profils devront contribuer à hauteur de <b>60 000 FCFA</b> pour bénéficier des avantages suivants :
              <ol>
                  <li>Formation pratique (3 mois)</li>
                  <li>Stage (3 mois)</li>
                  <li>Possibilité d'avoir un CDD</li>
                  <li>Une intégration progressive</li>
                  <li>Conseil des aînés pour devenir autonome</li>
                  <li>Soutenance pour la promotion des compétences</li>
                  <li>Assistance rapport pour l'épreuve de licence</li>
              </ol>
              <br> La contribution des profils sera gérée comme suit :
              <ul>
                  <li>Inscription : 10 000 FCFA</li>
                  <li>Formation pratique : 30 000 FCFA</li>
                  <li>Frais de concours pour la zone delta : 20 000 FCFA</li>
              </ul>
              <br> <b>NB :</b> Le programme StageLink met les étudiants sur le chemin, mais c'est à l'étudiant que revient la responsabilité de se démarquer !
            </div>
            <div class="boutons">
              <a class="bouton">Back</a> 
              <a class="bouton" id="go-to-p1">Continue</a>
            </div>

          </div>

        </section>

        <section class="page" id="page2">
          <div class="tableau" style=" display: flex;
              flex-direction: column; align-items: center;">
            <h1 style="color:  #6907fa;margin-top: 5%; font-size: larger;"> Check your personal Score!</h1>
            <table class="headtab" id="tableau-l2">
              <colgroup>
                <col style="width: 500px;"> <!-- Largeur spécifique pour la première colonne -->
                <col style="width: 500px;">
                <col>
                <col>
                <col>
                <col>
                <!-- Ajoute d'autres <col> selon le nombre de colonnes dans ton tableau -->
              </colgroup>

              <tr>
                <th>Nom</th>
                <th>STATUT</th>
                <th>Filière</th>
                <th>Université</th>
                <th>Score</th>
                <th>Register</th>
              </tr>
                <tr>
          <td class="particulier">Moins de 500 points</td>
          <td><img src="images/dollar.png" alt="Votre Logo">Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~250</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Plus de 500 points</td>
          <td><img src="images/coin.png" alt="Votre Logo">Gold Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~725</td>
          <td><a>Sign Up</a></td>
        </tr>

              ${
                 filePathl2
                  ? linesl2
                      .map((line) => {
                        const [nom, filiere, universite, score] =
                          line.split(",");
                        return `
                  <tr>
                    <td class="particulier">${nom}</td>
                    <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
                    <td>${filiere}</td>
                    <td>${universite}</td>
                    <td>~${score}</td>
                    <td><a>Sign Up</a></td>
                  </tr>
                `;
                      })
                      .join("")
                  : `        <tr>
          <td class="particulier">ADAKEU MARIMA BOSSE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~42</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
        <tr>
          <td class="particulier">ANDJE MERLINE CABRELLE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~52</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ANDOUN AMBANG Leslie</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~101</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">ASSONGMO SIANI Brayan Varel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~146</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">AYAMA DANG Pascaline</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~81</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">AYIYOPA Guy Blondin</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~100</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ASAAH BENITA ANWIN</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~85</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">BAKOA ELU-BENI DE DIEU</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~87</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">BAYECK Nicolas Borel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~109</td>
          <td><a>Sign Up</a></td>
        </tr>
        <td class="particulier">BOHIMBO ETOTA Samuel Ryan</td>
        <td>
          <img src="images/dollar.png" alt="Votre Logo">
          </span>Standard Student
        </td>
        <td>StageLink</td>
        <td>StageLink</td>
        <td>~109</td>
        <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">BONKOUA LANDRY</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~304</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DAMA Jerry</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~116</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DCHEUNANG MAKEMSSO Ange</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~414</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJEUDJUI KOUAMI FELIX Cabrel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~55</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJAMENI TCHOUTCHA THIERRY</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~242</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJANGANG NGONGANG Patricia</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~112</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJEUKA DEMANOU Braye</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~92</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJEUYAP MOUPIHOU Nathan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~338</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJIAZET TONGUE STEVE</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~186</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJOUKANG JAUREL HARRIDSON</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~101</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJOUKOUE David Verlan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~327</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">DJOUMESSI KENFACK Brayan Vinil</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~116</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DONFACK ASSONG Wilfried</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~47</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DONG MBEREKE GLENN MOREL</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~142</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">DONGMO TENJIYIM LOIC</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~120</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DZUNE KAMGA Arold Wuthney</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~36</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">EBEYE NGOSSO Desire</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~106</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ELESSA SAMUEL JUNIOR</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~91</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">EYANA DANIELLE CLAUDE</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~159</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ETONDE DAVID</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~115</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FEUYANG NGASSAM MIGUEL</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~301</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FOKOU KENOU Prince Berthol</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~120</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FONYEN KELOUTOU EMMANUEL</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~50</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FOTSO KAPTCHE Marie</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~125</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FOTSO TANGA Stephane Miguel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~61</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FOZING MBEUTCHOP Loïc Junior</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~71</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">GODWILL MVONDO</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~161</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">GONI ABAKAR</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~122</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">GUIFO Silas Brunnel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~129</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">HEUSSIEU SIEBANOU Allan Yannis</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~75</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ITOMBI ITOMBI Loic Ledoux</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~140</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">JEANS MBANJOCK Flavien</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~65</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">JORDAN NGUEBIWO</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~166</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMDEM CHIDJO Borice</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~117</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMENI KAMGA Idriss</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~85</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMGA WABO Pascal Arthur</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~374</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMGAING GUIADEM Ariane Maeva</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~248</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMOKWE TAMO Philemon Willfred</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~118</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KASSI OLINGA KEVIN</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~193</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KEDE NYEMB PAUL BLONNEL</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~80</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KEMZONG Ulrich Brunel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~70</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KENNE TANKEU MEGANE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~155</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KENMATIO TEDONGMO REMI</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~223</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KENMEUGNE FEUKAM Klod Ariane</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~115</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KENMOGNE NOUBISSI Chalone Djibril</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~102</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KEPAYOU TALA Kellyane Shalonne</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~136</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">KEPAYOU TALA Kellyane Shalonne</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~136</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">KIJOBI CARLY LA FORTUNE</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~77</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">KONG SAMBA CHRISTIAN CABREL</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~80</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KONLACK MBAPAP Loveline Kyliane</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~298</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KONLOG JULES LOUIS</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~80</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KOUGANG NGOUFACK Lohna</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~90</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">KUETE KENNE Loïc</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KWEDI MAKAN Armand Alain</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~298</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">LELE NGOUMKAM Flora</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~132</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MABOU NDJOUANANG Wilfried Desther</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~115</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MAFFO TALLA Scheridan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~47</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MAKOGE NANGUE Rudolphe Ryan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~51</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MANDENGUE Paul</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~293</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MANIGOUE NAOMIE Blanche</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~143</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Marie Lumiere Bothe</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~113</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MASSUDEM TCHAGOU ESTELLE FARELLE</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~42</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MBE FONGANG WILFRIED ALAM</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~95</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>

        <tr>
          <td class="particulier">MBEUDAMENE LANDRY</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~105</td>
          <td><a>Sign Up</a></td>
        </tr>
        <td class="particulier">MEMEKOUNTCHOU</td>
        <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
        <td>StageLink</td>
        <td>StageLink</td>
        <td>~60</td>
        <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MESSOUMBE SOPPE Junior</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~140</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MILLONG Christian Freedy</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~123</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MODJO DJOUM Steve Borel</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~239</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MONIQUE ANDREA</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~90</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MONKAM Franck Cedric</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~180</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MONTHE TCHAGA Bryant Audrey</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~113</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MOULIEM MOICHE Samir</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~72</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MOUNYICHE ABDALLAH Wahab</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~52</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NANA BESSI Evrard</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~121</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NANKAM MEKOUNE MARUIS</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~144</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NDEBI BISSEG NDEBI BISSEG</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~377</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NDEDI SOPPO</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~131</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NDENGOUE Zaviera Geniale</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~131</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NEMADOU FRANCK JUNIOR</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~92</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGATCHOU FEUGAIN Alex Djibril</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~127</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGATSIMI BETAYENE BIDJANGA Georges Wallen</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~41</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGHENBOMEGHENG NDE Fred</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~47</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGIEUGO SAHOU Joachim Brayann</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~85</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGNINTEDEM Bommel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"></span>Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~191</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGONDE NYAMBE Rachel Janice</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~50</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGUEDA NKENNE Ryan Arthur</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~123</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGUEFACK NGOUNE Yvan Patrick</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~61</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGUEGNOU NSENGUE Hermione Naomil</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~71</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGUEKAP HEUMI MIGUEL</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~133</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGUESSEU PIERRE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~197</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NKOUKA Alliance</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~202</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NKOUTCHOU KAMGA Stephy</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~30</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NLOME MADZOU Anan Krys</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~332</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NWAMBA TITSEM Wilfried Duval</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~135</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NYEP KINIE Armelle Sylviane</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~126</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NZALI FENTE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~67</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">OKOLONG BELEBENIE Alex</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~122</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">PEDEDEP MBOZEKO Archille</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~138</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td>SIMO GUY YVAN</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~100</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">SONKOUE STEVE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~107</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">SOPTCHUMOU NKEPTCHOUANG Isaac Leonel</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~130</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">SOSSO KOMTE DUBE Remi</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~188</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">SOUNA DJOUFACK Maxime</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~51</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">STEPHANE MAXIME YON</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~247</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TAFOUO LONTSIE OBEN </td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~100</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TAYOUMOU Denis Brayan</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~20</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TCHALEU KAMENI AXEL</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~85</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TCHANGOU MBELLA RICKY
          </td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~123</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TCHOUNDJEU NDJASSI Franck Miguel</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~230</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">TCHOUPOU MELI NEHEMI</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~120</td>
          <td><a>Sign Up</a></td>
        </tr>

        <tr>
          <td class="particulier">TCHUENKAM DJOKO Arnold</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~174</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TCHUIDJEU Essoh</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~65</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TEDONGMO TSAPI MAYEVA</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~57</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TEGUIA KAMGAING Dylan Andy</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~260</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TESSOUNG FODJEU Joel</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~10</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td>
        <tr>
          <td class="particulier">TETA TEUDJEUTSA Christ Olympio</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~10</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TEUDEM DIMITRI</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~105</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">THEDOM WOBOYI JORES</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~70</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TIMO MOUGANG Joël José</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~52</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TOUGNI NJENKOU MYRIS EVA
          </td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~133</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TSIDA KAMLOUNG Arthur Kevin</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~120</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">WAN-ZEAM MBOZUISSE Kerol Printemps</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~115</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">WANDJON LAETICIA SORELLE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~65</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">WANTONG TCHUINGAWA Kevin</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~60</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">WELAMEUK TILEUK NAOMIE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~76</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">WILFRIED ASSONG</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~25</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">YAKI MASSIKA DEBORAH</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~85</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">YANNA NATHAN ULRICH</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~41</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">YAWA YABAMO Fayol</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~179</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">YOKWE RAOUL GIRESSE</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~166</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ZEMTAH TAKOUGANG MURRA TESSY</td>
          <td>
            <img src="images/dollar.png" alt="Votre Logo">
            </span>Standard Student
          </td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~144</td>
          <td><a>Sign Up</a></td>
        </tr>
`

                  
              }
            </table>




        <table class="headtab" id="tableau-l3">
              <colgroup>
                <col style="width: 500px;"> <!-- Largeur spécifique pour la première colonne -->
                <col style="width: 500px;">
                <col>
                <col>
                <col>
                <col>
                <!-- Ajoute d'autres <col> selon le nombre de colonnes dans ton tableau -->
              </colgroup>

              <tr>
                <th>Nom</th>
                <th>STATUT</th>
                <th>Filière</th>
                <th>Université</th>
                <th>Score</th>
                <th>Register</th>
              </tr>
                <tr>

            <tr>
          <th colspan="6">NOUVEAUX ETUDIANTS DU PROGRAMME STAGELINK L3</th>
        </tr>
          <td class="particulier">Moins de 500 points</td>
          <td><img src="images/dollar.png" alt="Votre Logo">Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~250</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Plus de 500 points</td>
          <td><img src="images/coin.png" alt="Votre Logo">Gold Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~725</td>
          <td><a>Sign Up</a></td>
        </tr>

              ${
                filePathl3
                  ? linesl3
                      .map((line) => {
                        const [nom, filiere, universite, score] =
                          line.split(",");
                        return `
                  <tr>
                    <td class="particulier">${nom}</td>
                    <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
                    <td>${filiere}</td>
                    <td>${universite}</td>
                    <td>~${score}</td>
                    <td><a>Sign Up</a></td>
                  </tr>
                `;
                      })
                      .join("")
                  : `       <tr>
          <td class="particulier">ABDELAZIZ sali kahlifa</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ABEGA MVONDO placide sharon</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ABOUBAKAR SANI yaou</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ABOYA BALANA emmanuel stephanie</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ANGTEIN junior first mayagui</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ANYOUNG yvette blanche</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ASSOU'OU FONO leandra</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">BAEMBLE BAEMBLE moise constantin</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">BILLONG chistony jordan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">CHEKOUO jambon arton</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">CHENDJOU DEFO riotelain</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DEMASSOU jeremie osee glory</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DEUNA HAPPI brayant orland</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DJOMO FANTCHO loganne laure</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">DOUGMO TCHOUPOU nathanael</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">EDONGO AMENGNE franck landry</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">EKAME EBELLA yvan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">EMBOM martin romeo</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">ETSOMBO NGONO rose</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">EYIDI EDEME chantal brenda</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FEZEU claude junior</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FOFFIE BAGUEU loic cartel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FOKOU KAMCHE samuel ange</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FONDJO christian jordan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FOUOTSA loic</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">FRANCK BENOIT BISSOHONG bi biyinda</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">GOUEKUI TCHOFFO horline cindy</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">GOUMTSA TIDO ryan emeric</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">JAMES AUGUSTE same seth</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">JEUFACK TAZANOU morel vianey</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">JUNIOR AKPJAN samuel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMENI PADJI darcel andrea</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMGA FODJEU christian</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMGA WOUAFO briss</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KAMSU franck</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KENFACK durel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KOMNA MELONG jeanne</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KONDE gabrielle ii</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">KOUM freddy dilane</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">LEUGOUE jason maxwell</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">LEUGOUE NGASSA lesly jason</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">LIKGA WOUMO nikese</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">LOBE MOUDION yvan christand junio</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">LOUAPAMBE SOBDIBE payanfou</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MABOK FODOP naturelle</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MAHOP louis nicolas</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MANTO NOBOSSE princesse tatiana</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MBELEL petra mazarine</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MBOG WOME sylvestre volonte</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MINFOUNDI wesley</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MISSE charles gerard</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">MWENEN EYEN natacha</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NANFACK MOMBOU audrey lesly</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGAN BIKITIK madeleine laura</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGOKO KAMDEM carmel wilfried</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NGOUET NJOYA awa</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NKONO raphael</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NONO OUOGUEP merveille leaticia</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NZANDJIO KENGNI roussel cardin</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">NZEUKAM NAWE richelle divine</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">OBANG steve rodrigue</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">OLOKO emmanuel jephse</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">POUNDIE TCHAM ines dafine</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">PRINCESS WANZI oruru</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">SEUMEGNI vilma lorie</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">SOMBSI alberto yvan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TAGNIKEM jorik</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TAKOUFO MOMO gildas</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TAMBO FOSSOOG FOTSO russell</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TCHAMI TCHAPDA clarence</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TCHOUTEU NANA elise serena</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TEKAP o'neal bryan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">TSINDA KINNE arnauld noel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">WAMY kendji ornella vedrine</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">WANDJI KOUAGHU lucien</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">YOUKA DJOMGOUE ange carolle</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>StageLink</td>
          <td>StageLink</td>
          <td>~0</td>
          <td><a href="#">Sign Up</a></td>
        </tr>
                   
        <tr>
          <th colspan="6">ANCIENS ETUDIANTS DU PROGRAMME STAGELINK L1</th>
        </tr>
        <tr>
          <td class="particulier">Bakongo Emmanuel Landry</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~594</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Soh Talla Joel Stephane</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUC</td>
          <td>~569</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Fomene Saha Rodelle</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~561</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Lepguo Ngogang Pagnol Devol</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUG</td>
          <td>~561</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Leutchi Kwebiteu Willy Armel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUC</td>
          <td>~561</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Ngadet Tchankeu Linda Flora</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUG</td>
          <td>~561</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tagne Ziaga Marcelin</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GEII</td>
          <td>IUT</td>
          <td>~561</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tatchuenwa Nziguem Kendric</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~561</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tagnikem Jorik</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUG</td>
          <td>~552</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Nyoundjeu Ngando Carles Jospin</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~544</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Yadieu Sounita Lesline</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~544</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Mekontso Sonwa David</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GEII</td>
          <td>IUT</td>
          <td>~540</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Djuekou Junior</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUG</td>
          <td>~536</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Ngeundeu Djiangoue Blondel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>Institut Royal</td>
          <td>~536</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Poundie Tchami Ines Dafine</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~536</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tchetcha Nana Ange</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GI</td>
          <td>IUG</td>
          <td>~536</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Vashi Dorimene</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~536</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kamgaing Fredh</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~528</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Pena Fosso Hermine</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~528</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tchana Nana Lauryne</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUC</td>
          <td>~528</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Yodou Lucrece</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUG</td>
          <td>~528</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Ekoume Epanlo Patrick</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUG</td>
          <td>~519</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Ngako Jordan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUC</td>
          <td>~514</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Chouankam Mbeunke Ronel Rougier</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GEII</td>
          <td>IUT</td>
          <td>~511</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Feutseu Joyce</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>minTang</td>
          <td>~511</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Zabo Henri</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>Info</td>
          <td>UD</td>
          <td>~510</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kamdoum Nguega Oscar</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUC</td>
          <td>~503</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Makoudoum Marie Lumiere</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~503</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Nkuimi Nana Yonga Isidore</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>ELT</td>
          <td>IUC</td>
          <td>~503</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tsamo Tanekeng Ryan</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~503</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Ghang Koueleye Claudia</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GI</td>
          <td>IUC</td>
          <td>~495</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kouagnang Youmbi Brand</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~495</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Ndjouonang Ngassa Hermann-Wilfried</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>MEI</td>
          <td>IUG</td>
          <td>~495</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Soptcha Tresor Duples</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~495</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Vokinfack Fabiola</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUC</td>
          <td>~495</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kouakam Tankam Lary</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IGL</td>
          <td>IUG</td>
          <td>~486</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kouamou Franck Junior</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUG</td>
          <td>~486</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Sadio Gildas</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUG</td>
          <td>~486</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tchuidjo Djomo Francky</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUG</td>
          <td>~486</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Bankeng Zoguing Emilienne</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~478</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Djiya Armel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GEII</td>
          <td>IUT</td>
          <td>~478</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Magne Patricia</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUGET</td>
          <td>~478</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Nono Djankeu Kierane Jorex</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RSI</td>
          <td>IUC</td>
          <td>~478</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Pitio Socpa Rommel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUG</td>
          <td>~478</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Awangue Manuella</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GI</td>
          <td>IUG</td>
          <td>~470</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Disso Mbay Didier Marc</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~470</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Moukoudi Ange</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUC</td>
          <td>~470</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Fouego Nadine Nidelle</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~457</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Mandala Kotopong Patrick</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~445</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Titouo Cabrel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUC</td>
          <td>~441</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Rikem Dibella Yombi Sheila</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUC</td>
          <td>~437</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Djoumbissie Leussa Yannick</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~409</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kadji Roberto</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~408</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Nguimenang Ymele Yannick Morel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~408</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Atsopgue Dzowen Withney Elsa</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~396</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Ayina Kossoni Line Soreilla</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GEII</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Chancelier Djemilnak</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Dibongue Martin Junior</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUG</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Dongmo Leaze Adrienne</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GEII</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Doudougou Yvan Junior</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GSI</td>
          <td>IUGET</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Fomo Anicet</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Foutchouan Myrand</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kamgia Tchuentche</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kenfack Ange</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUGET</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kengne Sokamte Saurelle</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kouakam Willy</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUG</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kuibop Darol Valdes</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUC</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Kuin Paul Tangu</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GI</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Lonfouo Naha Collins</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GI</td>
          <td>IUG</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Massoda Kame</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GEII</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Mekue Kuetche Blondelle</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUG</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Mouda Linda Manuella</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUG</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Ngadjou Serena</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Nganko Siani Sybille Loriel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>ELT</td>
          <td>IUC</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Nguimbous Christelle</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GI</td>
          <td>IUGET</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Nteppe Njoh Jarde</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>RES</td>
          <td>IUGET</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Sietok Tagho Wilfried</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUC</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tagne Djomou Abdoulaye</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tchamou Pouassi Audrey</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>IIA</td>
          <td>LA SALLE</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tchindoh Miambe Markus</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>ELT</td>
          <td>IUG</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tchokote Ange</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GEII</td>
          <td>IUT</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>
        <tr>
          <td class="particulier">Tsobgni Guemezi Loic Francel</td>
          <td><img src="images/dollar.png" alt="Votre Logo"> Standard Student</td>
          <td>GL</td>
          <td>IUC</td>
          <td>~330</td>
          <td><a>Sign Up</a></td>
        </tr>`

                  
              }
            </table>

          </div>
        </section>

        <section class="page" id="page3">
    <div class="tableau" style=" display: flex;
        flex-direction: column; align-items: center;">
      <h1 style="color:  #6907fa;margin-top: 5%; font-size: larger;">Check your PV Team Score!</h1>

      <table class="headtab">

        <tr>
          <th>Nom du groupe</th>
          <th>STATUT</th>
          <th>Filière</th>
          <th>Membres</th>
          <th>Score</th>
          <th>Register</th>
        </tr>

        <tbody>
          <tr>
            <td class="particulier">Les Avengers en electronique</td>
            <td><span class="logo22">
                <img src="images/dollar.png" alt="Votre Logo">
              </span>Standard Team</td>
            <td>IIA</td>
            <td>Basson, Tchamako, Soh, yomba</td>
            <td>~150</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les Humanoîdes</td>
            <td>
              <span class="logo22">
                <img src="images/coin.png" alt="Votre Logo">
              </span> GOLD Team
            </td>
            <td>GEII</td>
            <td>Fanleu, Bike, Mvondo, Womse</td>
            <td>~650</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les geeks du web</td>
            <td><span class="logo22">
                <img src="images/diamond.png" alt="Votre Logo">
              </span>Diamond Team</td>
            <td>GL</td>
            <td>Wadjie, Bilong, Mbappe, Watat</td>
            <td>~1020</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les Hackers du hack</td>
            <td><span class="logo22">
                <img src="images/diamond.png" alt="Votre Logo">
              </span> DIAMOND Team</td>
            <td>RES</td>
            <td>Kamsu, Momha, Mbiatat, Liko'o</td>
            <td>~1550</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les Designer du Mobile</td>
            <td><span class="logo22">
                <img src="images/dollar.png" alt="Votre Logo">
              </span>Standard Team</td>
            <td>GL</td>
            <td>Soumelong, Nkouam, Tchapeuh, Zoba</td>
            <td>~120</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les killers Attack</td>
            <td><span class="logo22">
                <img src="images/dollar.png" alt="Votre Logo">
              </span>Standard Team</td>
            <td> Informatique</td>
            <td>Atangana, Tafok, Poutchoko, Ngaleu</td>
            <td>~380
            </td>
            <td><a>Sign Up</a></td>
          </tr>
        </tbody>
      </table>
    </div>
        </section>

        <section class="page" id="page4">

        <div class="tableau" style=" display: flex;
        flex-direction: column; align-items: center;">
      <h1 style="color:  #6907fa;margin-top: 5%; font-size: larger;">Check your US Team Score!</h1>
      <table class="headtab">

        <tr>
          <th>Nom du groupe</th>
          <th>STATUT</th>
          <th>Filière</th>
          <th>Membres</th>
          <th>Score</th>
          <th>Register</th>
        </tr>

        <tbody>
          <tr>
            <td class="particulier">Les Avengers en electronique</td>
            <td><span class="logo22">
                <img src="images/dollar.png" alt="Votre Logo">
              </span>Standard Team</td>
            <td>IIA</td>
            <td>EST LA SALLE</td>
            <td>~150</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les Humanoîdes</th>
            <td>
              <span class="logo22">
                <img src="images/coin.png" alt="Votre Logo">
              </span> GOLD Team
            </td>
            <td>GEII</td>
            <td>IUT</td>
            <td>~650</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les geeks du web</th>
            <td><span class="logo22">
                <img src="images/diamond.png" alt="Votre Logo">
              </span>Diamond Team</td>
            <td>GL</td>
            <td>IUGET</td>
            <td>~1020</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les Hackers du hack</td>
            <td><span class="logo22">
                <img src="images/diamond.png" alt="Votre Logo">
              </span> DIAMOND Team</td>
            <td>RES</td>
            <td>IUC</td>
            <td>~1550</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les Designer du Mobile</th>
            <td><span class="logo22">
                <img src="images/dollar.png" alt="Votre Logo">
              </span>Standard Team</td>
            <td>GL</td>
            <td>IUG</td>
            <td>~120</td>
            <td><a>Sign Up</a></td>
          </tr>
          <tr>
            <td class="particulier">Les killers Attack</td>
            <td><span class="logo22">
                <img src="images/dollar.png" alt="Votre Logo">
              </span>Standard Team</td>
            <td> UD </td>
            <td>Informatique</td>
            <td>~380
            </td>
            <td><a>Sign Up</a></td>
          </tr>
        </tbody>
      </table>
    </div>

        </section>
          <script src="jquery-3.7.1.min.js"></script>
  <script src="script.js"></script>

      </body>
    </html>
  `;

  fs.writeFileSync("indexbuild.html", html);
}
 

// exemple 
createIndexFile("donnees.txt","donnees.txt"); // cette fonction prend en parametre 2 chemin vers les fichier txt contenant les donnee des l2 et l3
// remplacer par un autre chemin a votre guise 