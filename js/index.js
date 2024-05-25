
var bookMarkNameInput = document.getElementById("bookMarkName");
var webSiteUrlInput = document.getElementById("webSiteUrl");

var bookList = [];
if(localStorage.getItem("bookContainar") !==null) {

 bookList = JSON.parse(localStorage.getItem("bookContainar"));
    displayData();


}


function addBookMark(){
    if(validationName()==true && validationUrl()==true){

   

    var book = {
        name:bookMarkNameInput.value,
        url:webSiteUrlInput.value,
    }


    bookList.push(book);
    localStorage.setItem("bookContainar" ,JSON.stringify(bookList));

    displayData();
    clearForm();

    console.log(bookList);
 }
}



function clearForm(){
bookMarkNameInput.value = null;
webSiteUrlInput.value = null;


}




function displayData(){
    var cartona = "";
    for (var i = 0; i < bookList.length; i++) {
cartona+=` <tr>
<td>${i+1}</td>
<td>${bookList[i].name}</td>
<td><button onclick="visitUrl(${i})" class="btn btn-warning"><i class="fa-solid fa-eye"></i> Visit</button></td>
<td><button onclick="deleteItem()" class="btn btn-info"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
</tr>

`
      
    }

document.getElementById("tableData").innerHTML = cartona;  
}



function deleteItem(indexItem){

    bookList.splice(indexItem , 1);
    localStorage.setItem("bookContainar" ,JSON.stringify(bookList));
    displayData();
    console.log(bookList);
    } 



    
    
    
    function validationName(){
        var text = bookMarkNameInput.value;
        var Regex = /^.{3,}$/
        var msgName = document.getElementById("msgName");
        if (Regex.test(text) == true) {
                bookMarkNameInput.classList.add('is-valid');
                bookMarkNameInput.classList.remove('is-invalid');
                msgName.classList.add("d-none");
                 return true;
        }
        else{

            bookMarkNameInput.classList.add('is-invalid');
            bookMarkNameInput.classList.remove('is-valid');
            msgName.classList.remove("d-none");
            return false
        }
    }


    function validationUrl() {

        var textUrl = webSiteUrlInput.value;
         var httpsRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
         var msgUrl = document.getElementById("msgUrl")
         if (httpsRegex.test(textUrl) == true) {
            webSiteUrlInput.classList.add('is-valid');
            webSiteUrlInput.classList.remove('is-invalid');
            msgUrl.classList.add("d-none");
                 return true;
         }
          else
           {
            webSiteUrlInput.classList.add('is-invalid');
            webSiteUrlInput.classList.remove('is-valid');
            msgUrl.classList.remove("d-none");
                     return false;

         }
    }

   












  



/* visit funcation */


function visitUrl(index) {
    window.open(bookList[index].url,'_blank');

    
}