# Quickstart: Verificação da Correção de Ícones e Competências

Este guia descreve os passos necessários para executar o ambiente de desenvolvimento local e validar as correções aplicadas na exibição de tecnologias do portfólio.

## 1. Pré-requisitos

Certifique-se de ter as dependências do projeto instaladas. O projeto utiliza Node.js e Nuxt 3.

```bash
# Instalar ou atualizar dependências (caso necessário)
npm install
```

## 2. Executando o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento do Nuxt:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000` (ou no IP/porta configurado no terminal).

## 3. Roteiro de Validação Visual e Interativa

Abra o navegador e acesse a página inicial do portfólio. Role a página até a seção **Sobre mim**, especificamente no cartão **Tecnologias**.

### Passo 3.1: Validação da Limpeza Visual (Sem Texto)

- Verifique se a grade exibe **apenas os ícones** das tecnologias, sem nenhum texto descritivo ao lado ou abaixo de cada ícone.
- Confirme se os cartões têm formato quadrado e alinhamento centralizado perfeito.

### Passo 3.2: Validação dos Ícones Ausentes (TypeScript e Kubernetes)

- Localize o cartão correspondente ao **TypeScript** (ícone azul com as letras "TS").
- Localize o cartão correspondente ao **Kubernetes** (ícone azul com o leme de 7 pontas).
- Certifique-se de que ambos estão renderizados corretamente e nítidos.

### Passo 3.3: Validação do Tooltip Interativo

- Posicione o cursor do mouse (hover) sobre o ícone do **TypeScript**. Confirme se um tooltip com o texto "TypeScript" aparece.
- Repita o teste de hover para os demais ícones (Go, Java, Kotlin, Python, Docker, AWS, Kubernetes).

### Passo 3.4: Validação de Acessibilidade (Screen Readers e Teclado)

- Inspecione o elemento HTML de qualquer ícone da grade (ex: clique com botão direito > Inspecionar).
- Verifique se a tag do contêiner possui os atributos `aria-label="Nome da Tecnologia"` e `role="img"`.
- (Opcional) Utilize a tecla `Tab` para navegar pelos itens da grade e verifique se o tooltip abre ao receber foco.
