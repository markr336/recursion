/* Fibonacci
F0 = 0,
F1 = 1
F2 & onwwards = Fn-1 + Fn-2
*/
function fibsIt(n) {
    let fibNum;
    const fibArray = []
    for (let i = 0; i <= n ; i++) {
        if (n < 0) {
            return fibNum, fibArray
        }     
        else if (i <= 1) {
            fibNum = i
            fibArray.push(i)
        } 
        
        if (i > 1) {
            fibNum = fibArray[i - 1] + fibArray[i - 2]
            fibArray.push(fibArray[i - 1] + fibArray[i - 2])
        }
    }
    return {
        fibNum: fibNum,
        fibArray: fibArray
    }
}

let n = 4
console.log(`FibNum ${n} is:`, fibsIt(n).fibNum, fibsIt(n).fibArray)

console.log(`FibNum ${n} is:`, fibsRec(n).fibNum, fibsRec(n).fibArray)


function fibsRec(n) {
    if (n < 0) {                                // Base Case
        return {
            fibNum: undefined,                  
            fibArray: []
        }
    } else if (n <= 1) {                        // Base case to return either 0 or 1
        return {
            fibNum: n,
            fibArray: [0, 1].slice(0, n + 1)
        }
    }
    
    if (n > 1) {                                // Recursive call
        const previousFibNums = fibsRec(n - 1).fibArray
        const fibNum = fibsRec(n - 1).fibNum + fibsRec(n -2).fibNum
        return {
            fibNum: fibNum,
            fibArray: [...previousFibNums, fibNum]
        }
    }
}
/* Spread operator is used here as the arrays need to be expanded & concantenated into
    a single array
FibNum 2 is: 1 [ [ 0, 1 ], 1 ]      withour spread operator
FibNum 2 is: 1 [ 0, 1, 1 ]          with spread operator

FibNum 3 is: 2 [ [ [ 0, 1 ], 1 ], 2 ]   without spread operator
FibNum 3 is: 2 [ 0, 1, 1, 2 ]           with spread operator
 */