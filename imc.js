// Selectors
const calculer = document.querySelector("#calculer");

// Functions
function calculate() {
  const prenom = document.querySelector("#name").value;
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;

  const result = document.querySelector("#result");

  if (prenom !== null && height !== null && weight !== null) {
    // Calculer mathématique de l'IMC
    const IMCValue = (weight / (height * height)).toFixed(1);
    // Déclaration finale
    let classification = "";

    //   Déterminer les catégories des classifications

    if (IMCValue < 18.5) {
      classification = " en insuffisance pondérale (maigreur)";
    } else if (IMCValue < 25) {
      classification = " de corpulence normale ";
    } else if (IMCValue < 30) {
      classification = " en surpoids";
    } else if (IMCValue < 35) {
      classification = " en obésité modérée";
    } else if (IMCValue < 40) {
      classification = " en obésité sévère";
    } else {
      classification = " en obésité morbide ou massive";
    }
    result.textContent = `${prenom} votre IMC est de ${IMCValue} et vous êtes ${classification}`;
  } else {
    result.textContent = "Veuillez remplir tous les champs s'il vous plait ! ";
  }
}
// Event Listeners
calculer.addEventListener("click", calculate);
