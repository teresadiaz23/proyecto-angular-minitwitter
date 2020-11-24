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
  submitted = false;

  constructor(private registroService: RegistroService) {
    this.usuario = new SignupDto('','','','UDEMYCODE');
    

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

  

  doSignup(){
    this.registroService.signup(this.usuario).subscribe(respuesta => {
      //alert('API TOKEN ' + respuesta.token);
      for (const key in this.usuario) {
        if (Object.prototype.hasOwnProperty.call(this.usuario, key)) {;
          console.log(key, this.usuario[key]);
        }
      }
      localStorage.setItem('token', respuesta.token);
    })
    
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
