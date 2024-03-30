
// Calculadora geometrica em JavaScrip com functions
 

// funções para os calculos
function calcTringulo(){
    const base = parseFloat(
        prompt("digite a base do seu triangulo")
    )
    const altura = parseFloat(
        prompt("digite a altura do seu triangulo")
    )
    return (base * altura) / 2

}

function calcRetangulo(){
    const base = parseFloat(
        prompt("digite a base do seu Retângulo")
    )
    const altura = parseFloat(
        prompt("digite a altura do seu Retângulo")
    )
    return base * altura
}

function calcQuadrado(){
    const lado = parseFloat(
        prompt("Digite o valor do lado do seu quadrado")
    )
    return lado * lado
}

function calcTrapezio(){
    const baseMaior = parseFloat(prompt("digite a base maior do seu trapézio"))
    const baseMenor = parseFloat(prompt("digite a base menor do seu trapézio"))
    const altura = parseFloat(prompt("digite a altura do seu trapézio"))

    return (baseMaior + baseMenor) * altura / 2
}

function calcCirculo(){
    const raio = parseFloat(
        prompt("digite o raio do seu circulo"))

    return (3.14 * raio * raio)
    }

// function para menu
function menu(){
    // deve colocar um return no prompt 
    return prompt("Olá!\n" + 
        "Escolha uma das operações que deseja realizar\n" +
        "1. Calcular área do triângulo\n" + 
        "2. Calcular área do retângulo\n" +
        "3. Calcular área do quadrado\n" +
        "4. Calcular área do trapézio\n" +
        "5. Calcular área do círculo\n" +
        "6. Sair")
}

// saida
function executar() {
    let opcao = ""

    do {
      opcao = menu()
      let resultado
  
      switch (opcao) {
        case "1":
          resultado = calcTringulo()
          break
        case "2":
          resultado = calcRetangulo()
          break
        case "3":
          resultado = calcQuadrado()
          break
        case "4":
          resultado = calcTrapezio()
          break
        case "5":
          resultado = calcCirculo()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }

      // mostrando resultado pro usuario
      if (resultado) {
        alert("Resultado: " + resultado)
      }
  
    } while (opcao !== "6");
  }

// executando o programa
executar()