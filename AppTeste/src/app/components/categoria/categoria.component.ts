import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { ProdutoService }  from 'src/app/produto.service';
import { Produto } from 'src/app/Produto'
import { Categoria } from 'src/app/Categoria'
import { CategoriaService } from 'src/app/categoria.service'


 

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  produto: Produto[] = [];

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    
    this.tituloFormulario = 'Novo Formulário';
    this.produtoService.listar().subscribe(produto => {
      this.produto = produto;
      if (this.produto && this.produto.length > 0){
        this.formulario.get('IdProduto')?.setValue(this.produto[0].idProduto);
      }
    });
    this.formulario = new FormGroup({
      id: new FormControl(null),
      produtoId: new FormControl(null),
    })
  }

  enviarFormulario() : void {
    const categoria: Categoria = this.formulario.value;
    const observer: Observer<Categoria> = {
      next(_result): void {
        alert('Categoria salva!');
      },
      error(_error): void{
        alert('Erro ao salvar!');
      },
      complete(): void{
      },
    }
    if (categoria.IdCategoria && !isNaN(Number(categoria.IdCategoria))){
      this.categoriaService.atualizar(categoria).subscribe(observer);
    } else {
      this.categoriaService.cadastrar(categoria).subscribe(observer)
    }
  }

}
export { CategoriaService };

