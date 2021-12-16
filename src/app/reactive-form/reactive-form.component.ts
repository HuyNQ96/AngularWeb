import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public formData: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
  });

  public formData2 = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['',Validators.required],
    adresss: this.formBuilder.group({
      number: [''],
      city: ['']
    })
  });

  constructor(private common: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  public onSubmit(): void {
    console.log('Submit Reactive Form: ', this.formData);
    this.common.submitData(this.formData.value);
  }

  public onSubmit2(): void {
    console.log('Submit Reactive Form: ', this.formData2);
    this.common.submitData(this.formData2.value);
  }
}
