console.log('ciao');

//scritto il programma da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        
    }
    

    if (i % 3 === 0) {
        console.log('fizz');  
    }

    else if (i % 5 === 0){
        console.log('buzz');
        
    }

    

    else {
        console.log(i);
    }
    
  

} 
