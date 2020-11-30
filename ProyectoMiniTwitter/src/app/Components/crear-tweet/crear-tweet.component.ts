import { removeSummaryDuplicates } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CreateDto } from 'src/app/DTO/create.dto';
import { CreateService } from 'src/app/Services/create.service';

@Component({
  selector: 'app-crear-tweet',
  templateUrl: './crear-tweet.component.html',
  styleUrls: ['./crear-tweet.component.scss']
})
export class CrearTweetComponent implements OnInit {

  tweet: CreateDto;
  submitted = false;

  constructor(private createService: CreateService) { 
    this.tweet = new CreateDto('');
  }

  ngOnInit(): void {
  }

  crearTweet(){
    this.createService.create(this.tweet).subscribe(respuesta => {
      this.submitted = true;
    })
  }


}
