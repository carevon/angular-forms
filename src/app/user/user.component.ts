import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user', // é a tag pra adicionar um webcomponent
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formUser:FormGroup; //declarar uma variavel do tipo FormGroup
  constructor(private formBuilder:FormBuilder) { 
    //Estrutura do formulario de usuário com dados pré definidos

    this.formUser = this.formBuilder.group({
      nome: [{value:"Churros", disabled:false}],
      sobrenome: [{value:"Churrito", disabled:false}],
      email: [{value:"churros@gmail.com", disabled:false}],
      telefone: [{value:"+55119656565", disabled:false}]
    })
  }

  ngOnInit() {
  }

}
