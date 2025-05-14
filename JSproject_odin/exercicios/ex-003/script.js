let select = document.querySelector('select');
let list = document.querySelector('ul');
let h1 = document.querySelector('h1');

select.onchange = function() {
    let choice = select.value;
    let day

        switch (choice) {

            case 'Janeiro':
            case 'Março': 
            case 'Maio':
            case 'Julho':
            case 'Agosto':
            case 'Outubro':
            case 'Dezembro':
                day = 31
                break;

            case 'Abril':
            case 'Junho':
            case 'Setembro':
            case 'Novembro':
                day = 30
                break;
            
            case 'Fevereiro':
                day = 28
                break;
            
            default:
                day = 0
                break;
        }
            
    createCalendar(day, choice);
}

function createCalendar(day, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (let i = 1; i <= day; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31, 'Janeiro');
