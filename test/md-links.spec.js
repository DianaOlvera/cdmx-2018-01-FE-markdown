const { Readme, validate}= require('../src/app.js')

describe('Readme', () =>{
    test('Deberia ser una función', ()=>{
      expect(typeof Readme).toEqual('function');
    });
   });

   describe('validate', () =>{
    test('Deberia ser una función', ()=>{
      expect(typeof validate).toEqual('function');
    });
   });