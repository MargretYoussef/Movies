import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

 
  id: string='';
  movieDetails: any = {};
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService
    ,private _HttpClient:HttpClient , private _Router:Router) 
  { 
   this.id = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

      this._MoviesService.getMoviesDetails(this.id).subscribe((response)=>{
      this.movieDetails = response;
      if(this.movieDetails == (null || undefined))
      {
        console.log("hi");
        this._Router.navigate(['/not-founded']);
      }

    })
  }

}
