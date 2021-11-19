import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from 'src/app/Service/servico.service';
import { Pessoa } from '../entidade/Pessoa';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {
  
  pessoa: Pessoa = new Pessoa();
  constructor(private service: ServicoService, private router: Router) { }

  ngOnInit(): void {
  
    this.buscaPessoa();
    }

    buscaPessoa(){
      let idLocalStorage = localStorage.getItem("id");
      this.service.getPessoaById( idLocalStorage )
      .subscribe(data => {
        this.pessoa = data;
      })
    }

    updatePessoa(){
      this.service.updatePessoa(this.pessoa)
      .subscribe(data => {
        alert('Alterado com sucesso');
        this.router.navigate(['listar']);
      })
    }

}
