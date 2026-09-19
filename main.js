document.getElementById("input").addEventListener("input", () => {
  document.getElementById("output").textContent = `\$\$${input.value}\$\$`;
  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise([document.getElementById("output")]);
  }
});
