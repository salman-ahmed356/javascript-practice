class todoList{
    constructor(){
        this.tasks=[];
    }
    
    addTask(id,description,dd,status){
        this.tasks.push({id,description,dd,status});
        console.log("Task added successfully!");
    }
    deleteTask(did){
        var index = this.tasks.findIndex(task=>task.id==cid);
        if(index!=-1){
            this.tasks.splice(index,1);
            console.log("Task deleted successfully!");
        }
        else{
            console.log("Task not found...");
        }
    }
    completeTask(cid){
        var index = this.tasks.findIndex(task=>task.id==cid);
        if(index!=-1){
            this.tasks[cid].status = "completed";
            console.log("The task has been marked completed successfully!");
        }
        else{
            console.log("Task not found...");
        }
    }
    viewTasks(){
        if(this.tasks.length==0){
            console.log("No tasks are currently present...");
        }
        else{
            console.log("All tasks are as follows: ")
            this.tasks.forEach(task=>{
                console.log("Task " + (task.id+1) + " with description: " + task.description + " -- is " + task.status + " . Due date: " + task.dd);
            })
        }
    }

}
const readlineSync = require('readline-sync');
var todo = new todoList();
let managing = true;
var idd = -1;
async function manage(){
    while(managing){
       var ans = readlineSync.questionInt(`
            Enter options from below: 
            1: Add task
            2: Delete task
            3: Mark task as completed
            4: View all tasks
            5: Exit

            Enter : `);
        switch(ans){
            case 1:
                var description = readlineSync.question("Enter task description: ");
                var dd = readlineSync.question("Enter its due date: ");
                var status = readlineSync.question("Enter its status as completed or pending: ");
                idd++;
                todo.addTask(idd,description,dd,status);
                break;
            case 2:
                var did = readlineSync.questionInt("Enter task id to be deleted: ");
                todo.deleteTask(did);
                break;
            case 3:
                var cid = readlineSync.questionInt("Enter task id to be marked as completed: ");
                cid--;
                todo.completeTask(cid);
                break;
            case 4:
                todo.viewTasks();
                break;
            case 5:
                managing = false;
                break;
            default:
                console.log("Enter correct option!!");
                break;
        }
    }
}
manage();