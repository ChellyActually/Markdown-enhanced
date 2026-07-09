import mdToHtml from './preview.js';

const textarea = document.querySelector('#text');
const toggle = document.querySelector('#toggle');
const previewPanel = document.querySelector('#preview-panel');

function updatePreview() {
    const text = textarea.input;
    const resultHTML = mdToHtml(text);
    previewPanel.innerHTML = resultHTML;
}

toggle.addEventListener('change', () => {
    if(toggle.checked){
        updatePreview();
        previewPanel.classList.remove('hidden');
    }
    else{
        previewPanel.classList.add('hidden');
    }
})