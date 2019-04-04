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
  get item1() { return this.itemForm.get('item1'); }
  get item2() { return this.itemForm.get('item2'); }
  get item3() { return this.itemForm.get('item3'); }

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.itemForm);
  }
}
