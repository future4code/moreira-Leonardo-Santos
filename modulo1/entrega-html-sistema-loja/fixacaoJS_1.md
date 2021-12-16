```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000;
  const taxaFixaComicao = 100 * qtdeCarrosVendidos;
  const valorDeCadaCarro = valorTotalVendas / qtdeCarrosVendidos;
  const percentualSobreCadaVenda = ((valorDeCadaCarro * 5) / 100) * qtdeCarrosVendidos;
  const totalComicao = taxaFixaComicao + percentualSobreCadaVenda;
  const salarioTotal = salarioFixo + totalComicao;
  
  if (qtdeCarrosVendidos === 0) {
    return salarioFixo;
  }
  
  return salarioTotal;
}
```