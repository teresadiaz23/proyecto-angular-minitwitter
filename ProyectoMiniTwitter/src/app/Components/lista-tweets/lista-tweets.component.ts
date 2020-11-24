import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/Services/tweet.service';
import { TweetResponse } from "../../Interfaces/tweet-response.interface";

@Component({
  selector: 'app-lista-tweets',
  templateUrl: './lista-tweets.component.html',
  styleUrls: ['./lista-tweets.component.scss']
})
export class ListaTweetsComponent implements OnInit {

  tweets: TweetResponse[];

  constructor(private tweetService: TweetService) {
    this.tweetService.tweets().subscribe(respuesta => {
      this.tweets = respuesta as TweetResponse[];
    });
    
   }

  


  ngOnInit(): void {
  }


  

}
