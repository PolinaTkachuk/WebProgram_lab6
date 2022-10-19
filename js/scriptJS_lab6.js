let buttonElem = document.querySelectorAll('.button');/* все кнопки*/

buttonElem.forEach((el) => {//проходим по каждой кнопке
 
  el.addEventListener("click", function(event){//при клике на кнопку

    if(event.target.closest('.button')){//общая проверка
      
      const right_column_img = document.querySelector('.img_right'); //изображение в правой колонке-собака
      const left_column_img = document.querySelector('.img_left');// изображение в левой колонке-кот
      //2 колонки сразу, в процессе программы будем менять их соотношение между собой в зависимости от того, какая кнопка нажата
      const column = document.querySelector('.column'); 

      
      //по id сравниваем какая именно кнопка нажата
      let center_button=document.getElementById('button_2').getAttribute('id');
      if (el.getAttribute('id')==center_button){//центральная кнопка

        left_column_img.style.display="grid";
        right_column_img.style.display="grid";
        column.classList.remove('_correct_left');
        column.classList.remove('_correct_right');

      }
      else{//если не центральная
        let left_button=document.getElementById('button_1').getAttribute('id');
        if (el.getAttribute('id')==left_button){//левая кнопка

          //регулировка появления изображения в колонке
          left_column_img.style.display="grid";
          right_column_img.style.display="none";
           //регулируем соотношение столбцов
          column.classList.remove('_correct_right');
          column.classList.add('_correct_left');
        
        }
        
        let right_button=document.getElementById('button_3').getAttribute('id');
        if (el.getAttribute('id')==right_button){//правая кнопка

          right_column_img.style.display="grid";
          left_column_img.style.display="none";
          column.classList.remove('_correct_left');
          column.classList.add('_correct_right');

        }

      }
    }

  })  
});