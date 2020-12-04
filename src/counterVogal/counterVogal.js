function vogals(frase){
    if(typeof frase !== "string"){
        console.log("Parâmetro inválido: Apenas strings serão aceitas.")
    }
    else {
         let vogais = 0
         for(let i = 0; i <= frase.length; i++){
            if(frase.charCodeAt(i) == 65 || frase.charCodeAt(i) == 69 || frase.charCodeAt(i) == 73 || frase.charCodeAt(i) == 79 || frase.charCodeAt(i) == 85 || frase.charCodeAt(i) == 97 || frase.charCodeAt(i) == 101 || frase.charCodeAt(i) == 105 || frase.charCodeAt(i) == 111 || frase.charCodeAt(i) == 117){
                vogais += 1
            }
        }
    }
        return vogais
}

module.exports = vogals;