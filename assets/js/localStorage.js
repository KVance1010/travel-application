function popContent(){
    var popBtn = JSON.parse(localStorage.getItem("countrySave")) || []
   if(popBtn.length!=0){
       for(i=0;i<popBtn.length;i++){
           var newBtn = document.createElement('button')
               $(newBtn).text(popBtn[i])
               $(newBtn).attr('id',popBtn[i])
               $('#custom-btn').append(newBtn)
       }
   }
   }
   popContent()
   function deleteContent(){
       $('#custom-btn').empty()
   }
   function addToSearchList(event){
       if(!event){
           alert("enter a country name")
       }else{
           var countryArr = JSON.parse(localStorage.getItem("countrySave")) || []
           for(i=0;i<countryArr.length;i++){
               if(event === countryArr[i]){
                   repeat = 2
               }
           }
           if(repeat==1){
               countryArr.push(event)
               if(countryArr.length > 5){
                   countryArr.splice(0,1)
               }
               localStorage.setItem("countrySave",JSON.stringify(countryArr))
               deleteContent()
               popContent()
           }}}
           
           $("#custom-btn").on("click", (event) => {
            let city = $(event.target).attr('id')
             runSearch(city)});