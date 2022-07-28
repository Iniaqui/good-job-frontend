import { Component, Input, OnInit } from '@angular/core';
import { JobOfferDTO } from 'src/app/models/JobOfferDTO';

@Component({
  selector: 'app-details-box-offer',
  templateUrl: './details-box-offer.component.html',
  styleUrls: ['./details-box-offer.component.scss']
})
export class DetailsBoxOfferComponent implements OnInit {
  @Input()
 public  jobOfferDTO !: JobOfferDTO;
  constructor() { }

  ngOnInit(): void {
   
  }

}
