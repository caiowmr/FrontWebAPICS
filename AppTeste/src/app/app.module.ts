import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';

import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { SetorComponent } from './components/setor/setor.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { VendaComponent } from './components/venda/venda.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ClienteComponent } from './components/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    ProdutoComponent,
    SetorComponent,
    EstoqueComponent,
    VendaComponent,
    CarrinhoComponent,
    CategoriaComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, FuncionarioComponent, ProdutoComponent, SetorComponent, 
    EstoqueComponent, VendaComponent, CarrinhoComponent, CategoriaComponent, ClienteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }