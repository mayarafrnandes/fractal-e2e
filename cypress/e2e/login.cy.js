import { LOGIN_URL, USERS, SELECTORS } from '../support/constants';

describe('Login', () => {
  it('CT-00 - Deve realizar login com sucesso', () => {
    cy.login();
  });
  it('CT-00 - Nao deve realizar login com email e senha invalidos', () => {
    cy.visit(LOGIN_URL);
    
    cy.intercept('POST', 'https://stag-api.plataformaversar.com.br/auth/sign_in').as('loginRequest');

    cy.login(USERS.INVALID_USER.email, USERS.INVALID_USER.password);

    cy.wait(1000);
    
    cy.wait('@loginRequest', { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(401);
    });
    
    // Verificar se a mensagem de erro aparece
    cy.get('div.MuiAlert-message').should('be.visible').should('have.text', 'Usuário e/ou senha incorretos.');
  });
})