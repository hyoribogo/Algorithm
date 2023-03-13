const solution = my_string => [...my_string]
                            .filter(i => !isNaN(i))
                            .map(i => +i)
                            .sort((a, b) => a - b)