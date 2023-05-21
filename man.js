var a=1;
console.log(a);
/*while (a<10){
    a=a+1;
    console.log(a);
}*/
//operadores aritmeticos
//operador +
var oper1=10;
var oper2=200;
var sum=oper1+oper2;
console.log(sum);
var cad="hola";
sum=oper1+cad;
console.log(sum);
//deber completar un ejemplo de los operadores -resta *multiplicacion /division

//operdador ++
var a=1;
while (a<10){
    a++;
    console.log(a);
}
var b=1;
/*for(b=2;b<=5;b++){
    console.log(b);
}*/
//deber operador resta b--
//exponente
var n1=4;
var n2=2;
var ex=n1**n2;
console.log(ex);
var n1=4;var n2=2;var n3=4;var n4=2;var n5=4;var n6=2;var n7=4;var n8=2;var n9=4;var n10=2;var n11=4;var n12=2;var n13=4;var n14=2;
//asignacion de forma areviada
n1=3;
console.log(n1=3);
//sumar dos numeros de forma abreviada
console.log(n3+=n4);
//restar dos numeros
console.log(n5-=n6);
//multiplicar dos numeros de forma abreviada
console.log(n7*=n8);
//dividir dos numeros
console.log(n9/=n10);
//sacar el porcentaje dos numeros de forma abreviada
console.log(n11%=n12);
//sacar la potencacion de forma abreviada
console.log(n13**=n14);
var nComp1=5;
var nComp2="5";
var nComp3=10;
//operador de igualdad  "=="---> si el primer valor es igual al
//segundo valor dara como resultado en "true", de lo 
//contrario seia falso
var rescomp1=(nComp1==nComp2);
console.log("El resultado de la comparacion es :" + rescomp1);
if(nComp1==nComp2){
    console.log("Verde")
}
else{
    console.log("Falso")
}
//si el primer valor es igual al segundo valor y son del mismo tipo de dato y tambien el mismo valor, nos dara como resultado un verdadero, de lo contrario nos dara un falso
var rescomp2=(nComp1===nComp2);
console.log("El resultado de la comparacion es :" + rescomp2);
//Deber =! diferente que
        /*===! diferente valor o diferenre tipo
        > mayor que
        < menor que 
        >=mayor igual
        <=menor igual*/
//Operador logicos 
var nOperlog1 = 5;
var nOperlog2 =15;
var nOperlog3 =30;
//operador and "&&" true las dos funciones tienen que ser verdadero para que se cumpla la condicon y si una no cumpla va a salir falso y si las dos son falsos va a salir falso
//true && true --> true 
//true && false -->  False
//false && true -->  False
//false && false --> False
var resOperlog1=(nOperlog1>nOperlog2)&&(nOperlog2<nOperlog3);
console.log(resOperlog1);
//la negacion cambia el resutado verdadero o falso
//||<--- our