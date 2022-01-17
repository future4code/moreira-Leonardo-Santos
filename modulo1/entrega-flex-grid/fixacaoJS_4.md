```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let result = '';
  let counter = 0;
  
  if (!arrayDeNumeros.includes(numeroEscolhido)) {
    return 'Número não encontrado';
  }
  
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      counter++;
    }
  }
  
  result = `O número ${numeroEscolhido} aparece ${counter}x`;
  
  return result;
}
```