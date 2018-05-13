function search(){
    let text = $('#searchText').val();
    let cities = $('#towns').find('li');
    let matches = 0;

    for (let city of cities) {
        if(city.textContent.includes(text)){
            $(city).css("font-weight", "bold");
            matches++;
        }else{
            $(city).css("font-weight", "none");
        }
    }
    $('#searchText').val('');
    $('#result').text(`${matches} matches found.`);



}