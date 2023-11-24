import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { SetorComponent } from './components/setor/setor.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { VendaComponent } from './components/venda/venda.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  {path: 'funcionario', component:FuncionarioComponent},
  {path: 'produto', component:ProdutoComponent},
  {path: 'setor', component:SetorComponent},
  {path: 'estoque', component:EstoqueComponent},
  {path: 'venda', component:VendaComponent},
  {path: 'carrinho', component:CarrinhoComponent},
  {path: 'categoria', component:CategoriaComponent},
  {path: 'cliente', component:ClienteComponent},
  {path: 'carrinho', component:CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
