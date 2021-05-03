import { By2 } from "selenium-appium";

class CalculatorPage {
    get botao0() { return By2.nativeAccessibilityId('num0Button')}
    get botao1() { return By2.nativeAccessibilityId('num1Button') }
    get botao2() { return By2.nativeAccessibilityId('num2Button') }
    get botao3() { return By2.nativeAccessibilityId('num3Button') }
    get botao4() { return By2.nativeAccessibilityId('num4Button') }
    get botao5() { return By2.nativeAccessibilityId('num5Button') }
    get botao6() { return By2.nativeAccessibilityId('num6Button') }
    get botao7() { return By2.nativeAccessibilityId('num7Button') }
    get botao8() { return By2.nativeAccessibilityId('num8Button') }
    get botao9() { return By2.nativeAccessibilityId('num9Button') }
    get botaoLimpar() { return By2.nativeAccessibilityId('clearEntryButton') }
    get botaoIgual() { return By2.nativeAccessibilityId('equalButton') }
    get botaoDivisao() { return By2.nativeAccessibilityId('divideButton') }
    get botaoMultiplicacao() { return By2.nativeAccessibilityId('multiplyButton') }
    get botaoSoma() { return By2.nativeAccessibilityId('plusButton') }
    get botaoMenos() { return By2.nativeAccessibilityId('minusButton') }
    get resultado() { return By2.nativeAccessibilityId('CalculatorResults') }
    

    numerosMap = [
        {numero: 0, mapeamento: this.botao0},
        {numero: 1, mapeamento: this.botao1},
        {numero: 2, mapeamento: this.botao2},
        {numero: 3, mapeamento: this.botao3},
        {numero: 4, mapeamento: this.botao4},
        {numero: 5, mapeamento: this.botao5},
        {numero: 6, mapeamento: this.botao6},
        {numero: 7, mapeamento: this.botao7},
        {numero: 8, mapeamento: this.botao8},
        {numero: 9, mapeamento: this.botao9},
    ]
}

export default CalculatorPage;