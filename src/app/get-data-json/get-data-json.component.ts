import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data-json',
  templateUrl: './get-data-json.component.html',
  styleUrls: ['./get-data-json.component.scss']
})
export class GetDataJsonComponent implements OnInit {

  constructor(private httpServerService: HttpServerService) { }

  ngOnInit(): void {
    this.httpServerService.getComments().subscribe(data=>{
      console.log('getComments', data);
    });

    
    this.httpServerService.getUsers(5).subscribe(data=>{
      console.log('getUsers', data);
    });
  }

}
