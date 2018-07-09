import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = '';
  todos = [];
// User Inputs Name -> YourName's To Do List

//Creates to do list
createTodo() {
  this.todos.push(this.todoInput);
  this.todoInput="";
}
//Edit to do list
editTodo(chore) {
  let index = this.todos.indexOf(chore);
  this.todos[index] = prompt('New To Do:');
}
//Delete to do
deleteTodo(chore) {
  let index = this.todos.indexOf(chore);
  this.todos.splice(index, 1);
  }
}
