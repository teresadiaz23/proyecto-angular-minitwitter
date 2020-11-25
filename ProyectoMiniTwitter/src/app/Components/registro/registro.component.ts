import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SignupDto } from "../../DTO/signup.dto";
import { RegistroService } from '../../Services/registro.service';
//import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario: SignupDto;
  //submitted = false;
  username: string;
  email: string;
  password: string;
  code: string;
  

  constructor(private registroService: RegistroService) {
    this.usuario = new SignupDto('','','','');
    

  }

  // constructor(private registroService: RegistroService, private formBuilder: FormBuilder) {

  //  }

  ngOnInit():void {

  }

  // ngOnInit(): void {

  //   this.usuario = this.formBuilder.group({
  //     username: [''],
  //     email: [''],
  //     password: [''],
  //     code: ['UDEMYCODE']
  //   });

    
  // }

  

  registrarse(){
    const user = { username: this.username, email: this.email, password: this.password, code: this.code};
    console.log(user);
    
    // this.registroService.signup(this.usuario).subscribe(respuesta => {
    //   alert('API TOKEN ' + respuesta.token);
    //   localStorage.setItem('token', respuesta.token);
    // });

    // register() {
    //   const user = { email: this.email, password: this.password };
    //   this.userService.register(user).subscribe(data => {
    //     console.log(data);
    //   });
    // }
    // console.log(this.usuario.email);
    // console.log(this.usuario.username);
    // for (const key in this.usuario) {
    //   if (Object.prototype.hasOwnProperty.call(this.usuario, key)) {;
    //     console.log(key, this.usuario[key]);
    //   }
    // }
    
  }
  // doSignup(){
  //   this.submitted = true;
  //   for (const key in this.usuario) {
  //     if (Object.prototype.hasOwnProperty.call(this.usuario, key)) {
  //       console.log(key, this.usuario[key])
        
  //     }
  //   }
  // }
  
}
