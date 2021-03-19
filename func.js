const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
const show = document.getElementById('show');
const warning = document.getElementById('warning');


let submit = document.getElementById('submit');
submit.addEventListener("click", added);

function added(e) {
    e.preventDefault;
    if (title.value == '' || author.value == '' || isbn.value == '') {
        warning.innerHTML = ('Please make sure you entered all fields correctly');
        setTimeout(() => warning.remove(), 3000);
        return;
    } else if (title.value != '' && author.value != '' && isbn.value != '') {

        // alert('bisola');

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(`${title.value}`));
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(`${author.value}`));
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(`${isbn.value}`));
        tr.appendChild(td3);

        let td4 = document.createElement("button");
        td4.className = 'butt'
        td4.appendChild(document.createTextNode('x'));
        tr.appendChild(td4);

        show.appendChild(tr);
        show.appendChild(button);

        document.querySelector('#title').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#author').value = '';



        const suck = document.getElementById('suck');
        suck.innerHTML = ('BOOK ADDED!');
        setTimeout(() => suck.remove, 4000);
    }
}

show.addEventListener('click', lilo);

function lilo(e) {
    if (e.target.className == 'butt') {
        e.target.parentElement.parentElement.remove();
    }
}