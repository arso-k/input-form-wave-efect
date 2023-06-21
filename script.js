const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style = "transition-delay:${idx * 70}ms">${letter}</span>`
    )
    .join("");
});

// The above code snippet selects all labels with the class "form-control" and applies a visual effect to each label's text. It splits the text into individual letters, wraps each letter in a span element with a specific transition-delay based on its index, and then combines them back into a string. This creates a transition effect where each letter appears with a delay.

//visualisation of what happend
/*
  <label>
    <span style = "transition-delay:${idx * 50}ms">E</span>
    <span style = "transition-delay:${idx * 50}ms">m</span>
    <span style = "transition-delay:${idx * 50}ms">a</span>
    <span style = "transition-delay:${idx * 50}ms">i</span>
    <span style = "transition-delay:${idx * 50}ms">l</span>
  </label >; 
*/
