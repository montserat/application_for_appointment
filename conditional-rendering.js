//Выполнение функции только после загрузки DOM
$(document).ready(function () {
    //Слушатель события изменения для select выбраного по id
    $("#passport-type").change(function () {
      //Проверка значения select, выполнение при значении "Загранпаспорт"
      if ($(this).val() == "Загранпаспорт РФ"){
          /*Вариант 1: Cпособ с удалением элемента из документа, 
          присвоение отрицательного значения при отправке формы
          */
          $("#passport-series").val(-1).parent().hide();
  
          /*Вариант 2: Сокрытие элемента без изменения 
          fieldset (остается промежуток между полями),отрицательное значение при отправке формы */
         //$("#passport-series").val(-1).parent().css('visibility','hidden');
  
         /*Вариант 3: Сокрытие элемента с удалением значения поля из формы*/
         //$("#passport-series").prop("disabled",true).parent().hide();
      }
      else{
          //Возврат поля при варианте 1
          $("#passport-series").val("").parent().show();
          
          //Возврат поля при варианте 2
          //$("#passport-series").val('').parent().css('visibility','visible');
      
          //Возврат поля при варианте 3
          //$("#passport-series").prod("disabled",false).val("").parent().show();
      }
  
    });
  });
  