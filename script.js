document.getElementById("calculate-btn").addEventListener("click", function() {
    const mathFin = parseFloat(document.getElementById("math-fin").value);
    const algebre = parseFloat(document.getElementById("algebre").value);
    const macro = parseFloat(document.getElementById("macro").value);
    const micro = parseFloat(document.getElementById("micro").value);
    const compta = parseFloat(document.getElementById("compta").value);
    const proba = parseFloat(document.getElementById("proba").value);
    const LT = parseFloat(document.getElementById("LT").value);
    const management = parseFloat(document.getElementById("management").value);

    const mathFinEtAlg = (mathFin + algebre) / 2;
    const noteFinal = (mathFinEtAlg + macro + micro + compta + proba + LT + management) / 7;

    document.getElementById("final-score").textContent = noteFinal.toFixed(2);
});
