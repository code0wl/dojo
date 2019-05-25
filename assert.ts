export default class Assert { 

    assertArray(expectation, result, test = ""){
        if(expectation.length !== result.length){
            return this.output(expectation, result, test, false);
        }
        let isSame = true;
        for(let i = 0; i < expectation.length; i++){
            if(expectation[i] !== result[i]){
                isSame = false;
                break;
            }
        }
        return this.output(expectation, result, test, isSame);
        
    }
    
    assertObj(expectation, result, test = ""){
        let isSame = true;
        let keys1 = Object.keys(result);
        let keys2 = Object.keys(expectation);
        if(keys1.length !== keys2.length){
            isSame = false;
        }
        for(let prop in result){
         if(expectation[prop] !== result[prop]){
             isSame = false;
         }
        }

        return this.output(expectation, result, test, isSame)
    }
    
    output(expectation, result, test, isSame){
        if(isSame){
            return `::TEST ${test.toUpperCase()} PASSED::`
        }else{
            if(typeof expectation === 'object'){
                return `::TEST ${test.toUpperCase()} FAILED:: EXPECTED ${JSON.stringify(expectation)} but got ${JSON.stringify(result)}`
            }else{
                return `::TEST ${test.toUpperCase()} FAILED:: EXPECTED ${result} but got ${expectation}`
            }
        }
    }
    assert(expectation, result, test=""){
        if(typeof expectation !== typeof result){
            test += ` TYPE DIFFERENCE ${typeof expectation} compared to ${typeof result}`
            return this.output(expectation, result, test, false)
        }
        if(typeof expectation === "object"){
            return this.assertObj(expectation, result, test)
        } else if(Array.isArray(expectation)){
            return this.assertArray(expectation, result, test);
        } else{
            let isSame = expectation === result ? true : false;
            return this.output(expectation, result, test, isSame)
        }
    }

}