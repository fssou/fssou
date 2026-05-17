# Data Model: Competências e Tecnologias

A estrutura de dados para as competências tecnológicas é estática e encapsulada diretamente no componente Vue (`AboutSection.vue`). Não há persistência em banco de dados ou chamadas de API externas para este catálogo.

## Entity: `Skill`

Representa uma ferramenta, linguagem de programação ou plataforma dominada pelo profissional.

### Attributes

| Nome do Campo | Tipo TypeScript | Descrição | Regra de Validação / Restrição |
| :--- | :--- | :--- | :--- |
| `name` | `string` | Nome de exibição da tecnologia (ex: "TypeScript", "Kubernetes", "Go"). | Obrigatório. Usado no tooltip e no atributo `aria-label`. |
| `icon` | `string` | Identificador do ícone no formato Iconify (ex: `i-devicon-typescript`). | Obrigatório. Deve ser um identificador válido e existente no pacote de ícones. |
| `color` | `string` | Código de cor hexadecimal associado à marca (ex: `#3178C6`). | Obrigatório. Usado para efeitos visuais ou destaque de hover. |

### Exemplo de Estrutura em Memória

```typescript
interface Skill {
    name: string;
    icon: string;
    color: string;
}

const skills: Skill[] = [
    { name: 'Go', icon: 'i-devicon-go', color: '#00ADD8' },
    { name: 'TypeScript', icon: 'i-devicon-typescript', color: '#3178C6' },
    { name: 'Java', icon: 'i-devicon-java', color: '#ED8B00' },
    { name: 'Kotlin', icon: 'i-devicon-kotlin', color: '#7F52FF' },
    { name: 'Python', icon: 'i-devicon-python', color: '#3776AB' },
    { name: 'Docker', icon: 'i-devicon-docker', color: '#2496ED' },
    { name: 'AWS', icon: 'i-devicon-amazonwebservices-wordmark', color: '#FF9900' },
    { name: 'Kubernetes', icon: 'i-devicon-kubernetes', color: '#326CE5' },
];
```

## Relacionamentos e Ciclo de Vida

- **Relacionamento**: A lista de objetos `Skill` pertence exclusivamente à seção Sobre (`AboutSection.vue`) do portfólio.
- **Ciclo de Vida**: Os dados são inicializados estaticamente no momento da montagem do componente (client-side ou server-side rendering) e permanecem imutáveis durante toda a sessão do usuário na página.
