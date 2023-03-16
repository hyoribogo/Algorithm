const solution = phone_number => {
    const l = phone_number.length
    const secret = new Array(l - 4).fill("*")
    return secret.concat([...phone_number].splice(l - 4, 4)).join("")
}