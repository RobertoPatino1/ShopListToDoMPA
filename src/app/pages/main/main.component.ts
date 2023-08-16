import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { GetUsersService } from 'src/app/providers/get-users.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public data:Usuario[] = [];
  displayedColumns: string[] = ['<ATRIBUTO-1>','<ATRIBUTO-N>'];
  constructor(private dataProvider:GetUsersService){}
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Usuario[]); 
    })
  }
}
