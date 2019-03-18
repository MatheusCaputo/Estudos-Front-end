var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = JSON.parse(localStorage.getItem('lista_tarefas')) || [];

function renderTarefas(){
    listElement.innerHTML = '';
    for(tarefa of tarefas){
        var tarefaElement = document.createElement('li');
        var tarefaText = document.createTextNode(tarefa);
        var linkElement = document.createElement('a');
        var textLink = document.createTextNode('Excluir');
        var pos = tarefas.indexOf(tarefa); 

        linkElement.setAttribute('onclick', 'excTarefa('+ pos +')');

        linkElement.appendChild(textLink);
        linkElement.setAttribute('href', '#');

        tarefaElement.appendChild(tarefaText);      
        tarefaElement.appendChild(linkElement);   
        listElement.appendChild(tarefaElement);
    }
}

renderTarefas();

function addTarefa(){
    tarefas.push(inputElement.value);
    inputElement.value = '';
    renderTarefas();
    saveToStorage();
}

buttonElement.onclick = addTarefa;

function excTarefa(pos){
    tarefas.splice(pos, 1);
    renderTarefas();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('lista_tarefas', JSON.stringify(tarefas));
}