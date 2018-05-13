function attachEvents(){
    $('#items').on('click', 'li', selectedItems);

    function selectedItems() {
        let li = $(this);
        if(li.attr('data-selected')){
            li.removeAttr('data-selected');
            li.css('background', '');
        }else{
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    }

    $('#showTownsButton').on('click', extractNumber);

    function extractNumber(){
        let result = [];

       let towns = $('#items li[data-selected=true]').toArray().forEach(t => result.push(t.textContent));

       $('#selectedTowns').text(`Selected towns: ${result.join(', ')}`)

    }


}