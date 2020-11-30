import { Component, Input, OnInit } from '@angular/core';
import { LoginDto } from '../../DTO/login.dto';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: LoginDto;
  submitted = false;

  constructor(private authService: AuthService) {
   this.usuario = new LoginDto('', '');
   
    
  }



  ngOnInit(): void {
    
  }

  doLogin() {
    this.authService.login(this.usuario).subscribe(respuesta => {
      
      localStorage.setItem('token', respuesta.token);
      this.submitted = true;
      alert("Ha iniciado sesión correctamente");
      
    }, error => {
      this.submitted = false;
      alert("Error, no se ha podido iniciar sesión");
      
    });

    
  }

  
  


}
