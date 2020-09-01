var dd = document.getElementById('dd');
var mm = document.getElementById('mm');
var yy = document.getElementById('yy');

var month_days = [31,28,31,30,31,30,31,31,30,31,30,31];
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//Change the month days for february in leap years, as the user types the year
yy.oninput = function(){
    if(!isNaN(yy.value)){
        if(yy.value%4==0){
            month_days[1] = 29;
        }else{
            month_days[1] = 28;
        }
    }
}

//Create a date object
var date = new Date();

document.getElementById('check').onclick = function(){
    var result = document.getElementById('result');

    //Validate the date
    if(dd.value==''||yy.value==''){
        //Empty
        result.innerText = 'Enter a date!';
    }else if(isNaN(dd.value)){
        //Not a number
        result.innerText = 'Enter a valid date!';
    }else if(isNaN(yy.value)){
        //Not a number
        result.innerText = 'Enter a valid year!';
    }else if(dd.value>month_days[mm.value]){
        //Date exceeds maximum date for selected month e.g 31 Apr
        result.innerText = 'Enter a valid date for selected month!';
    }else{
        //Set the date given by user
        date.setDate(dd.value);
        date.setMonth(mm.value);
        date.setFullYear(yy.value);

        //Get the respective day of the week
        //returns a number, 0 for Sunday, 1 for Monday...
        var day_of_week = date.getDay();
        
        var akan_names;

        if(document.getElementById('male').checked){
            akan_names = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
        }else{
            akan_names = ['Akosua','Adwoa','Abena','Akua','Yaa','Afua','Ama'];
        }

        var user_name = akan_names[day_of_week];
        var birth_day = days[day_of_week];

        result.innerHTML = '<b>'+user_name+'</b>, you were born on a <b>'+birth_day+'</b>';
    }

};