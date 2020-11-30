import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LikeDto } from 'src/app/DTO/like.dto';
import { TweetService } from 'src/app/Services/tweet.service';
import { TweetResponse } from "../../Interfaces/tweet-response.interface";

@Component({
  selector: 'app-lista-tweets',
  templateUrl: './lista-tweets.component.html',
  styleUrls: ['./lista-tweets.component.scss']
})
export class ListaTweetsComponent implements OnInit {

  tweets: TweetResponse[];
  likes: number;
  like = false;
  //id: number;

  constructor(private tweetService: TweetService, private router: Router) {
    this.tweetService.tweets().subscribe(respuesta => {
      this.tweets = respuesta as TweetResponse[];
    });
    
   }

  


  ngOnInit(): void {
    //this.likes = this.tweets.likes.length();
  }

  darLike(id: LikeDto){
    this.tweetService.like(id).subscribe(respuesta => {
      alert("Like correcto");
      this.like = true;
      window.location.reload();
    });
    //this.router.navigate(["/tweets/all"]);
    
  }

  // salir(){
  //   localStorage.setItem('token', null);
  // }

  // doLogin() {
  //   this.authService.login(this.usuario).subscribe(respuesta => {
  //     //alert('API TOKEN ' + respuesta.token);
  //     localStorage.setItem('token', respuesta.token);
  //     this.submitted = true;
      
      
  //   });

  //   if(this.submitted){
  //     alert("Ha iniciado sesión correctamente");
  //   }
  //   else{
  //     alert("Error, no se ha podido iniciar sesión correctamente");
  //   }
    
  // }


  

}
