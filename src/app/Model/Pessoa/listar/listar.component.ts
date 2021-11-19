import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/Service/servico.service';
import { Pessoa } from '../entidade/Pessoa';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit  {

listaPessoas: Pessoa[] = [];
constructor(private service: ServicoService){}

ngOnInit(){
  this.service.getPessoa()
  .subscribe(data => {
    this.listaPessoas = data;
  })
}

editar(id: any): void {
  localStorage.setItem("id",id.toString());
}
 
}
