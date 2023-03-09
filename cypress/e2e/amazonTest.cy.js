describe('Pruebas Amazon', () => {

  const url = 'https://www.amazon.com/'

  it(' debe retornar el tercer elemento de la segunda pagina de la busqueda por "alexa" ', () => {

    cy.visit(url)

    cy.get('#twotabsearchtextbox').type('alexa')
                                  .type(` {enter} `)

    cy.get('.s-pagination-next').click()

    cy.xpath(`/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[4]/div`).click()

    cy.get('#add-to-cart-button').click()
    cy.get('#sw-atc-details-single-container').should('be.visible')

  })

})