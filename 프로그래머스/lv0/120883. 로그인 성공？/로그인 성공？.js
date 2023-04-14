function solution(id_pw, db) {
    const [inputId, inputPw] = id_pw
    
    for(const [id, pw] of db) {
        if(inputId === id && inputPw === pw) return "login"
        if(inputId === id) return "wrong pw"
    }
    
    return "fail"
}