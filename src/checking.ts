/**
 * Just a simple function to verify that jest and jsdoc are working correctly.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export default function sum(a:number, b:number):number {
    // adding a comment here
    return a + b;
}

/**
 * Class for seeing if jsdoc is working correctly.
 * @property {number} param1 Just a number to see what happens.
 * @property {string} param2 Just to see what happens when a spring is specified.
 */
class WhoKnows {
    param1:number;
    param2:string;

    /**
     * This is a constructor to see what is happening.
     */
    constructor() {
        this.param1 = 0;
        this.param2 = 'foo';
    }

    /**
     * This is just a method to see what happens when it is part of the class.
     * @param {{}} arg1
     * @param {string} arg2
     * @returns {boolean}
     */
    helpMe(arg1:{}, arg2:string):boolean {
        return true;
    }
}