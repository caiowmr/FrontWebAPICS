import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { CarrinhosService }  from 'src/app/carrinho.service';
import { Carrinho } from 'src/app/Carrinho';
import { Produto } from 'src/app/Produto'
import { ProdutoService } from 'src/app/produto.service';
 

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  produtos: Array<Produto> | undefined;

  constructor(private carrinhoService: CarrinhosService, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    
    this.tituloFormulario = 'Novo Formulário';
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
      if (this.produtos && this.produtos.length > 0){
        this.formulario.get('idProduto')?.setValue(this.produtos[0].idProduto);
      }
    });
    this.formulario = new FormGroup({
      IdProduto: new FormControl(null),
      NomeProduto: new FormControl(null),
      Preco: new FormControl(null),
      Quantidade: new FormControl(null),
      Categoria: new FormControl(null),

    })
  }

  enviarFormulario() : void {
    const carrinho: Carrinho = this.formulario.value;
    const observer: Observer<Carrinho> = {
      next(_result): void {
        alert('Carrinho salvo!');
      },
      error(_error): void{
        alert('Erro ao salvar!');
      },
      complete(): void{
      },
    }
    if (carrinho.idCarrinho && !isNaN(Number(carrinho.idCarrinho))){
      this.carrinhoService.atualizar(carrinho).subscribe(observer);
    } else {
      this.carrinhoService.cadastrar(carrinho).subscribe(observer)
    }
  }

}
