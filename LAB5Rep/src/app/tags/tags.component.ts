import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/tags';
import { SenderService } from '../services/sender.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  providedIn: 'root'
})
export class TagsComponent implements OnInit {

  tags?:Tag[] = []
  constructor(private sneakersService: SenderService){}

  ngOnInit(): void {
    this.tags = this.sneakersService.getAllTags()
      
  }

}
