console.log('ciao');

//scritto il programma da 1 a 100
for (let i = 1; i <= 100; i++) {

    //creato la variabile dei multipli sia di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        
    }
    
    //multipli di 3
    if (i % 3 === 0) {
        console.log('fizz');  
    }
    //multipli di 5
    else if (i % 5 === 0){
        console.log('buzz');
        
    }

    

    else {
        console.log(i);
    }
    
  

} 
