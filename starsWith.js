const texto1 = "Olá, Leticia!";
console.log(texto1.startsWith("Olá")); // Retorna true
console.log(texto1.startsWith("Leticia")); // Retorna false



const texto = "Olá, Leticia!, tudo bem?";
console.log(texto.startsWith("Olá")); // Retorna true
console.log(texto.startsWith("Leticia")); // Retorna false
console.log(texto.startsWith("tudo"));//Retorna flase
console.log(texto.startsWith("bem?")); //Retorna false
