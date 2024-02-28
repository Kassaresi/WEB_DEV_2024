import { Component, OnInit } from '@angular/core';
import { SenderService } from '../services/sender.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = [{id: 0, title:'All'}, {id: 1, title:'Apple'}, {id: 2, title:'Samsung'}, {id: 3, title:'Xiaomi'},{id: 4, title:'Huawei'}];
  constructor( private service: SenderService) { }

  ngOnInit(): void {
  }

  selectCategory(id: any){
    this.service.selectCateg(id);    
  }
}
