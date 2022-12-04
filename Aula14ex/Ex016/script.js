
function calcular(){
    var n1 = window.document.getElementById("inicio")
    var n2 = window.document.getElementById("fim")
    var n3 = window.document.getElementById("passo")
    var res = window.document.getElementById("res")

    //verificação de dados nas variáveis
    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length ==0 ){
        alert('faltam dados')

    }else{
        res.innerHTML="contando..."
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(n3.value)
        
        if(p <= 0 || f >= 10000){
            res.innerHTML = `passo invalido`
        }else{

            if(i==f){
                res.innerHTML = `voce não precisa realizar essa conta`
            }else{
            //adição da variável c para contador
                if(i<f){
                    for(var c = i ; c <=f ; c+= p){
                    res.innerHTML += ` ${c}`
                    }
                }else{
                    for(var c = i ; c >=f ; c-= p){
                        res.innerHTML += ` ${c}`
                    }
                }
            }
        }   
    } 
}
    
