import { Component } from '@angular/core';
import { Lista } from 'src/app/interfaces/lista';
import { Usuario } from 'src/app/interfaces/usuario';
import { GetUsersService } from 'src/app/providers/get-users.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  public dataUsuario:Usuario[] = [];
  public selectedUserId: number = -1;
  //Listas data
  public dataLista:Lista[] = []
  displayedColumns: string[] = ['idLista','nombreLista'];

  constructor(private dataProvider:GetUsersService){}
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.dataUsuario = (response as Usuario[]); 
    })
  }

  onUserSelected() {
    this.dataProvider.getResponseListaByUsuarioID(this.selectedUserId).subscribe((response)=>{
      this.dataLista = (response as Lista[])
    })
  }
}
