const fizzbuzz = require('./fizzbuzz')

describe('Não multiplos de 3 e 5', () => {
    it('deve retornar ele mesmo', () => {
        const resultado = fizzbuzz(1)
        expect(resultado).toBe(1)
    });
});
describe('Multiplos de 3', () => {
    it('deve retornar Fizz quando o número for 3', () =>{
        const resultado = fizzbuzz(3)
        expect(resultado).toBe('Fizz')
    });
});
describe('Multiplos de 5', () => {
    it('deve retornar Buzz quando o número for 5', () =>{
        const resultado = fizzbuzz(5)
        expect(resultado).toBe('Buzz')
    });
});
describe('Multiplos de 3 e 5', () => {
    it('deve retornar FizzBuzz quando o número for multiplo de 3 e 5', () => {
        const resultado = fizzbuzz(15)
        expect(resultado).toBe('FizzBuzz')
    });
});