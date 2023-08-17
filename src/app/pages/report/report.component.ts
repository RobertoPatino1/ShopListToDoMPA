import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { GetUsersService } from 'src/app/providers/get-users.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  public data:Usuario[] = [];
  constructor(private dataProvider:GetUsersService){}
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Usuario[]); 
    })
  }
}
