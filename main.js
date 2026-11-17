document.getElementById("input").addEventListener("input", () => {
  document.getElementById("output").textContent = `\$\$${input.value}\$\$`;
  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise([document.getElementById("output")]);
  }
});

document.getElementById('color').addEventListener('click', () => {
  document.body.classList.toggle('white');
  if (document.body.classList.contains('dark')) {
    document.getElementById('color').textContent = 'White';
  } else {
    document.getElementById('color').textContent = 'Normal';
  }
});