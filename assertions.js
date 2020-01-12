/* Guillermo Gonzalez Martin  */
/* ABB Challenge              */
/* ggonmar@gmail.com          */


var Assertions = function() {
    this.assertEquals = function(description, real, expected)
    {
        if(real==expected)
        {
            return testOK(description);
        }
        else 
        {    
            testFailed(description);
            console.log(`
            - Expected: \x1b[31m${expected}\x1b[0m
            - Actually: \x1b[31m${real}\x1b[0m \n`);
            throw new Error(`Assertion failed`);
        }
    };

    this.assertContains = function(description, container, containee)
    {
        if(container.includes(containee))
        {
            return testOK(description);
        }
        else 
        {    
            testFailed(description);
            console.log(`
            - Expected: \x1b[31m${container}\x1b[0m 
            - to contain: \x1b[31m${containee}\x1b[0m 
            But it didn't.\n`);
            throw new Error(`Assertion failed`);
        }
    };

    this.assertPromiseEquals = function(description, promise, expected)
    {
        Promise.resolve(promise).then((result) => {
            return this.assertEquals(description, result, expected);
        });

    };

    this.assertPromiseContains = function(description, promise, expected)
    {
        Promise.resolve(promise).then((result) => {
            return this.assertContains(description, result, expected);
        });

    };

    function testOK(description)
    {
        console.log(`${description} ::\x1b[1m\x1b[32m OK \x1b[0m`);
        return true;
    }
    function testFailed(description)
    {
        console.log(`${description} ::\x1b[1m\x1b[31m FAILED \x1b[0m`);
    }
};
module.exports = new Assertions();