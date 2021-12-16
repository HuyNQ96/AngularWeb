import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Huy Nguyễn";
  public age = 25;
  public fruit = ['Nho', 'Táo', 'Cam'];
  public fruit2 = [{ ten: 'Táo', gia: 41000, km: true }, { ten: 'Nho', gia: 21000, km: true }, { ten: 'Cam', gia: 33000, km: false }];
  public cities = [{ city: 'Chọn thành phồ', district: [] },
  { city: 'Quảng Ninh', district: ['Hạ Long', 'Uông Bí', 'Cẩm Phả', 'Móng Cái'] },
  { city: 'Hà Nội', district: ['Thanh Xuân', 'Đống Đa', 'Hà Đông', 'Chương Mỹ'] },
  { city: 'Hải Phòng', district: ['Cát Bi', 'Đồ Sơn', 'Hải Phòng'] }];
  
  public counter = 0;
  public counterBP = 0;
  public districts: string[] = [];
  constructor(private common: CommonService) { }

  ngOnInit(): void {
    console.log('cities', this.cities);
    this.counter = this.common.getCounter();
    this.counterBP = this.common.binhPhuong(this.counter);
    this.common.setCounter(this.counter++);
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

  public OnChangeCity(event: any) {
    const city = event.target.value;
    if (!city)
      return;
    // cách 1  
    // console.log('city', city);
    // const search = this.cities.filter(x => x.city === city);
    // console.log('districts', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // cách 2
    this.districts = this.cities.find(x=>x.city === city)?.district || [];
  }
}
