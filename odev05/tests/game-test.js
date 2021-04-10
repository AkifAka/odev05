import {tikla1} from "../src/index";
test('geçersiz',()=>{
    expext(()=>tikla1(-1)).toThrow();
})