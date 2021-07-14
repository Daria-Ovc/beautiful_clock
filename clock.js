window.onload = function () {
    setInterval(timeСhange, 1000)
};

//функция для получения текущего времени и даты:
function timeСhange() {

    //ищем в документе метки: час, минута, секунда:
    const m_hour = document.querySelector("#hour");
    const m_minute = document.querySelector("#minute");
    const m_second = document.querySelector("#second");

    //получаем текущее время:
    let today_date = new Date();
    let hours = today_date.getHours();
    let minutes = today_date.getMinutes();
    let seconds = today_date.getSeconds();
    if (hours >= 0 && hours <= 9)
        hours = "0" + hours;
    if (minutes >= 0 && minutes <= 9)
        minutes = "0" + minutes;
    if (seconds >= 0 && seconds <= 9)
        seconds = "0" + seconds;

    m_hour.innerHTML = hours;
    m_minute.innerHTML = minutes;
    m_second.innerHTML = seconds;

    //ищем в документе метку: дата:
    const m_date = document.querySelector("#date");

    //получаем текущую дату:
    let date = today_date.getDate();
    let month = today_date.getMonth();
    let year = today_date.getFullYear();

    if (date >= 0 && date <= 9)
        date = "0" + date;
    if (month >= 0 && month <= 9)
        month = "0" + month;
    if (year >= 0 && year <= 9)
        year = "0" + year;

    m_date.innerHTML = `${date}.${month}.${year}`;

    //ищем в документе метку: день недели:
    const m_day = document.querySelector("#day");

    //получаем текущий номер дня недели:
    let number_of_day = today_date.getDay();
    let day_title = "";
    switch (number_of_day) {
        case 1: day_title = "Понедельник";
        break;
        case 2: day_title = "Вторник";
        break;
        case 3: day_title = "Среда";
        break;
        case 4: day_title = "Четверг";
        break;
        case 5: day_title = "Пятница";
        break;
        case 6: day_title = "Суббота";
        break;
        case 0: day_title = "Воскресенье";
        break;
    }

    m_day.innerHTML = day_title;
}