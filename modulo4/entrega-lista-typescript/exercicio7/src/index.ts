type Product = {
    nome: string,
    quantidade: number | string,
    valorUnitario: number | string
};

const products = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
];

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
};

const priceChanged: Product[] = products.map((product: Product) => {
   const newPrice: string = ajustaPreco(product.valorUnitario as number);
   return {...product, valorUnitario: newPrice}
}).sort((prev: any, curr: any): number => {
    return prev.quantidade - curr.quantidade
});

console.log(priceChanged);