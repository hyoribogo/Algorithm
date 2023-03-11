const solution = (numbers, direction) => direction === 'left' ? 
        numbers.splice(1, numbers.length - 1).concat(numbers[0]) : 
        numbers.splice(numbers.length - 1, 1).concat(numbers.splice(0, numbers.length))