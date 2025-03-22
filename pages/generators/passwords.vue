<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="mb-6 text-3xl font-bold">Gerador de Senhas Fortes</h1>

        <div class="password-card">
            <!-- Resultado da senha - Agora no topo e com novo estilo -->
            <div class="password-result-container mb-6">
                <div class="password-result">
                    <input
                        :type="showPassword ? 'text' : 'password'"
                        :value="displayPassword"
                        readonly
                        class="password-display"
                        aria-label="Senha gerada"
                    >
                    <div class="password-actions">
                        <button
                            class="password-action-button"
                            @click="togglePasswordVisibility"
                            :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
                        >
                            <span v-if="showPassword" class="i-mdi-eye-off text-xl"></span>
                            <span v-else class="i-mdi-eye text-xl"></span>
                        </button>
                        <button
                            class="password-action-button"
                            @click="generatePassword"
                            :disabled="isGenerating || !isValidOptions"
                            aria-label="Gerar nova senha"
                        >
                            <span class="i-mdi-refresh text-xl"></span>
                        </button>
                        <button
                            class="password-action-button"
                            @click="copyToClipboard"
                            aria-label="Copiar senha"
                        >
                            <span v-if="copyButtonText === 'Copiar'" class="i-mdi-content-copy text-xl"></span>
                            <span v-else class="i-mdi-check text-xl text-green-500"></span>
                        </button>
                    </div>
                </div>

                <!-- Indicador de força da senha -->
                <div v-if="finalPassword" class="mt-3">
                    <div class="mb-1 flex justify-between">
                        <span class="text-sm font-medium">Força da senha:</span>
                        <span class="text-sm font-medium" :class="strengthTextColorClass">{{ strengthLabel }}</span>
                    </div>
                    <div class="strength-meter">
                        <div 
                            v-for="n in 4" 
                            :key="n"
                            class="strength-segment"
                            :class="{ 'active': n <= strengthScore }"
                            :style="{ 'background-color': n <= strengthScore ? getStrengthColor(strengthScore) : '' }"
                        ></div>
                    </div>
                </div>
            </div>

            <button
                class="generate-button mb-6"
                :disabled="isGenerating || !isValidOptions"
                @click="generatePassword"
                aria-label="Gerar nova senha"
            >
                {{ isGenerating ? 'Gerando...' : 'Gerar Nova Senha' }}
            </button>

            <!-- Opções de configuração -->
            <div class="options-container">
                <h2 class="text-xl font-semibold mb-4">Personalize sua senha</h2>
                
                <div class="mb-4">
                    <label class="block">
                        <span class="text-sm font-medium">Comprimento da senha:</span>
                        <div class="flex items-center mt-2">
                            <input
                                v-model.number="options.passwordLength"
                                type="range"
                                min="8"
                                max="64"
                                class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
                                aria-label="Ajustar comprimento da senha"
                            >
                            <span class="ml-3 min-w-[2.5rem] text-center">{{ options.passwordLength }}</span>
                        </div>
                    </label>
                </div>

                <div class="options-grid">
                    <div class="option-item">
                        <label class="option-label">
                            <input 
                                v-model="options.useUppercase" 
                                type="checkbox" 
                                class="form-checkbox"
                                id="uppercase"
                                aria-label="Incluir letras maiúsculas"
                            >
                            <span>Letras maiúsculas (A-Z)</span>
                        </label>
                    </div>

                    <div class="option-item">
                        <label class="option-label">
                            <input 
                                v-model="options.useLowercase" 
                                type="checkbox" 
                                class="form-checkbox"
                                id="lowercase"
                                aria-label="Incluir letras minúsculas"
                            >
                            <span>Letras minúsculas (a-z)</span>
                        </label>
                    </div>

                    <div class="option-item">
                        <label class="option-label">
                            <input 
                                v-model="options.useNumbers" 
                                type="checkbox" 
                                class="form-checkbox"
                                id="numbers"
                                aria-label="Incluir números"
                            >
                            <span>Números (0-9)</span>
                        </label>
                    </div>

                    <div class="option-item">
                        <label class="option-label">
                            <input 
                                v-model="options.useSymbols" 
                                type="checkbox" 
                                class="form-checkbox"
                                id="symbols"
                                aria-label="Incluir símbolos"
                            >
                            <span>Símbolos (!@#$%^&*)</span>
                        </label>
                    </div>
                </div>
                
                <p v-if="!isValidOptions" class="mt-4 text-red-500 text-sm">
                    Selecione pelo menos uma opção de caracteres.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    ssr: false
})

// Estado da aplicação
const options = reactive({
    passwordLength: 12,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true
})

const displayPassword = ref("Clique em Gerar")
const finalPassword = ref("")
const isGenerating = ref(false)
const showPassword = ref(false)
const copyButtonText = ref("Copiar")
const copyTimeout = ref(null)

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
        const labels = ['Muito fraca', 'Fraca', 'Média', 'Forte', 'Muito forte']
        return labels[strengthScore.value]
    })
    
    const strengthColorClass = computed(() => {
        const colors = [
            'bg-red-500',
            'bg-orange-500',
            'bg-yellow-500',
            'bg-lime-500',
            'bg-green-600'
        ]
        return colors[strengthScore.value]
    })
    
    return {
        strengthScore,
        strengthLabel,
        strengthColorClass
    }
}

const { generateCharset, createPassword, ensureAllCharTypes } = usePasswordGenerator()
const { strengthScore, strengthLabel, strengthColorClass } = usePasswordStrength(finalPassword)

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
        // Criar uma senha temporária aleatória
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
    }, 50) // Velocidade da animação (ms)
}

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(displayPassword.value)
        copyButtonText.value = "Copiado! ✓"
        
        // Limpa qualquer timeout anterior
        if (copyTimeout.value) clearTimeout(copyTimeout.value)
        
        // Retorna ao texto original após 2 segundos
        copyTimeout.value = setTimeout(() => {
            copyButtonText.value = "Copiar"
        }, 2000)
    } catch (err) {
        console.error("Erro ao copiar a senha", err)
        alert("Erro ao copiar a senha. Seu navegador pode não suportar esta função.")
    }
}

// Limpa qualquer timeout ao desmontar o componente
onBeforeUnmount(() => {
    if (copyTimeout.value) clearTimeout(copyTimeout.value)
})

// Adicionar para o indicador de força da senha
const strengthTextColorClass = computed(() => {
    const colors = [
        'text-red-500',
        'text-orange-500',
        'text-yellow-500',
        'text-lime-500',
        'text-green-600'
    ]
    return colors[strengthScore.value]
})

const getStrengthColor = (score) => {
    const colors = [
        '#ef4444', // red
        '#f97316', // orange
        '#eab308', // yellow
        '#84cc16', // lime
        '#22c55e'  // green
    ]
    return colors[score]
}
</script>

<style lang="sass" scoped>
.password-card
    @apply relative p-6 w-full max-w-2xl mx-auto
    @apply flex flex-col flex-nowrap content-start items-start justify-between
    @apply rounded-[20px]
    @apply overflow-hidden
    @apply bg-white dark:bg-gray-950
    @apply transition duration-300
    box-shadow: rgba(0, 0, 0, 0.06) 0 0 0 1px inset, rgba(0, 0, 0, 0.04) 0 2px 4px 0

.password-result-container
    @apply w-full

.password-result
    @apply flex flex-col sm:flex-row items-center justify-between
    @apply rounded-[12px] 
    @apply p-4 bg-gray-100 dark:bg-gray-800
    @apply transition duration-300
    @apply border border-gray-200 dark:border-gray-700

.password-display
    @apply w-full text-xl font-medium text-center sm:text-left 
    @apply border-none bg-transparent focus:ring-0 
    @apply dark:text-white mb-3 sm:mb-0
    @apply overflow-hidden text-ellipsis

.password-actions
    @apply flex items-center justify-center space-x-2 
    @apply w-full sm:w-auto

.password-action-button
    @apply flex items-center justify-center 
    @apply rounded-full w-10 h-10
    @apply text-gray-600 dark:text-gray-400
    @apply hover:bg-gray-200 dark:hover:bg-gray-700
    @apply transition duration-300

.strength-meter
    @apply flex h-2 w-full overflow-hidden gap-1

.strength-segment
    @apply h-full flex-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300
    &.active
        @apply bg-opacity-100

.generate-button
    @apply w-full rounded-[12px] px-4 py-3
    @apply bg-primary-500 text-white font-medium
    @apply hover:bg-primary-600 
    @apply focus:outline-none focus:ring-2 focus:ring-primary-300
    @apply disabled:opacity-50 disabled:cursor-not-allowed
    @apply transition duration-300
    @apply text-center

.options-container
    @apply w-full p-4 bg-gray-50 dark:bg-gray-900 rounded-[12px]

.options-grid
    @apply grid grid-cols-1 sm:grid-cols-2 gap-3

.option-item
    @apply mb-2

.option-label
    @apply flex items-center space-x-2 cursor-pointer
    @apply text-gray-800 dark:text-gray-200
    @apply hover:text-primary-600 dark:hover:text-primary-400
    @apply transition duration-300

.form-checkbox
    @apply rounded text-primary-500 
    @apply focus:ring-primary-400
    @apply transition duration-300
</style>
