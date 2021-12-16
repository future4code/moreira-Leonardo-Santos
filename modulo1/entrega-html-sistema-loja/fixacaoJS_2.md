```
function calculaPrecoTotal(quantidade) {
  let precoUnd = 1.30;
  let valorTotal = 0;
  
  if (quantidade >= 12) {
    precoUnd = 1.00;
  }
  
  valorTotal = quantidade * precoUnd;
  
  return valorTotal;
}
```