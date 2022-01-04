export default async function loadReadme() {
  fetch('./README.md')
    .then((response) => response.text())
    .then((rawText) => document.querySelector('#task-content').innerHTML = marked.parse(rawText));
} 