
    function Variants(){
        var strLetters="ABCDEFGH";

        val1=document.getElementById("basState").value;// -- получение значения в поле ввода координаты места нахождения коня
        var let=val1[0];//--Буквенная составляющая координаты
        var num=Number(val1[1]);//--Числовая составляющая координаты
        indStr = strLetters.indexOf(let)+1;

        var arrX=[];//--массив чисел
        var arrY=[];//--массив букв
//--расчет точек, куда пойдет конь (общий случай)
        arrX[0]=num+2;
        arrY[0]=indStr+1;

        arrX[1]=num+1;
        arrY[1]=indStr+2;

        arrX[2]=num-1;
        arrY[2]=indStr+2;

        arrX[3]=num-2;
        arrY[3]=indStr+1;

        arrX[4]=num-2;
        arrY[4]=indStr-1;

        arrX[5]=num-1;
        arrY[5]=indStr-2;

        arrX[6]=num+1;
        arrY[6]=indStr-2;

        arrX[7]=num+2;
        arrY[7]=indStr-1;

        
//--проверка, какие точки существуют на доске
        
        //формируем пустую строку, для вывода будущего сообщения
        var S=""; 
        //заполняем ее в цикле

        for(i=0;i<8;i++)
        {
            if(arrX[i]>=1 && arrX[i]<=8 && arrY[i]>=1 && arrY[i]<=8)
                if(i<7)
                S+=strLetters[arrY[i]-1]+arrX[i]+",";
        }
        var res = S.substring(0, S.length - 1); //-- вывод результата на экран (без последнего символа выводим, поскольку это запятая)
        //--отображение модального окна с результирующей строкой
      $('#prizePopup').modal('show');
          document.getElementsByClassName("modal-body")[0].innerHTML=res;
    }
