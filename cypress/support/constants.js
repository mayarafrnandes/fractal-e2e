export const BASE_URL = 'https://playful-torrone-162c28.netlify.app';
export const LOGIN_URL = `${BASE_URL}/login`;


export const USERS = {
    INVALID_USER: {
        email: 'invalid_email@invalid.com',
        password: 'invalid_password'
    },
    VALID_USER: {
        email: 'qualityassurance@bertoni.com.br',
        password: 'versar123'
    }
}

export const SELECTORS = {
    AREA_LOGADA: {
        MODULO: {
            BTN_CRIAR_MODULO: 'Criar Módulo',
            FORM_CRIAR_MODULO: {
                INPUT_TITULO: 'input[name="title"]',
                SELECT_SERIE: '[id="mui-component-select-grade_id"]',
                SELECT_SERIE_ITEM: 'li:contains("9° ANO")',
                TEXTAREA_DESCRICAO: 'textarea[name="description"]',
                SELECT_CAPA: (index) => `.MuiGridList-root > :nth-child(${index}) button`,
                BTN_AVANCAR: 'button.MuiButton-containedPrimary > span.MuiButton-label:contains("Salvar ")',
                BTN_SALVAR: 'button.MuiButton-containedPrimary > span.MuiButton-label:contains("Salvar Módulo")',
                MENSAGEM_OBRIGATORIO: 'span:contains("Campo Obrigatório *")'
            }
        }
    }
}