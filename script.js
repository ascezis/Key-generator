//Получаю значения
let gen_1 = document.getElementById('gen_1');
let copy = document.getElementById('copy');
let clear = document.getElementById('clear');

function GenPassLevelOne(){
    let generated = '';
    let Pass_elem_s1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqerstuvwxyz1234567890!@#$%^&*_-+=[]{}()<>|/?;,:,,,";

    for (let i = 0; i < Pass_elem_s1.length; i++) {
        if (generated.length >= 8){
            break;
        }
        else {
            generated += Pass_elem_s1.charAt(Math.floor(Math.random() * Pass_elem_s1.length))
        }
    }
    return generated;
}

//Обработчик

gen_1.addEventListener('click', () => {
    document.getElementById('return_value').value = GenPassLevelOne();
});

//Функция копирования:

// function copyToClipboard() {
//     var input = document.getElementById('myInput');
//     navigator.clipboard.writeText(input.value)
//         .then(() => {
//             alert('Текст скопирован в буфер обмена');
//         })
//         .catch(err => {
//             console.error('Ошибка при копировании: ', err);
//         });
// }

//Функция копирования
    function CopyKeys(){
        let input = document.getElementById('return_value');

        navigator.clipboard.writeText(input.value)
            .then( () => {
                let time = setTimeout( ()=>{
                    copy.innerText = "Copied!";
                }, );
                //
                let time_2 = setTimeout( ()=>{
                    copy.innerText = "Copy";
                }, 500 )

            })
            .catch( ()=>{
                alert('Ошибка копирования!')
            } )
    }


//Обработчик

copy.addEventListener('click', CopyKeys);

//Функция очистки поля

function ClearInput(){
    let input = document.getElementById('return_value');
    input.value = ' ';
}

//Обработчик

clear.addEventListener('click', ClearInput);
