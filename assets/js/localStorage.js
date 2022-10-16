// Creates buttons based off the localStorage
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

// Clears out the saved city buttons
function deleteContent(){
    $('#custom-btn').empty()
}

// Saves searched cities to local storage
function addToSearchList(event){
    if(!event){
         
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

// Event Listener for the saved cities that are listed
$("#custom-btn").on("click", (event) => {
    let city = $(event.target).attr('id')
    runSearch(city)
});

// Calls the create button when the file is loaded
popContent()