let thisDay = $("#currentDay");
let thisHour = moment().format("H");

setInterval(() => {
    let rightNow = moment();
    let dateForm = rightNow.format("dddd, MMMM, hh:mm a");
    thisDay.text(dateForm);
}, 100);
//Got some help from stackoverflow for localstorage >> https://stackoverflow.com/questions/51303211/how-to-add-item-to-local-storage/51303368
$(".storebtn").click(function(){
    $('input [class="form-control form-control-lg mr-1"]').each(() => {
        let ids = $(this).attr('id');
        let val = $(this).val();
        localStorage.setItem(ids, val);
    });
});

$('input [class="form-control form-control-lg mr-1"]').each(() => {
let grab = $(this).attr('id');
let getStore = localStorage.getItem(grab);
document.getElementById(grab).value = getStore;
});

//color changes Not working...
// getColor(9, "#nine");
// getColor(10, "#ten");
// getColor(11, "#eleven");
// getColor(12, "#twelve");
// getColor(1, "#onePM");
// getColor(2, "#twoPM");
// getColor(3, "#threePM");
// getColor(4, "#fourPM");
// getColor(5, "#fivePM");

// function getColor(theTime, allIds) {
//     if (thisHour > theTime) {
//         $(allIds).addClass("before");

//     } else {(thisHour < theTime)

//         $(allIds).addClass("after");

//     } else {(thisHour == theTime) 

//         $(allIds).addClass("now");
//     }
// }

// function getColor(theTime, allIds) {
//     if (thisHour > theTime) {
//         $(allIds).addClass("before");

//     } 
//     if (thisHour < theTime){

//         $(allIds).addClass("after");
//     }
//     if  (thisHour == theTime) {

//         $(allIds).addClass("now");
//     }
// }

