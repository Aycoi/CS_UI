document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            showSection(this.dataset.section);
        }
    });
});

function showSection(section) {
    fetch(`/section/${section}`)
    .then(response => response.text())
    .then(text => {
        console.log(text);
        const content = document.querySelector('#content');
        content.innerHTML = text;
        content.style.display = 'block';
    });
}
