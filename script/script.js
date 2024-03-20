{
    const tasks = [{
        content: "test",
        done: true,
    },
    {
        content: "test2",
        done: false,
    }];

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });
        render();
    };

    const render = () => {
        let addTextToHtml = "";
        const tasksElement = document.querySelector(".js-tasks");
        for (const task of tasks) {
            addTextToHtml += `
        <li>
        <button class="js-toogleButton">
       ${task.done ? "Y":"N"}
        </button>
       <span class="${task.done ? "taskDone":""}">  
       ${task.content}
       </span>
        </li>`
        };
        tasksElement.innerHTML = addTextToHtml;
        
        const toogleButton = document.querySelectorAll(".js-toogleButton");
        toogleButton.forEach((toogleButton, index) => {
            toogleButton.addEventListener("click", () => {
                tasks[index].done = !tasks[index].done
                render();
            }); 
        });
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const newTaskElemnt = document.querySelector(".js-newTask");
            const newTask = newTaskElemnt.value.trim();
            if (newTask !== "") {
                addNewTask(newTask);
                newTaskElemnt.value = "";
            }
            newTaskElemnt.focus();
        });
    };
    init();
}