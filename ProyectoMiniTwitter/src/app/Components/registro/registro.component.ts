//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupDto } from "../../DTO/signup.dto";
import { RegistroService } from '../../Services/registro.service';
//import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @ViewChild('formreg') formreg: NgForm;
  usuario: any;
  submitted = false;
  // username: string;
  // email: string;
  // password: string;
  // code: string;
  

  constructor(private registroService: RegistroService) {
    this.usuario = {
      username: '',
      email: '',
      password: '',
      code: ''
    };
    //this.usuario = new SignupDto('','','','');
    

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
    // const user = { username: this.username, email: this.email, password: this.password, code: this.code};
    // console.log(user);

    this.usuario.username = this.formreg.value.username;
    this.usuario.email = this.formreg.value.email;
    this.usuario.password = this.formreg.value.password;
    this.usuario.code = this.formreg.value.code;

    //console.log(this.usuario);
    
    this.registroService.signup(this.usuario).subscribe(respuesta => {
      //alert('API TOKEN ' + respuesta.token);
      
      this.submitted = true;
      //localStorage.setItem('token', respuesta.token);
    });

    if(this.submitted){
      alert("Se ha registrado correctamente, puede iniciar sesión");
    }
    else{
      alert("Error, no se ha registrado correctamente, vuelva a intentarlo");
    }

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
