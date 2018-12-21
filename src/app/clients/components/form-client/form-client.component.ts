import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Output() nItem: EventEmitter<Client> = new EventEmitter();
  public states = Object.values(StateClient);
  public form: FormGroup;
  private init = new Client();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [this.init.name, Validators.required],
      email: [this.init.email, Validators.required],
      state: [this.init.state]
    });
  }

  public onSubmit() {
    this.nItem.emit(this.form.value);
  }
}
