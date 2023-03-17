function descendingOrder(n){
    const order = String(n).split("").sort((a,b)=> b-a ).join('')
    return Number(order)
    }