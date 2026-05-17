# Quickstart: Password Generator Redesign

Este guia descreve os passos para executar, testar e validar localmente a refatoração de layout e design da página do gerador de senhas no portfólio Nuxt 3.

## Pré-requisitos

- Node.js (v18+)
- NPM ou Bun
- Servidor de desenvolvimento do Nuxt em execução na porta 3000

## Executando o Projeto Localmente

Caso o servidor não esteja rodando, inicie-o na raiz do repositório:

```bash
npm run dev
```

Acesse a página no navegador:
[http://localhost:3000/generators/passwords](http://localhost:3000/generators/passwords)

## Roteiro de Validação Manual (UX e Responsividade)

1. **Validação Visual Inicial (Desktop)**:
   - Abra a página em uma tela de desktop (ex: 1920x1080 ou 1366x768).
   - Verifique se o cartão principal possui bordas suaves (`rounded-2xl`), fundo adaptado ao tema escuro/claro e sombra elegante (`shadow-xl`).
   - Confirme se a fonte do display da senha é monoespaçada e de fácil leitura.

2. **Teste de Interatividade e Ergonomia**:
   - Arraste o controle deslizante (slider) de comprimento entre 8 e 64. Verifique se o número exibido ao lado atualiza instantaneamente e se uma nova senha é gerada proporcionalmente.
   - Desmarque e marque os checkboxes de caracteres (A-Z, a-z, 0-9, símbolos). Confirme se a senha gerada reflete os conjuntos selecionados.
   - Desmarque todas as quatro opções. Verifique se o botão de geração (`i-mdi-refresh`) fica desabilitado e se a mensagem de aviso "Selecione pelo menos uma opção de caracteres" aparece claramente em vermelho.

3. **Teste do Medidor de Força (Strength Meter)**:
   - Configure uma senha curta (8 caracteres) apenas com letras minúsculas. Observe se a barra indica "Muito fraca" / "Fraca" em vermelho ou laranja.
   - Aumente o tamanho para 16 e ative números e símbolos. Verifique se a barra preenche todos os 4 segmentos na cor verde com o rótulo "Muito forte".

4. **Teste de Feedback de Cópia (Clipboard)**:
   - Clique no botão de cópia (`i-mdi-content-copy`).
   - Confirme se o ícone muda imediatamente para um check verde (`i-mdi-check`) e retorna ao ícone original após exatamente 2 segundos.
   - Cole o conteúdo em um bloco de notas para garantir que a senha correta foi transferida para a área de transferência.

5. **Validação de Responsividade (Mobile e Tablet)**:
   - Redimensione o navegador ou utilize o modo de inspeção móvel (F12) para simular larguras de 320px, 375px e 768px.
   - Confirme se os botões de ação e o input da senha se reorganizam sem quebrar ou vazar para fora do cartão.
   - Verifique se o painel de opções (slider e checkboxes) permanece legível e perfeitamente alinhado em uma ou duas colunas dependendo do espaço disponível.
