# Data Model: Password Generator Configuration

O gerador de senhas opera exclusivamente no lado do cliente (client-side). O gerenciamento de estado é realizado em memória através da reatividade do Vue 3 (`reactive` e `ref`). Não há persistência em banco de dados ou comunicação com APIs externas.

## Entity: `PasswordConfiguration`

Representa o conjunto de regras e preferências ajustadas pelo usuário para a geração da senha.

### Attributes

| Nome do Campo | Tipo TypeScript | Descrição | Regra de Validação / Restrição |
| :--- | :--- | :--- | :--- |
| `passwordLength` | `number` | Comprimento da senha a ser gerada. | Mínimo: 8, Máximo: 64. Padrão: 12. |
| `useUppercase` | `boolean` | Flag para inclusão de letras maiúsculas (A-Z). | Pelo menos uma flag de caractere deve ser `true`. |
| `useLowercase` | `boolean` | Flag para inclusão de letras minúsculas (a-z). | Pelo menos uma flag de caractere deve ser `true`. |
| `useNumbers` | `boolean` | Flag para inclusão de caracteres numéricos (0-9). | Pelo menos uma flag de caractere deve ser `true`. |
| `useSymbols` | `boolean` | Flag para inclusão de símbolos especiais (!@#...). | Pelo menos uma flag de caractere deve ser `true`. |

### Estrutura de Estado Reativo (Vue 3)

```typescript
// Exemplo de encapsulamento do estado no componente
interface PasswordOptions {
    passwordLength: number;
    useUppercase: boolean;
    useLowercase: boolean;
    useNumbers: boolean;
    useSymbols: boolean;
}

const options = reactive<PasswordOptions>({
    passwordLength: 12,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true
});
```

## Validação de Estado e Regras de Negócio

- **Regra de Caracteres Mínimos**: A propriedade computada `isValidOptions` garante que a geração de senha só ocorra se pelo menos uma das quatro flags booleanas (`useUppercase`, `useLowercase`, `useNumbers`, `useSymbols`) estiver ativa. Caso todas sejam desmarcadas, o botão de geração é desabilitado e um aviso visual é exibido.
- **Garantia de Variedade**: A lógica interna (`ensureAllCharTypes`) assegura que a senha gerada contenha obrigatoriamente pelo menos um caractere de cada conjunto ativado pelo usuário, prevenindo que uma senha de 8 caracteres gerada aleatoriamente omita números ou símbolos solicitados.
