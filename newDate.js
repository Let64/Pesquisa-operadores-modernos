const agora = new Date();
console.log(agora);

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = hoje.getMonth () + 1;
const dia = hoje.getDate();

console.log(`${ano}, ${mes}, ${dia}`);