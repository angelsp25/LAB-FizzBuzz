//Angel Sanchez Paez - Generation CH62

// Inicio
let numeros; //Variable que llevará el conteo de los números del 1 al 1000

for(numeros = 1; numeros <= 1000; numeros++) //Bucle que recorre los números del 1 al 1000
    {
        if(numeros % 5 == 0 && numeros % 3 == 0)
        {
            console.log("FizzBuzz"); //Sí el número es divisible entre 5 y 3, se imrpime FizzBuzz
        }
        else if(numeros % 5 == 0) //Sí el número es divisible entre 5, se imrpime Buzz
        {
            console.log("Buzz");
        }
        else if(numeros % 3 == 0) //Sí el número es divisible entre 3, se imrpime Fizz
        {
            console.log("Fizz");
        }
        else //Sí el número no es divisible entre 5 y 3, 5 ó 3, se imrpime el número
        {
            console.log(numeros);
        }
    }
    
    //Fin