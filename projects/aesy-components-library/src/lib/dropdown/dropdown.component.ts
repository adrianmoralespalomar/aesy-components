import { ArrowDownComponent } from '../../../assets/icons/arrow-down';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aesy-dropdown',
  standalone: true,
  imports: [ArrowDownComponent],
  template: `
    <button [class]="className" class="aesy-dropdown-button" (click)="buttonClicked = !buttonClicked">
      <span>{{label}}</span>
      @if(showArrow){ 
        <aesy-arrow-down [classNameArrow]="classNameArrow" [buttonClicked]="buttonClicked"/>
      }
    </button>

    <div class="aesy-dropdown-container" [class]="buttonClicked === undefined ? '' : buttonClicked ? 'show-container' : 'hide-container'" >
      @for (item of list; track $index) {
        <button (click)="optionSelected.emit($index)">{{item}}</button>
      }
    </div>
  `,
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() className: string = '';
  @Input() classNameArrow: string = '';
  @Input() label: string = '';
  @Input() list: any;
  @Input() showArrow: boolean = true;
  @Output() optionSelected: EventEmitter<number> = new EventEmitter();
  public buttonClicked: boolean | undefined = undefined;
}
