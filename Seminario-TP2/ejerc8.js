function valorTotal(prices, amounts){ //anda
    let total= 0 ;
    for (const i in prices){
        total += (prices[i]*amounts[i]);
    }
    return total; 
}
