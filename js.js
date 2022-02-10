const setup = () => {
  const p = document.querySelector('p');
  wrapWordsWithLengthEight(p);
}

var textLink = document.querySelector("#link");
textLink.innerHTML = "LINK FOR THE WEBSITE";
textLink.setAttribute("href", "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html");


function countWords() {
  var paragraph = document.getElementById("p");
  var count = 0;
  count += paragraph.innerHTML.split(' ').length;
  document.write(count + " words");
}
countWords();

const check = (word) => {

  const hasCharacter = word.includes(".", word.length - 1) || word.includes(",", word.length - 1) || word.includes(";", word.length - 1) || word.includes(":", word.length - 1) || word.includes('?', word.length - 1) || word.includes('!', word.length - 1) || word.includes('"', word.length - 1);

  const wordLength = hasCharacter ? (word.length - 1) : word.length;

  if (wordLength > 8) {
    const spanContent = hasCharacter ? word.substring(0, word.length - 1) : word;
    const endCharacter = hasCharacter ? (word.substring(word.length - 1)) : '';
    word = `<mark>${spanContent}</mark>${endCharacter} `; //mark makes word highlited
  } else word = `${word} `;

  if (word.includes('!')) {
    return word.replace("!", "&#128562") + '</br>';
  }

  if (word.includes('?')) {
    return word.replace("?", "&#129300") + '</br>';
  }

  if (word.includes(".")) {
    return word + '</br>';
  }

  return word;
};


const wrapWordsWithLengthEight = (target) => {
  const text = (target.textContent).trim().split(' ').map(check).join('');
  target.innerHTML = text;
}


window.addEventListener('load', setup);
