import { Component, OnInit } from '@angular/core';
import { SignupDto } from "../../DTO/signup.dto";
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario: SignupDto;

  constructor(private authService: AuthService) {
    this.usuario = new SignupDto('','','','UDEMYCODE');
    //this.usuario = new LoginDto('', '');

   }

  ngOnInit(): void {
  }

  doSignup(){
    
  }

}
