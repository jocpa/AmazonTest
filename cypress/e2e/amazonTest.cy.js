describe('Pruebas Amazon', () => {

  const url = 'https://www.amazon.com/'

  it(' debe retornar el tercer elemento de la segunda pagina de la busqueda por "alexa" ', () => {

    cy.visit(url)

    cy.get('#twotabsearchtextbox').type('alexa')
                                  .type(` {enter} `)

    cy.get('.s-pagination-next').click()

  })

})