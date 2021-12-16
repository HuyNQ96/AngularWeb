import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data-json',
  templateUrl: './post-data-json.component.html',
  styleUrls: ['./post-data-json.component.scss']
})
export class PostDataJsonComponent implements OnInit {

  constructor(private httpServerService: HttpServerService) { }

  ngOnInit(): void {
    const payload = { "body": "Đây là comment mới", "postId": 1 };
    this.httpServerService.postComments(payload).subscribe(data => {
      console.log('postComments: ', data);
    });
  }
}
