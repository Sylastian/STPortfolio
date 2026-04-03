const words = ["Aspiring Programmer", "Learning Web Dev", "Future Developer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = words[i];
  
  if (!isDeleting) {
    j++;
    if (j === current.length) isDeleting = true;
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  document.getElementById("type").textContent = current.substring(0, j);
  setTimeout(type, isDeleting ? 50 : 100);
}

type();
