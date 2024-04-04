

// Nome: Leonardo Garcia Andrade 
// Curso: ADS 3º Semestre

function aleatorio(vetorAleatorio) {
    
    for(let i = 0; i < 1000; i++){

        vetorAleatorio[i] = Math.floor(Math.random() * 1000)
     }
}

function ordenado(vetorOrdenado) {

    for(let i = 0; i < 1000; i++){

       vetorOrdenado.push(i)
    }
}

function invertido(vetorInvertido) {

    for(let i = 1000; i > 0; i--){

        vetorInvertido.push(i)
     }
}




function bubble(vet){

    let vetor = [...vet]
    
    let tamanho = vetor.length 

    for (let i = 0; i < tamanho - 1; i++) {
        let aux

        for (let j = 0; j < tamanho - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {

                aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }       
    } 
}

function selecaoDireta(vet){

    let vetor = [...vet]


    let indice
    let aux
    let menor
    let tamanho = vetor.length

    for(let i = 0; i < tamanho - 1; i++) {
        menor = vetor[i]  
        indice = i
        aux
        for(let j = i; j < tamanho; j++){ 
  
          if(vetor[j] < menor){ 
            menor = vetor[j]
            indice = j
  
          }
        }
            aux = vetor[i]
            vetor[i] = menor
            vetor[indice] = aux    
      }
}

function insercaoDireta(vet){

    let vetor = [... vet] 
    
    let aux
    let j
    let tamanho = vetor.length

    for(let i = 1; i < tamanho; i++) {
        j = i - 1
        aux = vetor[i]   
        while(j >= 0 && vetor[j] > aux){
            vetor[j + 1] = vetor[j]
            j--
        }
        vetor[j + 1] = aux
    }
} 


function contarTempo(ordenador, vet){


    const inicio = performance.now()
    ordenador(vet)
    const fim = performance.now()

    console.log(`A função demorou cerca de ${fim - inicio} ms.`)
}


function main(){

    let vetorAleatorio = []
    let vetorOrdenado = []
    let vetorInvertido = []

    let opcao

    aleatorio(vetorAleatorio)
    ordenado(vetorOrdenado)
    invertido(vetorInvertido)

    do{
        opcao = prompt('Digite 1- Ver o tempo, 2- Sair')
        switch(opcao) {

            case "1": 
                console.log('Função Bubble Sort')
                console.log('Vetor Aleatório')
                contarTempo(bubble, vetorAleatorio);

                console.log('Função Bubble Sort')
                console.log('Vetor Ordenado')
                contarTempo(bubble, vetorOrdenado);

                console.log('Função Bubble Sort')
                console.log('Vetor Invertido')
                contarTempo(bubble, vetorInvertido);

                console.log('Função Seleção Direta')
                console.log('Vetor Aleatório')
                contarTempo(selecaoDireta, vetorAleatorio);

                console.log('Função Seleção Direta')
                console.log('Vetor Ordenado')
                contarTempo(selecaoDireta, vetorOrdenado);

                console.log('Função Seleção Direta')
                console.log('Vetor Invertido')
                contarTempo(selecaoDireta, vetorInvertido);

                console.log('Função Inserção Direta')
                console.log('Vetor Aleatório')
                contarTempo(insercaoDireta, vetorAleatorio);

                console.log('Função Inserção Direta')
                console.log('Vetor Ordenado')
                contarTempo(insercaoDireta, vetorOrdenado);

                console.log('Função Inserção Direta')
                console.log('Vetor Invertido')
                contarTempo(insercaoDireta, vetorInvertido);
                break
            case "2":
                break
            default:
                alert('Opção inválida!')      
                break    
        }

    } while(opcao != 2)  
} 