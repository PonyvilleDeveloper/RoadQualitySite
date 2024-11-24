var slider = 1;

function show_cards() {
    const main_block = document.getElementById("team_block");
    var cards = main_block.children;
    for(var i = 0; i < 7; i++)
        if(i < (slider - 1) || i > (slider + 1))
            cards[i].style.display = 'none';
        else
            cards[i].style.display = 'block';
}

left_click = () => {
    if(slider > 1) slider--;
    show_cards();
}

right_click = () => {
    if(slider < 5) slider++;
    show_cards();
}