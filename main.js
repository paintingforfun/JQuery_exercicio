$(document).ready(function() {
const listItems = [];


$('form').on('submit', function(e) {

        e.preventDefault();

        const tarefa = $('#nome-tarefa').val();
        const listaTarefas = $('ul')


        let novaTarefa = $(`<li >
                                ${tarefa}
                        </li>`);

        novaTarefa.appendTo(listaTarefas);

        $('input').val('');
    })


    // ----//----

        $('ul').on('click', function(e) {
            if(e.target.classList.contains('check')) {
                e.target.classList.remove('check');
            }
            else {
                e.target.classList.add('check');
            }
        }) 
});