/*
 var v1 = (prompt("Digite o primeiro valor: "))

 var v2 = (prompt("Digite o segundo valor: "))
 
 var v3 = (prompt("Digite o terceiro valor: "))

 if(v1>v2 && v2>v3 || ){alert(`A ordem crescente dos valores é ${v1} - ${v2} - ${v3}` )}
*/

/*
 var a = Number(prompt("Digite o primeiro numero"))
 var b = Number(prompt("Digite o seg numero"))
 var c = Number(prompt("Digite o ter numero"))
  if(a>b && b>c )
  {alert(`A ordem é ${a} - ${b} - ${c}` )}
 
 
  if(a>b && a>c && c>b )
  {alert(`A ordem é ${a} - ${c} - ${b}` )}
 
  if(b>a && a>c)
  {alert(`A ordem é ${b} - ${a} - ${c}` )}
 
  if(b>a && c>a && b>c)
  {alert(`A ordem é ${b} - ${c} - ${a}` )}
 
  if(c>a && a>b)
  {alert(`A ordem é ${c} - ${a} - ${b}` )}
  
  if(c>a && b>a && c>b)
  {alert(`A ordem é ${c} - ${b} - ${a}` )}
*/
/*
var idade = (prompt("Digite sua idade"))

if(idade >=10 && idade <=14){
    alert("Infantil");
    
}
if(idade >=15 && idade <=17){
    alert("Juvenil");
    
}
if(idade >=18 && idade <=25){
    alert("Adulto");
    
}
*/
var n = prompt("Digite um numero");
var total = n/2;

if(n & 1){
    alert(`Este numero é Impar, e elevado ao Quadrada é: ${n**2}`);
} else { 
    alert(`Este numero é Par, e a raiz Quadrada dele é: ${Math.sqrt(n)}`);

}

