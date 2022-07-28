import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobOfferCompanyDomains } from 'src/app/models/JobOfferCompanyDomains';
import { JobOfferDTO } from 'src/app/models/JobOfferDTO';

@Component({
  selector: 'app-box-offer',
  templateUrl: './box-offer.component.html',
  styleUrls: ['./box-offer.component.scss']
})
export class BoxOfferComponent implements OnInit,OnDestroy {
  @Input()
  public offer!: JobOfferDTO; 
 constructor( private activateRoute: ActivatedRoute) {
  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    if(this.offer == null){
      console.log("Doit etre détruit")
      this.ngOnDestroy();
    }
  }
  

}
