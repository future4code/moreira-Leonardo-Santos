type Client = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clients: Client[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const chargeAndGetSpenders = (users: Client[]) => { 
    const charged = users.map((user) => {
        let total: number = 0;

        user.debitos.forEach((value) => {
            total += value;
        });

        const newTotalBudget: number = user.saldoTotal - total;

        if (newTotalBudget < 0) {
            return {...user, saldoTotal: newTotalBudget, debitos: []};
        }
    }).filter((user) => {
        return user && user;
    });

    return charged;
};
console.log(chargeAndGetSpenders(clients));