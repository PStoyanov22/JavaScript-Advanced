function move(parameter){

   let avTowns = $('#available-towns');
   let selTowns = $('#selected-towns');
   let output = $('#output');
    if(parameter === 'right'){
        let selItem = avTowns.find('option:selected');
        selTowns.append(selItem);

    }else if(parameter === 'left'){
        let selItem = selTowns.find('option:selected');
        avTowns.append(selItem);

    }else if(parameter === 'print'){
        let allItems = selTowns
            .find('option')
            .toArray()
            .map(e => e.textContent)
            .join('; ');
        output.text(allItems);
    }
}