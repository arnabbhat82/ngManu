import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  itemForm = this.fb.group({
    item1: ['', [Validators.required, Validators.minLength(3)]],
    item2: ['', [Validators.required, Validators.minLength(3)]],
    item3: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.itemForm);
  }
}
