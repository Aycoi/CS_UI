document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            const section = this.dataset.section; 
            // add the current state to the history 
            history.pushState({section: section}, "", `section${section}`); 
            showSection(section)
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

// when back arrow is clicked
window.onpopstate = function(event){
    console.log(event.state.section); 
    showSection(event.state.section); 
}
