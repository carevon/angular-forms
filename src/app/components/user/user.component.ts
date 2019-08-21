import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; //requisições http

@Component({
  selector: 'app-user', // é a tag pra adicionar um webcomponent
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formUser:FormGroup; //declarar uma variavel do tipo FormGroup
  userAPIUrl:string = "https://randomuser.me/api" // api de usuarios aleatorios
  user:Object; // armazenar o objeto de usuário aleátorio

  constructor(
    private formBuilder:FormBuilder, private http:HttpClient){ 
    //Estrutura do formulario de usuário com dados pré definidos
    this.formUser = this.formBuilder.group({
      nome: [{value:"Churros", disabled:false}],
      sobrenome: [{value:"Churrito", disabled:false}],
      email: [{value:"churros@gmail.com", disabled:false}],
      telefone:[{value:"+55119656565", disabled:false}]
    })
  }

  ngOnInit() {
  }

  public async novoUsuario(){
    this.user = await this.http.get(this.userAPIUrl).toPromise()

    //chaves do formulário
    this.formUser.controls['nome'].setValue(this.user['results'][0]['name']['first']);
    this.formUser.controls['sobrenome'].setValue(this.user['results'][0]['name']['last']);
    this.formUser.controls['email'].setValue(this.user['results'][0]['email']);
    this.formUser.controls['telefone'].setValue(this.user['results'][0]['phone']);
  }
}
