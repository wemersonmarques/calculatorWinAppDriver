import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
import { cenarios } from '../../data/calculatorSuite/dynamicCalculatorData'
import CalculatorFactory from '../../pages/CalculatorFactory'
import CalculatorPage from "../../pages/CalculatorPage"

const capabilities = windowsAppDriverCapabilities('Microsoft.WindowsCalculator_8wekyb3d8bbwe!App')
const calculadoraPage = new CalculatorPage()
const calculadoraFactory = new CalculatorFactory(calculadoraPage)

jest.setTimeout(50000);

beforeAll(() => {
    return driver.startWithCapabilities(capabilities)
})

afterAll(() => {
    return driver.quit()
})

describe('Calculator Suite Tests', () => {
    beforeEach(async () => {
        await calculadoraFactory.limpar()
    })

    describe('Soma suite', () => {
        cenarios.forEach(cenario => {
            test(cenario.name, async () => {
                expect(await calculadoraFactory.somar(cenario.firstNumber, cenario.secondNumber)).toBe(cenario.expectedResult)
            })
        })
    })
})