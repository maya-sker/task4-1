
        function generatearray(size){
            var randomArray=[];

            for(var i=0 ; i < size ; i++){
                randomArray.push(Math.floor(Math.random()*9))}
                return randomArray;
        }
        
        var myarray =generatearray(9);
        console.log(myarray);
        document.write("The array is :")
        document.write(myarray+"<br/>");
        
        var sum1=0;
        var sum2=0;
        for(var i=0 ; i < myarray.length ; i++){
         if (myarray[i]%2==0)
          sum1+=myarray[i];}
          console.log(sum1);
          document.write("sum of even number:"+sum1+"<br/>");
         


        for(var i=0 ; i < myarray.length ; i++){
            if (i<5)
            sum2+=myarray[i];}
            console.log(sum2);
            document.write("sum of number less than five :"+sum2 +"<hr/>");



        var object ={
            name:'maya',
            age:22,
            num:+95868321,
            email:"maya@gmail.com",
        }
        console.log(object);
        document.write("print object:")
        document.write(object +"<hr/>");


        document.write("print the elemnts:")
         for(var key in object)
         {
             console.log(key + ":" + object[key]);
             document.write("<br/>"+key + ":" + object[key]);

         }
        

    


