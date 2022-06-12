import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from 'src/app/models/Pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pagination: Pagination = {
    total: 0,
    offset: 0,
    itemsNumber: 6,
  };

  @Output() pageChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onPageChange(event: any) {
    this.pageChange.emit(event.page);
  }
}
