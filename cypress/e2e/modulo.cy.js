import { SELECTORS } from "../support/constants";

describe('Módulo', () => {
    it('CT-01 - Validar que ao clicar em "Criar módulo" e preencher todos os campos será possível criar o novo módulo', () => {
        cy.login();
        cy.contains(SELECTORS.AREA_LOGADA.MODULO.BTN_CRIAR_MODULO).click();
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.INPUT_TITULO).type('Módulo de Teste');
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.SELECT_SERIE).click();
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.SELECT_SERIE_ITEM).click();
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.TEXTAREA_DESCRICAO).type('Descrição do Módulo de Teste');

        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.SELECT_CAPA(2)).click();
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.BTN_AVANCAR).parent().click();
        // Validar que a página contém o texto da etapa
        cy.contains('Etapa 2 de 3').should('be.visible');
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.BTN_AVANCAR).parent().click();
        // Validar que a página contém o texto da etapa
        cy.contains('Etapa 3 de 3').should('be.visible');
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.BTN_SALVAR).click();

        // Validar que foi redirecionado para a página de módulos
        cy.url().should('include', '/modules');
        cy.contains('Módulo de Teste').should('be.visible');

    });

    it('CT-04 - Validar mensagem de campos obrigatórios na criação de módulo', () => {
        cy.login();
        cy.contains(SELECTORS.AREA_LOGADA.MODULO.BTN_CRIAR_MODULO).click();
        
        // Aguardar o formulário carregar
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.INPUT_TITULO).should('be.visible');
        
        // Verificar se o botão existe antes de testar seu estado
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.BTN_AVANCAR).should('exist');
        
        // Focar nos campos para disparar validações
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.INPUT_TITULO).focus().blur();
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.TEXTAREA_DESCRICAO).focus().blur();
        
        // Aguardar um pouco para as validações serem processadas
        cy.wait(1000);
        
        // Verificar que existem exatamente 2 mensagens de erro para o campo obrigatório
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.MENSAGEM_OBRIGATORIO)
            .should('have.length', 2);
        
        // Verificar que cada mensagem tem o texto correto
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.MENSAGEM_OBRIGATORIO)
            .each(($mensagem) => {
                cy.wrap($mensagem)
                    .should('be.visible')
                    .and('have.text', 'Campo Obrigatório *');
            });
        
        // Verificar se o botão está desabilitado usando o seletor do botão
        cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.BTN_AVANCAR)
            .parent()
            .should('have.attr', 'disabled');
    });
});