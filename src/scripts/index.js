$(document).ready(() => {
    const btnI = $(".addTodo i");
    const input = $(".addTodo input[type='text']");
    const todos = $(".todos");

    let isEditing = false;
    let currentSpan = null;

    todos.on("click", ".delete", function () {
        // closest -> A partir do botão de deletar, este método sobe na hierarquia do DOM em busca do ancestral mais próximo que tenha a classe .todo-element.
        $(this).closest(".todo-element").remove();
    });

    todos.on("click", ".edit", function () {
        input.val("");
        currentSpan = $(this).closest(".todo-element").find("span");
        input.val(currentSpan.text());

        isEditing = true;
    });

    btnI.on("click", (e) => {
        e.preventDefault();

        if (!input.val()) {
            input.css("border", "1px solid red");
        } else {
            if (isEditing) {
                currentSpan.text(input.val());
                isEditing = false;
                currentSpan = null;
                input.val("");
            } else {
                const content = `
                <div class="todo-element">
                    <span>${input.val()}</span>
                    <div class="todo-icons">
                        <i class="fa-solid fa-pencil edit"></i>
                        <i class="fa-solid fa-trash delete"></i>
                    </div>
                </div>
                `;

                todos.append(content);

                input.val("");
            }
        }
    });
});
