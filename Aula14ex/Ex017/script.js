

function calcular(){
    var m = window.document.getElementById('numero')
    var res = window.document.getElementById('res')
    res.innerHTML = ""

    if(m.value.length == 0){
        
       
        alert("Inclua um valor para executar a operação")
        
    }else{
        var mult = Number(m.value)
        var seg = Number(0)
        
        
        for (var c = seg; c<=10; c++ ){
            var r = mult*c
            var item = document.createElement('option')
            item.text = ` ${mult} x ${c} = ${r}`
            res.appendChild(item)
        }
        

      
    }
}