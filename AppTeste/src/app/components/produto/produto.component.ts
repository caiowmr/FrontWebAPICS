import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { ProdutoService }  from 'src/app/produto.service';
import { Produto } from 'src/app/Produto'
import { Categoria } from 'src/app/Categoria'
import { CategoriaService } from 'src/app/categoria.service'


 

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  categoria: Categoria[] = [];

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    
    this.tituloFormulario = 'Novo Formulário';
    this.categoriaService.listar().subscribe(categoria => {
      this.categoria = categoria;
      if (this.categoria && this.categoria.length > 0){
        this.formulario.get('IdCategoria')?.setValue(this.categoria[0].IdCategoria);
      }
    });
    this.formulario = new FormGroup({
      id: new FormControl(null),
      produtoId: new FormControl(null),
    })
  }

  enviarFormulario() : void {
    const produto: Produto = this.formulario.value;
    const observer: Observer<Produto> = {
      next(_result): void {
        alert('Produto salvo!');
      },
      error(_error): void{
        alert('Erro ao salvar!');
      },
      complete(): void{
      },
    }
    if (produto.idProduto && !isNaN(Number(produto.idProduto))){
      this.produtoService.atualizar(produto).subscribe(observer);
    } else {
      this.produtoService.cadastrar(produto).subscribe(observer)
    }
  }

}
export { ProdutoService };

