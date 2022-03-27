// return array with no duplicate numbers.  New array must equal length of previous array, with new array length equaling length of original array.  If new array length is less
// then new put _ in empty space of array.  Also return the number of numbers in array.


x = [1,1,2]
y = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicates (arr) {
    const newArr =[]
    let k=0
    for (i=0; i<arr.length;i++) {
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i])
            k+=1
        }
    }
    while (newArr.length < arr.length) {
        newArr.push("_")
    }
    const output = `${k}, nums = [${newArr}]`
    return output
}
console.log(removeDuplicates(x))
console.log(removeDuplicates(y))