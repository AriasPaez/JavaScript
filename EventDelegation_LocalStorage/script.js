// LOCAL STORAGE: Guarda cadenas de texto: clave => valor


//****************** Event  Delegation ***********************
const main_btn = document.querySelector('#main_button');
const div_buttons = document.querySelector('#div_buttons');
const background_body = document.querySelector('#background_body');

// (() => {
    main_btn.addEventListener('click', add_buttons);
    div_buttons.addEventListener('click', delegation);
// } )();

if (localStorage.getItem('background_body') === null){
    background_body.className = 'bg-dark';
}else{
    background_body.className = localStorage.getItem('background_body');
}


function add_buttons(e){
    e.preventDefault();
    div_buttons.innerHTML = `
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Waring</button>  
    `;
}

function delegation(e){
    e.preventDefault();
    const button_colors = e.target.classList[1];

    switch (button_colors) {
        case ('btn-primary'):
            background_body.className = 'btn-primary';
            localStorage.setItem('background_body', 'btn-primary');
            break;
        case ('btn-secondary'):
            background_body.className = 'btn-secondary';
            localStorage.setItem('background_body', 'btn-secondary');
            break;
        case ('btn-danger'):
            background_body.className = 'btn-danger';
            localStorage.setItem('background_body', 'btn-danger');
            break;
        case ('btn-success'):
            background_body.className = 'btn-success';
            localStorage.setItem('background_body', 'btn-success');
            break;
        case ('btn-warning'):
            background_body.className = 'btn-warning';
            localStorage.setItem('background_body', 'btn-warning');
            break;
    
        default:
            break;
    }
}