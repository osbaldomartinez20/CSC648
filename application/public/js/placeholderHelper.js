function changePlaceholder() {
    if(document.getElementById('dropDownCategories').value == 9) {
        document.getElementById('searchKeyword').setAttribute('placeholder', 'Please enter your class section (ex: CSC 648)');
    } else {
        document.getElementById('searchKeyword').setAttribute('placeholder','What are you looking for?');    
    }
}