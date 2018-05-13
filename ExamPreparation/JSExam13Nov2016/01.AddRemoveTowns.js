function attachEvents() {
    let towns = $('#towns');

    function add() {
        let inputText = $('input').val();
        if (inputText !== '') {
            $(towns).append($(`<option>${inputText}</option>`));
            $('input').val('');
        }
    }

    function deleteTown() {
        towns.find('option:selected').remove();
    }

    let deleteBtn = $('#btnDelete');
    deleteBtn.on('click', deleteTown);
    let btnAdd = $('#btnAdd');
    btnAdd.on('click', add);

}
