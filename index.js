// function fibo(first, second, counter){
//     if(counter<=10){
//     console.log(first);

//         let c = first + second;
//         return fibo(second,c,counter+1);
//     }
    
// }
// fibo(1,1,1);



function factorial(num,fact){
    if(num>0){
        fact*=num;
        return factorial(num-1,fact);
    }else{
        return fact;
    }
}console.log(factorial(5,1))