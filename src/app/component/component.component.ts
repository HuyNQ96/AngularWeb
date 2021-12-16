import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  public loginName = "admin";
  public myColor = "blue";
  public counter = 0;
  public counterBP = 0;
  constructor(private common: CommonService) {

  }

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.counterBP = this.common.binhPhuong(this.counter);
    this.common.setCounter(this.counter++);
  }

}
