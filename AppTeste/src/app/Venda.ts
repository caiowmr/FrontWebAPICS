import { Carrinho } from './Carrinho'
import { Cliente } from './Cliente'

export class Venda {
    idVenda: number = 0;
    clienteId: number = 0;
    cliente: Cliente | undefined;
    carrinhoId: number = 0;
    carrinho: Carrinho | undefined; 
    dataVenda: Date | undefined;
    valorTotal: number = 0;
  }