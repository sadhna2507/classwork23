// function fibo(first, second, counter){
//     if(counter<=10){
//     console.log(first);

//         let c = first + second;
//         return fibo(second,c,counter+1);
//     }
    
// }
// fibo(1,1,1);



// function factorial(num,fact){
//     if(num>0){
//         fact*=num;
//         return factorial(num-1,fact);
//     }else{
//         return fact;
//     }
// }console.log(factorial(5,1))


// function digit(num,count){
//     if(num>0){
//         count++;
//         num = Math.floor(num/10);
//         return digit(num,count);
//     }
//     console.log(count);
// }digit(457767,0)



function reverse(num1,num2){
    if(num1<=num2){
        console.log(num2);
        return reverse(num1,num2-1)
    }
}
reverse(1,20);