import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { GetUsersService } from 'src/app/providers/get-users.service';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Heinz',
    children: [{name: 'Salsa de tomate'}, {name: 'Jugo'}, {name: 'Sal de mesa'}],
  },
  {
    name: 'Nestlé',
    children: [
      {
        name: 'Para niños',
        children: [{name: 'Leche Cerelac'}, {name: 'Leche Nido'}],
      },
      {
        name: 'Alto en Azucar',
        children: [{name: 'Chocolate Galack'}, {name: 'Galletas Amor'}],
      },          
    ],
  },
  {
    name: 'Lyson',
    children: [
      {
        name: 'Productos para el baño',
        children: [{name: 'Cloro'}, {name: 'Detergente'}],
      },         
    ],
  },
  {
    name: 'Oriental',
    children: [
      {
        name: 'Pasta',
        children: [{name: 'Noodles soup'}, {name: 'Agne'}, {name: 'Spagetti'},{name: 'Tornillo'}],
      },         
    ],
  },

];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public data:Usuario[] = [];
  displayedColumns: string[] = ['idUsuario','nombreUsuario','email','password'];
  displayedColumnsSP: string[] = ['producto', 'supermercadoA', 'supermercadoB', 'supermercadoC'];
  dataSourceSP: any[] = [
    { producto: 'Leche', supermercadoA: '$1.50', supermercadoB: '$1.45', supermercadoC: '$1.55' },
    { producto: 'Huevos', supermercadoA: '$2.00', supermercadoB: '$1.90', supermercadoC: '$2.10' },
    { producto: 'Arroz', supermercadoA: '$0.80', supermercadoB: '$0.75', supermercadoC: '$0.85' },
    { producto: 'Pan', supermercadoA: '$1.20', supermercadoB: '$1.15', supermercadoC: '$1.25' },
    { producto: 'Pollo', supermercadoA: '$3.50', supermercadoB: '$3.40', supermercadoC: '$3.60' },
    { producto: 'Aceite de cocina', supermercadoA: '$2.50', supermercadoB: '$2.45', supermercadoC: '$2.55' },
    { producto: 'Azúcar', supermercadoA: '$0.90', supermercadoB: '$0.85', supermercadoC: '$0.95' },
    // Agrega más productos y sus precios en diferentes supermercados aquí
    // Agrega más datos para otros productos
  ];
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  
  constructor(private dataProvider:GetUsersService){

    this.dataSource.data = TREE_DATA; // Sustituye 'yourTreeData' con tus datos reales del árbol.

  }

  
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Usuario[]); 
    })
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
