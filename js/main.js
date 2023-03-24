

let zmienna1 = "Uwielbiam JavaScript";
let zmienna2 = "Jestem świetnym programistą";


function testString (str1, str2) {
        let p1 = (str1.length);
        let p2 = (str2.length);
        let pWynik = "";

        if (p1 > p2) 
            pWynik = str1;
        else if (p1 < p2 )
            pWynik = str2;
        
        return pWynik;    
    }
  
    console.log(testString(zmienna1, zmienna2));


