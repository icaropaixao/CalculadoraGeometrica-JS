
// variaveis

// menu
function menu(){
    prompt("Olá!\n" + 
        "Escolha uma das operações que deseja realizar\n")
        const opcao = ("1. Calcular área do triângulo\n" + 
        "2. Calcular área do retângulo\n" +
        "3. Calcular área do quadrado\n" +
        "4. Calcular área do trapézio\n" +
        "5. Calcular área do círculo\n" +
        "6. Sair")
        
        switch(opcao){

            // triângulo
            case '1':
                function calcTri(){
                    let base = parseFloat(
                        prompt("digite a base do seu triangulo")
                    )
                    let altura = parseFloat(
                        prompt("digite a altura do seu triangulo")
                    )
                    let areaTri = (base * altura) / 2
                    return areaTri
                }
                calcTri();
                break;
    
            // retângulo
            case '2':
                function calcRet(){
                    let base = parseFloat(
                        prompt("digite a base do seu Retângulo")
                    )
                    let altura = parseFloat(
                        prompt("digite a altura do seu Retângulo")
                    )
                    let areaRet = (base * altura)
                    return areaRet
                }
                calcRet();
                break;
            
            // quadrado    
            case '3':
                function calcQuad(){
                    let lado = parseFloat(
                        prompt("Digite o valor do lado do seu quadrado")
                    )
                    areaQuad = (lado * lado)
                    return areaQuad
                }
                calcQuad()
                break; 
           
            // trapézio   
            case '4':
                function calcTrap(){
                    let baseMaior = parseFloat(
                        prompt("digite a base maior do seu trapézio")
                    )
                    let baseMenor = parseFloat(
                        prompt("digite a base menor do seu trapézio")
                    )
                    let altura = parseFloat(
                        prompt("digite a altura do seu trapézio")
                    )
                    let areaTrap = (baseMaior + baseMenor) * altura / 2
                    return areaTrap
                }
                calcTrap()
                break;
            
            // círculo
            case '5':
                function calcCircu(){
                    let raio = parseFloat(
                        prompt("digite o raio do seu circulo")
                    )
                    let areaCirc = 3.14 * (raio * raio)
                    return areaCirc
                }
                calcCircu()
                break;
            case '6':
                alert("Encerrando programa....")
                break;
            default:
                alert("Opção inválida.");
        }
}

// processamento


function main(){
    while(opcao !== 6){
        menu();
    }
}

main();