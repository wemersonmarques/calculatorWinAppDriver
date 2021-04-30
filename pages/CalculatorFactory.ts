import CalculatorPage from "./CalculatorPage";

class CalculatorFactory {
    private page: CalculatorPage

    constructor(page: CalculatorPage) {
        this.page = page
    }

    async somar(a: string, b: string) {
        await this.clicarNoNumero(a)
        await this.page.botaoSoma.click()
        await this.clicarNoNumero(b)
        await this.page.botaoIgual.click()
        return (await this.page.resultado.getText()).replace('A exibição é ', '')
    }

    async clicarNoNumero(numerosParaClicar: string) {
        for (const numero of numerosParaClicar) {
            if (numero == '-') {
                await this.page.botaoMenos.click()
                continue
            }

            await this.page.numerosMap.find(numeroMap => numeroMap.numero.toString() == numero).mapeamento.click()           
        }
    }
}

export default CalculatorFactory