const solution = (num_list) => {
    const even = num_list.filter(i => !(i % 2)).length
    return [even, num_list.length - even]
}