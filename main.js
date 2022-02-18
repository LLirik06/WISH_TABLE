// let spisok = document.getElementById('spisok')
// let li = document.createElement('li')
// li.innerHTML = "4"
// spisok.appendChild(li)

// let div = document.getElementById('div')
// for(let i = 1; i <= 6; i++){
//     let div_new = document.createElement('div')
//     div_new.innerHTML = i
//     div.appendChild(div_new)
//     div_new.classList.add(`box_${i}`)
// }

// let table = document.getElementById("table")
// for(i = 1; i <= 4; i++){
//     let tr = document.createElement('tr')
//     for(j = 1; j <= 6; j++){
//         let td = document.createElement('td')
//         td.innerHTML = ''
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }

// let tds = document.querySelectorAll('td');
// for (let с = 0; с < tds.length; с++) {
//     tds[с].addEventListener('click', function fun(){
//         let input = document.createElement('input');
//         input.value = this.innerHTML;
//         this.innerHTML = "";
//         this.appendChild(input);
        

//         let new_el = this
//         input.addEventListener('blur', function(){
//       new_el.innerHTML = this.value;
//       new_el.addEventListener('click', fun)
//         });

//         this.removeEventListener('click', fun);
//     });
    
// }
alert('Привет это таблица жеданий впиши сюда все свои желания, потом перезагрузи страницу и снова впиши.')
alert('Повтори так 40 раз и твоё желание сбудется')
let table = document.getElementById('table') 
for (let a = 1; a<6; a++){
    let tr = document.createElement("tr");
    for (let b = 1; b<7; b++){
        let td = document.createElement("td");
       
        tr.appendChild(td);
    }
    table.appendChild(tr)
}
let tds = document.querySelectorAll('td');
for (let c = 0; c<tds.length; c++) {
    tds[c].addEventListener("click", function Fun(){
        let input = document.createElement('input');
        input.value = this.innerHTML;  
        this.innerHTML = '';  
        this.appendChild(input);
        input.classList.add('active'); // добавление класса в наш инпут (для того чтобы как-то стилизовать наш input через css) (чтобы обращаться к такому классу в css нужно прописать тег и без пробела поставить этот класс, например —-> input.active { //cod css})
        this.classList.add('yacheyka') // добавление класса в нашу td-ку(для того чтобы как-то стилизовать нашу td-ку через css) (чтобы обращаться к такому классу в css нужно прописать тег и без пробела поставить этот класс, например —->td.yacheyka { //cod css})
        let element = this 
        input.addEventListener("blur", function(){
            element.innerHTML = this.value;
            element.addEventListener("click", Fun);
        })
        this.removeEventListener("click", Fun);
    })
}