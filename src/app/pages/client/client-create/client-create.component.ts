import { ClienteModel } from './../../../../models/Client/client.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { IConfig } from 'ngx-mask';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})

export class ClientCreateComponent {

  skillsForm: FormGroup;

ngOnInit(): void {
  this.skillsForm.controls['type'].setValue(0);

}

  constructor(private fb:FormBuilder) {

    this.skillsForm = this.fb.group({
      id: '',
      type:'',
      name:'',
      identityDocument:'',
      registrationNumber:'',
      registrationDate:'',
      status: false,
      contacts: this.fb.array([]) ,

    });

  }

  get contacts() : FormArray {
    return this.skillsForm.get("contacts") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      id: '',
      codeArea: '',
      phoneNumber:'',
      clientId: ''
    })
  }

  addSkills() {
    this.contacts.push(this.newSkill());
  }

  removeSkill(i:number) {
    this.contacts.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }


}




