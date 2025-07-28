# Fractal E2E - Testes Automatizados

Este projeto contém testes automatizados End-to-End (E2E) para a aplicação Fractal, utilizando Cypress como framework de teste.

## 📋 Requisitos

### Pré-requisitos
- **Node.js**: Versão 16.x ou superior
- **npm**: Versão 8.x ou superior (vem junto com o Node.js)
- **Git**: Para clonar o repositório

### Verificação dos Requisitos
```bash
# Verificar versão do Node.js
node --version

# Verificar versão do npm
npm --version

# Verificar versão do Git
git --version
```

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone <https://github.com/mayarafrnandes/fractal-e2e.git>
cd fractal-e2e
```

2. **Instale as dependências**
```bash
npm install
```

3. **Verifique se o Cypress foi instalado corretamente**
```bash
npx cypress --version
```

## 🧪 Executando os Testes

### Modo Interativo (Recomendado para Desenvolvimento)
```bash
npm run cypress:start
```
Isso abrirá a interface gráfica do Cypress onde você pode:
- Executar testes individualmente
- Ver o navegador em tempo real
- Debugar testes facilmente

### Modo Headless (CI/CD)
```bash
# Executar todos os testes
npx cypress run

# Executar um arquivo específico
npx cypress run --spec "cypress/e2e/modulo.cy.js"

# Executar com navegador específico
npx cypress run --browser chrome
```

### Scripts Disponíveis
```bash
# Abrir Cypress em modo interativo
npm run cypress:start

# Executar todos os testes em modo headless
npm run cypress:run
```

## 📁 Estrutura do Projeto

```
fractal-e2e/
├── cypress/
│   ├── e2e/                    # Testes E2E
│   │   ├── login.cy.js        # Testes de login
│   │   └── modulo.cy.js       # Testes de módulos
│   ├── fixtures/              # Dados de teste
│   │   └── example.json
│   └── support/               # Configurações e comandos
│       ├── commands.js        # Comandos customizados
│       ├── constants.js       # Seletores e dados
│       └── e2e.js            # Configurações globais
├── cypress.config.js          # Configuração do Cypress
├── package.json               # Dependências e scripts
└── README.md                  # Este arquivo
```

## 🏗️ Boas Práticas Implementadas

### 1. **Comandos Customizados (Reutilização)**
- **Login Reutilizável**: Comando `cy.login()` para autenticação
- **Localização**: `cypress/support/commands.js`

```javascript
// Exemplo de uso
cy.login(); // Usa credenciais padrão
cy.login('email@exemplo.com', 'senha123'); // Credenciais customizadas
```

### 2. **Seletores Centralizados**
- **Organização**: Todos os seletores em `cypress/support/constants.js`
- **Manutenibilidade**: Mudanças em um só lugar
- **Legibilidade**: Nomes descritivos para seletores

```javascript
// Exemplo de uso
cy.get(SELECTORS.AREA_LOGADA.MODULO.FORM_CRIAR_MODULO.INPUT_TITULO)
```

### 3. **Massa de Dados**
- **Dados de Teste**: Credenciais e URLs centralizadas
- **Configuração**: Ambiente configurável
- **Segurança**: Dados sensíveis organizados

```javascript
// Exemplo de dados centralizados
export const VALID_USER = {
    email: 'qualityassurance@bertoni.com.br',
    password: 'versar123'
}
```

### 4. **Estrutura de Testes**
- **Organização**: Testes por funcionalidade
- **Nomenclatura**: CT-XX para casos de teste
- **Descrição**: Nomes descritivos dos cenários

```javascript
it('CT-01 - Validar que ao clicar em "Criar módulo"...', () => {
    // Teste aqui
});
```

## 🔧 Configurações

### Configuração do Cypress
- **Arquivo**: `cypress.config.js`
- **Funcionalidades**: Configurações de E2E, timeouts, etc.

### Variáveis de Ambiente
- **Base URL**: Configurada em `constants.js`
- **Credenciais**: Centralizadas para diferentes ambientes

## 📊 Relatórios e Debugging

### Debugging
```bash
# Executar com logs detalhados
npx cypress run --spec "cypress/e2e/modulo.cy.js" --headed
```

### Screenshots e Vídeos
- **Falhas**: Screenshots automáticos em `cypress/screenshots/`
- **Vídeos**: Gravação automática em `cypress/videos/`

### Logs Úteis
```bash
# Ver logs detalhados
npx cypress run --spec "cypress/e2e/modulo.cy.js" --reporter spec
```

## 📚 Recursos Adicionais

- [Documentação do Cypress](https://docs.cypress.io/)
- [Guia de Boas Práticas](https://docs.cypress.io/guides/references/best-practices)
- [Comandos Customizados](https://docs.cypress.io/api/cypress-api/custom-commands)
