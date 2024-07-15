//1
let a=100;
for(i=0;i<=a;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

//2
function p(str)
{
    let str1="";
    let k;
    for(k=str.length-1;k>=0;k--)
    {
        str1+=str[k];
    }
    if(str==str1)
    {
        return("Palindrome");
    }
    else{
        return("Not a Palindrome");
    }
}
console.log(p("level"));

//3
function array(a)
{
    let num1=0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]>=num1){
            num1=a[i];
    }
}
    return num1;
}
    const arr=[16,26,54,35]
    console.log(array(arr))

//4
function occ(l){
    let result={}
    for(let m=0;m<l.length;m++){
        let ch=l.charAt(m)
    
    if(!result[ch])
        result[ch]=1;
    else
        result[ch]+=1
    }
    return result;

}
console.log(occ("I am Nisha"));


//5
function longest(str)
{ 
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0];
} 
console.log(longest("hello everyone"));

//6

function f(num){
    let j ;
    let fact=1;
    for(j=1;j<num;j++){
        fact=fact*j;
    }
return(fact);
}
console.log(f(26));

//7
function temp(cel){
    return((9/5)*cel+32);
}
console.log(temp(26));

//8
let hash=[0,1,3,4,6,7,5,8];
let x=hash.length;
let sum1=0;
let z;
for(z=0;z<=x;z++)
{
    sum1=sum1+z;
}
let sum=0;
let q;
for(q=0;q<x;q++){
    sum=sum+hash[q];
}
console.log(sum1-sum);
