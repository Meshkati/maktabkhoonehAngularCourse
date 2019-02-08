import { PersianNumberPipe } from "./persian-number.pipe";

describe('PersianNumber pipe test!', () => {
    it('It should changed the number to persian symbols', () => {
        const persianNumber = new PersianNumberPipe();
        const result = persianNumber.transform('1234');
        
        expect(result).toEqual('۱۲۳۴');
    })

    it('It should work with other characters', () => {
        const persianNumber = new PersianNumberPipe();
        const result = persianNumber.transform('Ali123');
        
        expect(result).toEqual('Ali۱۲۳');
    })
})