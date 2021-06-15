const fizzbuzz = require("./fizzbuzz");

//Given - dado que
//should - deveria que isso...
//then - então espere isso

describe("Se o número não for múltiplo de 3 ou de 5 ele deve retornar ele mesmo", () => {
  test("Deve retornar 7 quando passado 7", () => {
    const resultado = fizzbuzz(7);
    // resultado === 7?
    // expect(resultado).to.be.equal(7);
    expect(resultado).toEqual(7);
  });

  test("Deve retornar 8 quando passado 8", () => {
    const resultado = fizzbuzz(8);
    // resultado === 8?
    expect(resultado).toEqual(8);
  });

  test("Se não for múltiplo de 3 ou 5, retorna ele mesmo", () => {
    const resultado = fizzbuzz(3);
    expect(resultado).not.toEqual(3);
  });

  test("Se for múltiplo de 5 retorna Buzz", () => {
    const resultado = fizzbuzz(10);
    expect(resultado).toEqual("Buzz");
  });

  test("Se for múltiplo de 3 e 5 retorna FizzBuzz", () => {
    const resultado = fizzbuzz(15);
    expect(resultado).toEqual("FizzBuzz");
  });
});
