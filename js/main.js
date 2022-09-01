let searchInput=document.querySelector('.searchInput');
let findbtn=document.querySelector('.findbtn'); 
// (async function defultWeather() {
//     let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ee96c104dab54c59b83143942222508&q=cairo&days=3`);
//     let result = await response.json();
//     let currentTemp = await result.current.temp_c;
//     // let forecast1Temp = await result.forecast.forecastday[1].day.maxtemp_c;
//     // let forecast2Temp = await result.forecast.forecastday[2].day.maxtemp_c;
//     // let description = await result.current.condition.text;
//     let daysArr = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday"
//     ];
//     let day = daysArr[new Date().getDay()]
//     let month = new Date().getMonth()+1;
//     $('.currItem').html(`
//          <div class="curr-header position-relative py-1 px-2 d-flex justify-content-between">
//                 <h5>${day}</h5>
//                 <h5>month: ${month}</h5>
//         </div>
//         <h4 class=" text-muted pt-5 pb-3 px-2 text-white">cairo</h4>
//         <div class="cont d-flex justify-content-start">
//             <h1 class=" px-2 text-white">${currentTemp} <sup>o</sup> C</h1>
//             <img class="" src="http:${result.current.condition.icon}" alt="">
//         </div>
//         <h4 class=" text-muted pt-4 pb-3 px-2 text-white">${result.current.condition.text}</h4>
//         `);
    
//         $('.dayAfter1').html(`
//         <div class="curr-header position-relative py-1 px-2 d-flex justify-content-end">
//             <h5>date: ${result.forecast.forecastday[1].date}</h5>
//        </div>
//        <h4 class=" text-muted pt-5 pb-3 px-2 text-white">max-temp</h4>
//        <div class="cont d-flex justify-content-start">
//            <h1 class=" px-2 text-white">${result.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup> C</h1>
//            <img class=" " src="http:${result.forecast.forecastday[1].day.condition.icon}" alt="">
//        </div>
//        <h4 class=" text-muted pt-4 pb-3 px-2 text-white">${result.forecast.forecastday[1].day.condition.text}</h4>
//        `);

//        $('.dayAfter2').html(`
//        <div class="curr-header position-relative py-1 px-2 d-flex justify-content-end">
//             <h5>date: ${result.forecast.forecastday[2].date}</h5>
//       </div>
//       <h4 class=" text-muted pt-5 pb-3 px-2 text-white">max-temp</h4>
//       <div class="cont d-flex justify-content-start">
//           <h1 class=" px-2 text-white">${result.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup> C</h1>
//           <img class=" " src="http:${result.forecast.forecastday[2].day.condition.icon}" alt="">
//       </div>
//       <h4 class=" text-muted pt-4 pb-3 px-2 text-white">${result.forecast.forecastday[2].day.condition.text}</h4>
//       `); 
//     console.log(result);
// })();

async function getWeather(cityName) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f30a9efcdb74460eae7201601222608&q=${cityName}&days=3`);
    let result = await response.json();
    let currentTemp = await result.current.temp_c;
    // let forecast1Temp = await result.forecast.forecastday[1].day.maxtemp_c;
    // let forecast2Temp = await result.forecast.forecastday[2].day.maxtemp_c;
    // let description = await result.current.condition.text;
    let daysArr = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = daysArr[new Date().getDay()]
    // let month = new Date().getMonth()+1;
    $('.currItem').html(`
         <div class="curr-header position-relative py-1 px-2 d-flex justify-content-between">
                <h5>${day}</h5>
                <h5>date: ${result.forecast.forecastday[0].date}</h5>
        </div>
        <h4 class=" text-muted pt-5 pb-3 px-2 text-white">${cityName}</h4>
        <div class="cont d-flex justify-content-start">
            <h1 class=" px-2 text-white">${currentTemp} <sup>o</sup> C</h1>
            <img class="" src="http:${result.current.condition.icon}" alt="">
        </div>
        <h4 class=" text-muted pt-4 pb-3 px-2 text-white">${result.current.condition.text}</h4>
        `);
    
        $('.dayAfter1').html(`
        <div class="curr-header position-relative py-1 px-2 d-flex justify-content-end">
            <h5>date: ${result.forecast.forecastday[1].date}</h5>
       </div>
       <h4 class=" text-muted pt-5 pb-3 px-2 text-white fs-6">max-temp : min-temp</h4>
       <div class="cont d-flex justify-content-start">
           <h1 class=" px-2 text-white">${result.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup> C : ${result.forecast.forecastday[1].day.mintemp_c} <sup>o</sup> C</h1>
           <img class=" " src="http:${result.forecast.forecastday[1].day.condition.icon}" alt="">
       </div>
       <h4 class=" text-muted pt-4 pb-3 px-2 text-white">${result.forecast.forecastday[1].day.condition.text}</h4>
       `);

       $('.dayAfter2').html(`
       <div class="curr-header position-relative py-1 px-2 d-flex justify-content-end">
            <h5>date: ${result.forecast.forecastday[2].date}</h5>
      </div>
      <h4 class=" text-muted pt-5 pb-3 px-2 text-white fs-6">max-temp : min-temp</h4>
      <div class="cont d-flex justify-content-start">
          <h1 class=" px-2 text-white">${result.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup> C : ${result.forecast.forecastday[2].day.mintemp_c} <sup>o</sup> C</h1>
          <img class=" " src="http:${result.forecast.forecastday[2].day.condition.icon}" alt="">
      </div>
      <h4 class=" text-muted pt-4 pb-3 px-2 text-white">${result.forecast.forecastday[2].day.condition.text}</h4>
      `); 
}
getWeather("cairo");


searchInput.addEventListener('input' , async function () {
        let response = await fetch(`https://api.weatherapi.com/v1/search.json?key=f30a9efcdb74460eae7201601222608&q=${searchInput.value}`);
        let res = await response.json();
        let citName = '';
        for(let i= 0 ; i < res.length ; i++)
        {
            citName = res[i].name;
            if(citName.toLowerCase().includes(searchInput.value.toLowerCase())){
                getWeather(citName);
            }
        }
    })

    // $('.nav-ul li').click(function (e) {
    //     let clickedItem = $(e.target).attr('class');
    //     if (clickedItem == 'item1') {
    //         $('html,body').animate({scrollTop:'0'},1100)
    //     }
    //     else if (clickedItem == 'item2') {
    //         $('html,body').animate({scrollTop:'0'},1100)
    //     }
    //     else if (clickedItem == 'item4') {
    //         let secOffset = $('.contact').offset().top;
    //         $('html,body').animate({scrollTop:secOffset},1000)
    //     }
    // }) 
// findbtn.addEventListener('click' , async function () {
//     let response = await fetch(`https://api.weatherapi.com/v1/search.json?key=f30a9efcdb74460eae7201601222608&q=${searchInput.value}`);
//         let res = await response.json();
//         let citName = '';
//         for(let i= 0 ; i < res.length ; i++)
//         {
//             citName = res[i].name;
//             if(citName.toLowerCase()===searchInput.value.toLowerCase()){
//                 getWeather(citName);
//             }
//             else{
//                 alert("wrong city name");
//                 break;
//             }
//         }
// })