import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/Pagination';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent implements OnInit {
  @Input() pagination: Pagination = {
    total: 0,
    offset: 0,
    itemsNumber: 6,
  };

  constructor() {}

  ngOnInit(): void {}
}
