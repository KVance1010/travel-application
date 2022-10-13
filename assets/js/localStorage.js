// Adds 
function popContent(){
    let popBtn = JSON.parse(localStorage.getItem("countrySave")) || []
    if(popBtn.length!=0){
        for(const element of popBtn){
            let newBtn = document.createElement('button')
            $(newBtn).text(element)
            $(newBtn).attr('id',element)
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
// TODO: need to add an alert of some sort *********************************           
    }else{
        let countryArr = JSON.parse(localStorage.getItem("countrySave")) || []
        let repeat = 1 ;
        for(const element of countryArr){
            if(event === element){
                repeat = 2
            }
        }
        if(repeat === 1){
            countryArr.push(event)
            if(countryArr.length > 5){
                countryArr.splice(0,1)
            }
            localStorage.setItem("countrySave",JSON.stringify(countryArr))
            deleteContent()
            popContent()
        }
    }
}
           
$("#custom-btn").on("click", (event) => {
    let city = $(event.target).attr('id')
    runSearch(city)
});