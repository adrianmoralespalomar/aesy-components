import { Component, Input } from "@angular/core";

@Component({
  selector: 'aesy-arrow-down',
  standalone: true,
  template: `
  <div [class]="classNameArrow" [class]="buttonClicked? 'rotate-arrow' : '' " class="aesy-svg-container">
    <svg aria-label="Flecha Abajo del componente de Aesy" width="100%" height="100%" viewBox="0 0 330 330" [style.fill]="colorArrow">
      <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"/>
    </svg>
  </div>
  `,
  styles: [`
    .aesy-svg-container{
      display:flex;
      height:0.75rem;
      position:relative;
      transition:transform 0.3s ease;
      width:0.75rem;
      z-index: 1;
      &.rotate-arrow{
        transform: rotate(180deg);
      }
    }
  `]
})
export class ArrowDownComponent {
  @Input() buttonClicked: boolean | undefined = undefined;
  @Input() classNameArrow = '';
  @Input() colorArrow = 'white';
 }