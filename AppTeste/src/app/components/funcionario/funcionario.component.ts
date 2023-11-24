import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Funcionario } from 'src/app/Funcionario';
import { FuncionarioService } from 'src/app/funcionario.service'
import { Setor } from 'src/app/Setor';
import { SetorService } from 'src/app/setor.service';


 

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})

export class FuncionarioComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  setor: Setor[] = [];

  constructor(private setorService: SetorService, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Formulário';
    this.setorService.listar().subscribe(setor => {
      this.setor = setor;
      if (this.setor && this.setor.length > 0){
        this.formulario.get('IdSetor')?.setValue(this.setor[0].idSetor);
      }
    });
    this.formulario = new FormGroup({
      IdSetor: new FormControl(null),
      NomeSetor: new FormControl(null),

    })
  }

  enviarFormulario() : void {
    const funcionario: Funcionario = this.formulario.value;
    const observer: Observer<Funcionario> = {
      next(_result): void {
        alert('Funcionario salvo!');
      },
      error(_error): void{
        alert('Erro ao salvar!');
      },
      complete(): void{
      },
    }
    if (funcionario.idFuncionario && !isNaN(Number(funcionario.idFuncionario))){
      this.funcionarioService.atualizar(funcionario).subscribe(observer);
    } else {
      this.funcionarioService.cadastrar(funcionario).subscribe(observer)
    }
  }

}
export { FuncionarioService };

