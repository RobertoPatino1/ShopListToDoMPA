import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Descripción:  Smart-Shopper es una aplicación que facilita la planificación y gestión de compras de supermercado, permitiendo a los usuarios crear listas de compras, agregar productos, comparar precios, y colaborar con otros miembros de la familia o amigos para organizar las compras de manera eficiente. La aplicación contará con interfaces para dispositivos móviles y dispositivos web o de escritorio, brindando comodidad y accesibilidad a los usuarios en cualquier momento y lugar.'
}
