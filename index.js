function fibo(first, second, counter){
    if(counter<=10){
    console.log(first);

        let c = first + second;
        return fibo(second,c,counter+1);
    }
    
}
fibo(1,1,1);