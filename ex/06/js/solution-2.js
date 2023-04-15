document.querySelector(".lotto__start__btn").addEventListener("click",()=>{
            createNum();
            document.querySelector(".lootto__num").innerHTML = `${randomTot.join(', ')}`;
            randomTot=[];
        });
        
        let randomTot = []; 
        function createNum(){
            let randomNum = Math.floor(Math.random() * 45) ;

            for(let i =0; i<60 ; i++){
                let randomNum = Math.floor(Math.random() * 45) ;
                

                if(randomTot.indexOf(randomNum)<0){

                    randomTot.push(randomNum);
                }

                if(randomTot.length == 5)break
            }
            randomTot.sort(function(a,b){
                return a-b;
            });
        }