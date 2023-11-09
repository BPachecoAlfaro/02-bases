import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {

    test('should return the age of a person', () => {

        const birthDate = '1985-10-21';
        const age = getAge( birthDate );

        expect( typeof age ).toBe('number');

    });

    test('getAge should return curren age', () => {

        const birthDate = '1985-10-21';
        const age = getAge( birthDate );

        const calculatedAge = new Date().getFullYear() - new Date(birthDate).getFullYear();


        expect( age ).toBe( calculatedAge );

    });

    test('getAge should return 0 years', () => {

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthDate = '1985-10-21';
        const age = getAge(birthDate);

        expect( age ).toBe(0);
        expect( spy ).toHaveBeenCalled();

    });

});