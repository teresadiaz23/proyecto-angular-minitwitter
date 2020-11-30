import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupDto } from "../../DTO/signup.dto";
import { RegistroService } from '../../Services/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario: SignupDto;
  submitted = false;
  

  constructor(private registroService: RegistroService) {
    
    this.usuario = new SignupDto('','','','UDEMYANDROID');
    
  }

  
  ngOnInit():void {

  }

  

  registrarse(){

    
    this.registroService.signup(this.usuario).subscribe(respuesta => {
      
      this.submitted = true;
      
    });

    if(this.submitted){
      alert("Se ha registrado correctamente, puede iniciar sesión");
    }
    else{
      alert("Error, no se ha registrado correctamente, vuelva a intentarlo");
    }

    
  }
  
}
