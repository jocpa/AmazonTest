describe('Pruebas Amazon', () => {

  const url = 'https://www.amazon.com/'

  it(' debe retornar el tercer elemento de la segunda pagina de la busqueda por "alexa" ', () => {

    cy.visit(url)

  })

})