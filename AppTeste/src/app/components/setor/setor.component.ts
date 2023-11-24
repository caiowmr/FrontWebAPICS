import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { SetorService } from 'src/app/setor.service';
import { Setor } from 'src/app/Setor';
import { FuncionarioService } from 'src/app/funcionario.service';
import { Funcionario } from 'src/app/Funcionario';
 

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})

export class SetorComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  funcionario: Funcionario[] = [];

  constructor(private setorService: SetorService, 
    private funcionarioService : FuncionarioService) { }

  ngOnInit(): void {
    
    this.tituloFormulario = 'Novo Formulário';
    this.funcionarioService.listar().subscribe(funcionario => {
      this.funcionario = funcionario;
      if (this.funcionario && this.funcionario.length > 0){
        this.formulario.get('IdFuncionario')?.setValue(this.funcionario[0].idFuncionario);
      }
    });

    this.formulario = new FormGroup({
      IdFuncionario: new FormControl(null),
      NomeFuncionario: new FormControl(null),
      Setor: new FormControl(null),

    })
  }

  enviarFormulario() : void {
    const setor: Setor = this.formulario.value;
    const observer: Observer<Setor> = {
      next(_result): void {
        alert('Salvo!');
      },
      error(_error): void{
        alert('Erro ao salvar!');
      },
      complete(): void{
      },
    }
    if (setor.idSetor && !isNaN(Number(setor.idSetor))){
      this.setorService.atualizar(setor).subscribe(observer);
    } else {
      this.setorService.cadastrar(setor).subscribe(observer)
    }
  }

}
export { SetorService };

