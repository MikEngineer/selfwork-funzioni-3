// Scrivi una funzione che dato un numero intero positivo (massimo 9999) conti da quante cifre è formato.

// Esempio:
// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande

function contaCifre(numero){
    if (numero >= 0 && numero < 10) {
        console.log("1 cifra");
    } else if (numero >= 10 && numero < 100){
        console.log("2 cifre");                
    }else if (numero >= 100 && numero < 1000){
        console.log("3 cifre");        
    }else if (numero >= 1000 && numero < 10000){
        console.log("4 cifre");        
    }else if (numero < 0) {
        console.log("Il numero deve essere positivo");
    }else {
        console.log("Numero troppo grande");
    }
}

let numero = (prompt("Inserisci un numero intero positivo per contarne le cifre:"));
contaCifre(numero);