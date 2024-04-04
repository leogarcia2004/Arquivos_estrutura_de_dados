
/***************************
 QUICKSORT
*/
function  quicksort(array, left, right){
    var i = left
    var j = right
    var aux
    var pivotidx = (left + right)/2
    var pivot = parseInt(array[pivotidx.toFixed()])
    // Partição
    while(i <= j){
        while(parseInt(array[i]) < pivot)
            i++
        while(parseInt(array[j]) > pivot)
            j--
        if(i <= j){
            aux = array[i]
            array[i] = array[j]
            array[j] = aux
            i++
            j--
        }
    }
    // Recursão
    if(left < j)
        quicksort(array, left, j)
    if(i < right)
        quicksort(array, i, right)
    return array
}


/***************************
 HEAPSORT
*/
function heapsort(vetor, tam){
    var i = parseInt(tam/2), pai, filho, t;
    for (;;){
        if (i > 0){
            i--;
            t = vetor[i];
        }
        else{
            tam--;
            if (tam == 0)
                return;
            t = vetor[tam];
            vetor[tam] = vetor[0];
        }
        pai = i;
        filho = i*2 + 1;
        while (filho < tam){
              if ((filho + 1 < tam)  &&  (vetor[filho + 1] > vetor[filho]))
                  filho++;
              if (vetor[filho] > t){
                  vetor[pai] = vetor[filho];
                  pai = filho;
                  filho = pai*2 + 1;
              }
              else
                  break;
        }
        vetor[pai] = t;
    }
}


/***************************
 SHELLSORT
*/
function shellsort(vetor, tam){
    var i, j, value;
    var gap = 1;
    while(gap < tam){
        gap = 3*gap+1;
    }
    while(gap > 1){
        gap = parseInt(gap/3);
        for(i = gap; i < tam; i++) {
            value = vetor[i];
            j = i - gap;
            while ((j >= 0) && (value < vetor[j])) {
                vetor[j + gap] = vetor[j];
                j = j-gap;
            }
            vetor[j + gap] = value;
        }
    }
}

