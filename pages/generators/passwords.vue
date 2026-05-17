<script setup>

// Estado da aplicação
const options = reactive({
    passwordLength: 12,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true
})

const displayPassword = ref("")
const finalPassword = ref("")
const isGenerating = ref(false)
const showPassword = ref(true)
const showClipboardCheck = ref(false)
const copyTimeout = ref(null)
// Novo estado para controlar a visibilidade do menu de opções
const showOptionsMenu = ref(false)

// Conjuntos de caracteres
const CHARSET = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+{}:\"<>?|[];',./`~"
}

// Composable para geração de senha
const usePasswordGenerator = () => {
    const generateCharset = (options) => {
        let charset = ""
        if (options.useUppercase) charset += CHARSET.uppercase
        if (options.useLowercase) charset += CHARSET.lowercase
        if (options.useNumbers) charset += CHARSET.numbers
        if (options.useSymbols) charset += CHARSET.symbols
        return charset
    }

    const createPassword = (length, charset) => {
        let password = ""
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            password += charset[randomIndex]
        }
        return password
    }

    // Verifica se a senha tem pelo menos um caractere de cada tipo selecionado
    const ensureAllCharTypes = (password, options) => {
        let modifiedPassword = password

        // Verifica e garante a presença de cada tipo de caractere selecionado
        if (options.useUppercase && !/[A-Z]/.test(modifiedPassword)) {
            const randomChar = CHARSET.uppercase[Math.floor(Math.random() * CHARSET.uppercase.length)]
            const randomPos = Math.floor(Math.random() * modifiedPassword.length)
            modifiedPassword = modifiedPassword.substring(0, randomPos) +
                randomChar +
                modifiedPassword.substring(randomPos + 1)
        }

        if (options.useLowercase && !/[a-z]/.test(modifiedPassword)) {
            const randomChar = CHARSET.lowercase[Math.floor(Math.random() * CHARSET.lowercase.length)]
            const randomPos = Math.floor(Math.random() * modifiedPassword.length)
            modifiedPassword = modifiedPassword.substring(0, randomPos) +
                randomChar +
                modifiedPassword.substring(randomPos + 1)
        }

        if (options.useNumbers && !/[0-9]/.test(modifiedPassword)) {
            const randomChar = CHARSET.numbers[Math.floor(Math.random() * CHARSET.numbers.length)]
            const randomPos = Math.floor(Math.random() * modifiedPassword.length)
            modifiedPassword = modifiedPassword.substring(0, randomPos) +
                randomChar +
                modifiedPassword.substring(randomPos + 1)
        }

        if (options.useSymbols && !/[!@#$%^&*()_+{}:"<>?|[\];',./`~]/.test(modifiedPassword)) {
            const randomChar = CHARSET.symbols[Math.floor(Math.random() * CHARSET.symbols.length)]
            const randomPos = Math.floor(Math.random() * modifiedPassword.length)
            modifiedPassword = modifiedPassword.substring(0, randomPos) +
                randomChar +
                modifiedPassword.substring(randomPos + 1)
        }

        return modifiedPassword
    }

    return {
        generateCharset,
        createPassword,
        ensureAllCharTypes
    }
}

// Hook para avaliar a força da senha
const usePasswordStrength = (password) => {
    const calculateStrength = () => {
        if (!password.value) return 0

        let score = 0

        // Comprimento
        if (password.value.length >= 8) score += 1
        if (password.value.length >= 12) score += 1

        // Variedade de caracteres
        if (/[A-Z]/.test(password.value)) score += 0.5
        if (/[a-z]/.test(password.value)) score += 0.5
        if (/[0-9]/.test(password.value)) score += 1
        if (/[^A-Za-z0-9]/.test(password.value)) score += 1

        // Limitar o score a 4
        return Math.min(Math.floor(score), 4)
    }

    const strengthScore = computed(calculateStrength)

    const strengthLabel = computed(() => {
        const labels = ["Muito fraca",
            "Fraca",
            "Média",
            "Forte",
            "Muito forte"]
        return labels[strengthScore.value]
    })

    const strengthColorClass = computed(() => {
        const colors = [
            "bg-red-500",
            "bg-orange-500",
            "bg-yellow-500",
            "bg-lime-500",
            "bg-green-600"
        ]
        return colors[strengthScore.value]
    })

    return {
        strengthScore,
        strengthLabel,
        strengthColorClass
    }
}

const {generateCharset, createPassword, ensureAllCharTypes} = usePasswordGenerator()
const {strengthScore, strengthLabel, strengthColorClass} = usePasswordStrength(finalPassword)

// Verificar se as opções são válidas
const isValidOptions = computed(() => {
    return options.useUppercase || options.useLowercase ||
        options.useNumbers || options.useSymbols
})

const generatePassword = () => {
    if (isGenerating.value || !isValidOptions.value) return

    const charset = generateCharset(options)
    let newPassword = createPassword(options.passwordLength, charset)

    // Garantir que pelo menos um de cada tipo de caractere selecionado seja incluído
    newPassword = ensureAllCharTypes(newPassword, options)

    finalPassword.value = newPassword

    // Iniciar a animação
    animatePasswordGeneration()
}

const animatePasswordGeneration = () => {
    isGenerating.value = true
    const length = options.passwordLength
    const targetPassword = finalPassword.value

    // Conjunto completo para caracteres aleatórios
    const allChars = generateCharset(options)

    let iterations = 0
    const maxIterations = 64 // Número de iterações para a animação completa

    const animationInterval = setInterval(() => {
        let tempPassword = ""
        for (let i = 0; i < length; i++) {
            // Cálculo melhorado para uma transição mais suave
            const progress = iterations / maxIterations
            const shouldShowFinalChar = i < Math.floor(length * progress)

            if (shouldShowFinalChar) {
                tempPassword += targetPassword[i]
            } else {
                const randomIndex = Math.floor(Math.random() * allChars.length)
                tempPassword += allChars[randomIndex]
            }
        }

        displayPassword.value = tempPassword
        iterations++

        // Quando a animação terminar
        if (iterations > maxIterations) {
            clearInterval(animationInterval)
            displayPassword.value = targetPassword
            isGenerating.value = false
        }
    }, 16) // Velocidade da animação (ms)
}

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(displayPassword.value)
        showClipboardCheck.value = true

        // Limpa qualquer timeout anterior
        if (copyTimeout.value) clearTimeout(copyTimeout.value)

        // Retorna ao texto original após 2 segundos
        copyTimeout.value = setTimeout(() => {
            showClipboardCheck.value = false
        }, 2000)
    } catch (err) {
        console.error("Erro ao copiar a senha", err)
    }
}

// Função para alternar a visibilidade do menu de opções
const toggleOptionsMenu = () => {
    showOptionsMenu.value = !showOptionsMenu.value
}

// Fechar o menu ao clicar fora dele
const closeOptionsMenu = (event) => {
    const optionsContainer = document.querySelector(".options-container")
    const optionsButton = document.querySelector(".options-toggle-button")

    if (optionsContainer && !optionsContainer.contains(event.target) &&
        optionsButton && !optionsButton.contains(event.target)) {
        showOptionsMenu.value = false
    }
}

// Adicionar event listener para fechar o menu ao clicar fora
onMounted(() => {
    document.addEventListener("click", closeOptionsMenu)
})

// Adicionar para o indicador de força da senha
const strengthTextColorClass = computed(() => {
    const colors = [
        "text-red-500",
        "text-orange-500",
        "text-yellow-500",
        "text-lime-500",
        "text-green-600"
    ]
    return colors[strengthScore.value]
})

const getStrengthColor = (score) => {
    const colors = [
        "#ef4444", // red
        "#f97316", // orange
        "#eab308", // yellow
        "#84cc16", // lime
        "#22c55e"  // green
    ]
    return colors[score]
}

// Limpa qualquer timeout ao desmontar o componente
onBeforeUnmount(() => {
    if (copyTimeout.value) clearTimeout(copyTimeout.value)
    document.removeEventListener("click", closeOptionsMenu)
})
</script>

<template>
    <div class="container mx-auto px-4 py-8 max-w-4xl">
        <div class="password-card">
            <!-- Password Display & Actions -->
            <div class="password-result">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    :value="displayPassword"
                    readonly
                    class="password-display"
                    aria-label="Senha gerada"
                    placeholder="Clique em gerar para criar uma senha"
                >
                <div class="password-actions">
                    <button
                        class="password-action-button"
                        :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
                        @click="togglePasswordVisibility"
                    >
                        <UIcon v-if="showPassword" name="i-mdi-eye-off" class="text-xl"/>
                        <UIcon v-else name="i-mdi-eye" class="text-xl"/>
                    </button>
                    <button
                        class="password-action-button"
                        :disabled="isGenerating || !isValidOptions"
                        aria-label="Gerar nova senha"
                        @click="generatePassword"
                    >
                        <UIcon name="i-mdi-refresh" class="text-xl" :class="{ 'animate-spin': isGenerating }"/>
                    </button>
                    <button
                        class="password-action-button"
                        aria-label="Copiar senha"
                        @click="copyToClipboard"
                    >
                        <UIcon v-if="showClipboardCheck" name="i-mdi-check" class="text-xl text-green-500 dark:text-green-400"/>
                        <UIcon v-else name="i-mdi-content-copy" class="text-xl"/>
                    </button>
                    <button
                        class="password-action-button"
                        aria-label="Opções de senha"
                        :class="{ 'active': showOptionsMenu }"
                        @click.stop="toggleOptionsMenu"
                    >
                        <UIcon name="i-mdi-cog" class="text-xl"/>
                    </button>
                </div>
            </div>

            <!-- Strength Meter -->
            <div class="strength-section">
                <div class="strength-header">
                    <span class="strength-title">Força da Senha</span>
                    <span
                        v-if="finalPassword"
                        class="strength-label"
                        :class="strengthTextColorClass"
                    >{{ strengthLabel }}</span>
                </div>
                <div class="strength-meter">
                    <div
                        v-for="n in 4"
                        :key="n"
                        class="strength-segment"
                        :aria-label="`Força da senha ${strengthLabel}`"
                        :class="{ 'active': n <= strengthScore }"
                        :style="{ 'background-color': n <= strengthScore ? getStrengthColor(strengthScore) : '' }"
                    />
                </div>
            </div>

            <!-- Options Panel (integrated in card flow) -->
            <div
                v-show="showOptionsMenu"
                class="options-panel"
                @click.stop
            >
                <!-- Length Slider -->
                <div class="slider-section">
                    <div class="slider-header">
                        <span class="slider-title">Comprimento</span>
                        <span class="slider-badge">{{ options.passwordLength }}</span>
                    </div>
                    <input
                        v-model.number="options.passwordLength"
                        type="range"
                        min="8"
                        max="64"
                        class="slider-input"
                        aria-label="Ajustar Tamanho da Senha"
                    >
                </div>

                <!-- Character Set Checkboxes -->
                <div class="options-grid">
                    <label class="option-card" for="opt-uppercase">
                        <input
                            id="opt-uppercase"
                            v-model="options.useUppercase"
                            type="checkbox"
                            class="option-checkbox"
                        >
                        <span class="option-text">Maiúsculas (A-Z)</span>
                    </label>

                    <label class="option-card" for="opt-lowercase">
                        <input
                            id="opt-lowercase"
                            v-model="options.useLowercase"
                            type="checkbox"
                            class="option-checkbox"
                        >
                        <span class="option-text">Minúsculas (a-z)</span>
                    </label>

                    <label class="option-card" for="opt-numbers">
                        <input
                            id="opt-numbers"
                            v-model="options.useNumbers"
                            type="checkbox"
                            class="option-checkbox"
                        >
                        <span class="option-text">Números (0-9)</span>
                    </label>

                    <label class="option-card" for="opt-symbols">
                        <input
                            id="opt-symbols"
                            v-model="options.useSymbols"
                            type="checkbox"
                            class="option-checkbox"
                        >
                        <span class="option-text">Símbolos (!@#$%)</span>
                    </label>
                </div>

                <!-- Validation Warning -->
                <p v-if="!isValidOptions" class="validation-warning">
                    <UIcon name="i-mdi-alert-circle-outline" class="text-base mr-1"/>
                    Selecione pelo menos uma opção de caracteres.
                </p>
            </div>
        </div>
    </div>
</template>


<style scoped>
@reference "~/assets/css/main.tw.reference.css";

/* ── Card Principal ── */
.password-card {
    @apply relative mx-auto w-full max-w-2xl;
    @apply flex flex-col gap-6;
    @apply p-6 md:p-8;
    @apply rounded-2xl;
    @apply bg-neutral-200 dark:bg-zinc-800/90;
    @apply border border-neutral-300 dark:border-zinc-700/50;
    @apply shadow-xl backdrop-blur-sm;
    @apply transition-all duration-300;
}

/* ── Display e Ações ── */
.password-result {
    @apply flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4;
    @apply p-4;
    @apply rounded-xl;
    @apply bg-neutral-100 dark:bg-zinc-900/50;
    @apply border border-neutral-300 dark:border-zinc-700/50;
    @apply transition-colors duration-200;
}

.password-display {
    @apply w-full font-mono text-xl md:text-2xl font-medium;
    @apply text-center sm:text-left;
    @apply bg-transparent border-none focus:ring-0 focus:outline-none;
    @apply text-neutral-800 dark:text-neutral-100;
    @apply overflow-hidden text-ellipsis;
    @apply placeholder:text-neutral-400 dark:placeholder:text-neutral-600;
}

.password-actions {
    @apply flex items-center justify-center sm:justify-end gap-2;
    @apply w-full sm:w-auto;
    @apply flex-shrink-0;
}

.password-action-button {
    @apply flex items-center justify-center;
    @apply w-10 h-10 rounded-lg;
    @apply bg-neutral-200 dark:bg-zinc-800;
    @apply text-neutral-700 dark:text-neutral-300;
    @apply hover:bg-neutral-300 dark:hover:bg-zinc-700;
    @apply transition-colors duration-200;
    @apply disabled:opacity-40 disabled:cursor-not-allowed;

    &.active {
        @apply bg-primary-100 dark:bg-primary-900/30;
        @apply text-primary-600 dark:text-primary-400;
    }
}

/* ── Medidor de Força ── */
.strength-section {
    @apply flex flex-col gap-2;
}

.strength-header {
    @apply flex items-center justify-between;
}

.strength-title {
    @apply text-sm font-medium text-neutral-600 dark:text-neutral-400;
}

.strength-label {
    @apply text-xs font-semibold uppercase tracking-wider;
    @apply transition-colors duration-300;
}

.strength-meter {
    @apply flex h-2 w-full gap-1 overflow-hidden;
}

.strength-segment {
    @apply h-full flex-1 rounded-full;
    @apply bg-neutral-300 dark:bg-zinc-700;
    @apply transition-all duration-300;
}

/* ── Painel de Opções ── */
.options-panel {
    @apply flex flex-col gap-6;
    @apply pt-5;
    @apply border-t border-neutral-300 dark:border-zinc-700/50;
    animation: fadeSlideIn 0.25s ease-out;
}

@keyframes fadeSlideIn {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ── Slider ── */
.slider-section {
    @apply flex flex-col gap-3;
}

.slider-header {
    @apply flex items-center justify-between;
}

.slider-title {
    @apply text-sm font-medium text-neutral-700 dark:text-neutral-300;
}

.slider-badge {
    @apply font-mono text-xs font-semibold;
    @apply bg-neutral-300 dark:bg-zinc-700;
    @apply text-neutral-700 dark:text-neutral-300;
    @apply px-2.5 py-1 rounded-md;
}

.slider-input {
    @apply w-full h-2;
    @apply bg-neutral-300 dark:bg-zinc-700;
    @apply rounded-lg appearance-none cursor-pointer;
    @apply accent-primary-500;
}

/* ── Grade de Opções ── */
.options-grid {
    @apply grid grid-cols-1 sm:grid-cols-2 gap-3;
}

.option-card {
    @apply flex items-center gap-3;
    @apply p-3 rounded-lg cursor-pointer;
    @apply bg-neutral-100 dark:bg-zinc-900/40;
    @apply border border-neutral-300 dark:border-zinc-700/50;
    @apply hover:border-primary-500/50 dark:hover:border-primary-500/40;
    @apply transition-colors duration-200;
}

.option-checkbox {
    @apply rounded;
    @apply border-neutral-400 dark:border-neutral-600;
    @apply text-primary-500;
    @apply focus:ring-primary-500 focus:ring-offset-0;
    @apply dark:bg-zinc-800;
    @apply transition duration-200;
}

.option-text {
    @apply text-sm font-medium;
    @apply text-neutral-700 dark:text-neutral-300;
}

/* ── Aviso de Validação ── */
.validation-warning {
    @apply flex items-center;
    @apply text-sm text-red-500 dark:text-red-400;
    @apply font-medium;
}
</style>
