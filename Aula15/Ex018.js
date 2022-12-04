var num = [5, 8, 9, 3]
num.push(200)
num.sort()


console.log(`O terceiro vetor é ${num[2]}`)
console.log(`O tamanho do vetor é  ${num.length}`)

let pos = num.indexOf(5)


console.log(`${num} valor pesquisado pelo indexof é ${pos}`)



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let num = [1, 2, 3, 4]

for (let pos in num){
    console.log(`${pos} e ${num[pos]}`)
}

for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem os valores ${num[pos]}`)
}