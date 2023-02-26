function solution(numer1, denom1, numer2, denom2) {
    let result_de=0;
    let result_nu=0;
    if (denom1===denom2){
        result_nu=numer1+numer2;
        result_de=denom1
    }
    else {
        result_nu=numer1*denom2+numer2*denom1;
        result_de=denom1*denom2;
    }
    return div(result_nu, result_de);
}

function div(n1, n2) {
    if (n1===1 || n2===1){
        return [n1, n2];
    }
        
    for (let i=2; i<=Math.min(n1,n2); i++){
        if(n1%i===0 && n2%i===0) {
            n1/=i;
            n2/=i;
            [n1, n2] = div(n1, n2);
            break;
        }
    }
    return [n1, n2];
}