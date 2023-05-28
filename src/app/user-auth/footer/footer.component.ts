import { Component , OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  storingUsersData:any
  constructor(private userdata:UserdataService)
  {
    console.log(userdata.users());
    this.storingUsersData = userdata.users();
  }

  ngOnInit(): void {
    
  }
}
