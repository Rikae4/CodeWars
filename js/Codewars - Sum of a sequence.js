/* Codewars - Sum of a sequence

Your task is to write a function which returns the sum of a sequence of integers. The sequence is defined by 3 non-negative values: begin, end, step. If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. 
*/

// The parameter is three numbers
// We need return the sum of all the sequence. So the first number is the starting number. The second number is where you end and the third number is the steps you take to reach the end value. 
// For example input: 2,6,2 
// Output: 12 (2 + 4 + 6) So you start at 2 and then go up 2 steps until you reach the end value of 6. Then add the sum
// Store the sum in a variable
// Use a for loop to iterate through the numbers
// We sum the result by += i
// Return result

const sequenceSum = (begin, end, step) => {
    let result = 0
    for (let i = begin; i <= end; i += step){
        result += i
    }
    return result
};

/*Test Cases  
Example 1:
    Input: 2,2,2
    Output: 2 

Example 2:
    Input: 2,6,2 
    Output: 12 (2 + 4 + 6)

Example 3:
    Input: 1,5,1 
    Output: 15 (1 + 2 + 3 + 4 + 5)

Example 4:
    Input: 1,5,3
    Output: 5 (1 + 4)
*/