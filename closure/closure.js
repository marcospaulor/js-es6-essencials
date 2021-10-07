function init() {
    const exemplo = 'VARIAVEL HERE';

    return function (){
        console.log(`Primeiro retorno da varivael ${exemplo}`);

        return function (){
            console.log(`Segundo retorno da varivael ${exemplo}`);

            return function (){
                console.log(`Terceiro retorno da varivael ${exemplo}`);
            }
        }
    }
}

const intiFn1 = init();
const intiFn2 = intiFn1();
const intiFn3 = intiFn2();

intiFn3();

console.log("<> Outra forma de chamada <>")
init()()()(); // chamada todos os retornos de função

console.log("<> Outra forma de chamada <>")
init(); // somente chama a função mas não executa os retornos