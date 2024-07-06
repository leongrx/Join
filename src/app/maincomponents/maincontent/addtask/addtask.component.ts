import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.scss'
})
export class AddtaskComponent {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      priority: ['', Validators.required],
      assignedTo: [''],
      category: [''],
      subtasks: ['']
    });
  }

  clearForm(): void {
    this.taskForm.reset();
  }

  createTask(): void {
    if (this.taskForm.valid) {
      console.log('Formulardaten:', this.taskForm.value);
      this.clearForm();
    } else {
      alert('Formular ist nicht gültig');
    }
  }
}
