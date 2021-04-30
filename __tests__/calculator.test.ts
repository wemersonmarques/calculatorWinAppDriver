import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
import CalculatorFactory from '../pages/CalculatorFactory'
import CalculatorPage from "../pages/CalculatorPage"

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
        await calculadoraPage.botaoLimpar.click()
    })

    test('99 mais 99 deve ser igual 198', async () => {
       expect(await calculadoraFactory.somar('99', '99')).toBe('198')
    })

    test('0 mais 0 deve ser igual 0', async () => {
        expect(await calculadoraFactory.somar('0', '0')).toBe('0')
    })

    test('15 mais 1 deve ser igual 16', async () => {
        expect(await calculadoraFactory.somar('15', '1')).toBe('16')
    })

    test('-1 mais 0 deve ser igual -1', async () => {
        expect(await calculadoraFactory.somar('-1', '0')).toBe('-1')
    })
})