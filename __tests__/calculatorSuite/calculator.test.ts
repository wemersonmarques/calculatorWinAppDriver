import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
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
    
    describe('Subtracao suite', () => {
        test('-1 menos 0 deve ser igual -1', async () => {
            expect(await calculadoraFactory.subtrair('-1', '0')).toBe('-1')
        })
    
        test('100 menos 100 deve ser igual 0', async () => {
            expect(await calculadoraFactory.subtrair('100', '100')).toBe('0')
        })
    
        test('100 menos 1000 deve ser igual 0', async () => {
            expect(await calculadoraFactory.subtrair('100', '1000')).toBe('-900')
        })
    
        test('1000 menos 100 deve ser igual 0', async () => {
            expect(await calculadoraFactory.subtrair('1000', '100')).toBe('900')
        })
    })

    describe('Multiplicacao suite', () => {
        test('1 vezes 0 deve ser igual 0', async () => {
            expect(await calculadoraFactory.multiplicar('1', '0')).toBe('0')
        })
    
        test('1 vezes 1 deve ser igual 1', async () => {
            expect(await calculadoraFactory.multiplicar('1', '1')).toBe('1')
        })
    
        test('1 vezes -1 deve ser igual -1', async () => {
            expect(await calculadoraFactory.multiplicar('-1', '1')).toBe('-1')
        })
    
        test('100 vezes 10 deve ser igual 1000', async () => {
            expect(await calculadoraFactory.multiplicar('100', '10')).toBe('1.000')
        })
    })

    describe('Divisao suite', () => {
        test('1 dividido por 0 deve ser igual 0', async () => {
            expect(await calculadoraFactory.dividir('1', '0')).toBe('Não é possível dividir por zero')
        })
    
        test('10 divido por 1 deve ser igual 10', async () => {
            expect(await calculadoraFactory.dividir('10', '1')).toBe('10')
        })
    
        test('100 divido por 10 deve ser igual 10', async () => {
            expect(await calculadoraFactory.dividir('100', '10')).toBe('10')
        })
    
        test('-10 divido por 100 deve ser igual -0,1', async () => {
            expect(await calculadoraFactory.dividir('-10', '100')).toBe('-0,1')
        })
    })
})