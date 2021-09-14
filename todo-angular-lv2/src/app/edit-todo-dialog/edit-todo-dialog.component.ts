import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }
  
  onFormSubmit(form: NgForm) {
    if (form.invalid) return
    
    const updatedTodo = {
      ...this.todo,
      ...form.value
    }


    // when we are closing it, we are sending the update data
    // on the todos components, we are getting subscribed to this close so that we can get the updated data
    
    this.dialogRef.close(updatedTodo)
  }

}
