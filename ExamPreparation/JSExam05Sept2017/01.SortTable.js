function sort(index, descending){
    let tableRows = $('tbody > tr').toArray();
    console.log(tableRows);
    tableRows.forEach(r => console.log($($(r.children[0])).text()));


    if(index === 0){
        if(descending){
           let sorted =  tableRows.sort((a, b) => ($($(b.children[0])).text()).localeCompare($($(a.children[0])).text()));
           $('tbody').append(sorted)
        }else{
            let sorted = tableRows.sort((a, b) => ($($(a.children[0])).text()).localeCompare($($(b.children[0])).text()));
            $('tbody').append(sorted)
        }

    }else if(index === 1){
        if(descending){
            let sorted =  tableRows.sort((a, b) => ($($(b.children[1])).text()) - ($($(a.children[1])).text()));
            $('tbody').append(sorted)
        }else{
            let sorted = tableRows.sort((a, b) => ($($(a.children[1])).text()) - ($($(b.children[1])).text()));
            $('tbody').append(sorted)
        }

    }

}