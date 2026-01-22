/* eslint-disable no-undef */
describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve adicionar uma nova tarefa', () => {
    cy.get('#title').type('Estudar Cypress')
    cy.get('#desc').type('Tenho que estudar a documentação do cypress')
    cy.get(':nth-child(2) > form > .btn').click()
    
    cy.get('h4').should('have.text', 'Estudar Cypress')
    cy.get('.my-2 > p').should('have.text','Tenho que estudar a documentação do cypress')
  })


  it('deve deletar uma nova tarefa', () => {
    cy.get('#title').type('Estudar Cypress')
    cy.get('#desc').type('Tenho que estudar a documentação do cypress')
    cy.get(':nth-child(2) > form > .btn').click()

    cy.get('.my-2 > .btn').click()
    
    cy.get('.my-2').should('not.exist')
  })
});
