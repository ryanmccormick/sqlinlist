import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Make SQL IN List';
  inlistInput: string = '';
  inlistData: any[] = [];
  
  inListType: number = 1;

  makeInList(): void {
    alert('You did it!');
  }

  resetInList(): void {
    this.inlistInput = '';
    //alert('You just reset it!');
  }

  setActive(selection): void {
    this.inListType = selection;
  }

  isActive(selection): boolean {
    return this.inListType === selection;
  }


  constructor() { }

  ngOnInit() {
  }

}
