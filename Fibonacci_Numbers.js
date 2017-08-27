function fib(num) {
	//Letter input
	if (typeof(num) == "string") {
		return "Use integer inputs for this function"
	} else {
		//Negative number input
		if (num <= 0) {
			fibArr = []
		//Input is 1
		} else if (num == 1) {
			fibArr = [0]
		//Input is 2
		} else if (num == 2) {
			fibArr = [0,1]
		//All other input cases
		} else {
			fibArr = [0,1]
			//Start at the first index of the array. Since I've hard coded the starting array with two values, I need to adjust my stop condition to num -2. Increment by 1 to grab each value
			for(var i = 0; i < num-2; i++) {
		        fibArr[fibArr.length] = fibArr[fibArr.length-1] + fibArr[fibArr.length-2]
			}
		}
	}
	return fibArr
}
