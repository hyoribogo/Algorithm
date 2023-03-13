const solution = my_string => [...my_string]
                                .reduce((a, c) => {
                                    return !isNaN(c) ? a + +c : a
                                }, 0)