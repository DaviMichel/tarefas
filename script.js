document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "X";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.color = "red";

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Marcar tarefa como concluída ao clicar
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        // Remover tarefa ao clicar no botão X
        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita marcar como concluída ao clicar no botão de excluir
            li.remove();
        });

        taskInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa.");
    }
});
