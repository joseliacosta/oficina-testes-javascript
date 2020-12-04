const vogals =  require('./counterVogal');

describe('Parâmetros diferentes de string', () => {
    it('deve retornar "Parâmetro inválido: Apenas strings serão aceitas." quando o parâmetro for inválido', () =>{
        const array = [1,2,3]
        const resultado = vogals(array)
        expect(resultado).toBe('Parâmetro inválido: Apenas strings serão aceitas." quando o parâmetro for inválido')
    })
})
describe('Recebendo strings', () =>{
    it('deve contar a quantidade de vogais na string e retornar o valor na variável "vogais"', () => {
        const frase = "Ola Mundo"
        const resultado = vogals(frase)
        expect(resultado).toBe(4)
    })
})
