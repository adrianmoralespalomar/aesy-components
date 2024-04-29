import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from '../../projects/aesy-components-library/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropdownComponent],
  template: `
  <div>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [className]="'pepe'"></aesy-dropdown>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'basic-purple2'"></aesy-dropdown>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'basic-orange'"></aesy-dropdown>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'basic-green'"></aesy-dropdown>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'basic-red'"></aesy-dropdown>
  </div>
  <br>
  <div>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'corner-dark'"></aesy-dropdown>
  </div>
  <br>
  <div>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'slide-left red'"></aesy-dropdown>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'slide-right red'"></aesy-dropdown>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'slide-top red'"></aesy-dropdown>
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [styleButton]="'slide-bottom red'"></aesy-dropdown>
  </div>
  `,
  styles: [`
    div{
      display:flex;
      gap:0.5rem;
    }
  `]
})
export class AppComponent {
  title = 'aesy-components';
}
