import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
    menuEvent :string="";
  ngOnInit(): void {
  }

  displayMenu(){

    if(this.menuEvent !="active"){
      this.menuEvent ="active"
    }
    else{
      this.menuEvent="";
    }
   ;
  }
 /* <script type="text/javascript">
   alert("OK?");
  $(".menu-toggle-btn").click(function(){

    $(this).toggleClass('fa-times');
    $(".navigation-menu").toggleClass('active');
  });
</script>*/
}
