//Global variables
let timeFrame = 'weekly'; // set the default timefame to weekly
let url = '/challenge3/data.json';  //default json url
let json_data;  

document.addEventListener('DOMContentLoaded',function(){
    const timeFrameEles = document.querySelectorAll('.timeframe li');
    
    
    fetch(url).then(respone => {
        return respone.json();
    }).then(data => {
        json_data = data;
        initial(json_data);
        bindeClickAndHover(timeFrameEles);
    }).catch((error) => {
        console.error('Error:', error);
    });;
    
})


// load initial state. 
//when first loading the data, the default statistic is by weekly.
//data is an array of objects
function initial(data){
    console.log(timeFrame);
    setStatistics(timeFrame,data);
}

//change timeframe events
const changeTimeFrame = (clickEle) => {
    const id = clickEle.getAttribute('id');
    timeFrame = id;
    console.log(timeFrame);
};


//set the statstics for all the UI
const setStatistics = (tFrame, data) => {
    data.forEach(element => {
        const title = element.title.toLowerCase();
        const lower_case_title = title.split(' ').reduce((acc,cur) => {
            acc = acc + '-' + cur;
            return acc
        },);
        const stat_ele = document.querySelector('#' + lower_case_title);
        const cur_time = stat_ele.querySelector('.current-time');
        const prev_time = stat_ele.querySelector('.pre-time');
        if( tFrame === "monthly"){
            prev_time.textContent = "Last Month -" + element['timeframes'][tFrame]['previous'] + "hrs";
        }else if(tFrame === "daily"){
            prev_time.textContent = "Last Day -" + element['timeframes'][tFrame]['previous'] + "hrs";
        }else {
            prev_time.textContent = "Last Week -" + element['timeframes'][tFrame]['previous'] + "hrs";
        }
        cur_time.textContent = element['timeframes'][tFrame]['current'] + "hrs"; 
    });

    
}

//define the hover and click event

const updateStat = (allEles, currentEle) => {
    changeTimeFrame(currentEle);
    allEles.forEach(ele => {
        if(ele.classList.contains('active')){
            ele.classList.remove('active');
        }
    });
    currentEle.classList.add('active');
    setStatistics(timeFrame,json_data);
};

//Binding events
const bindeClickAndHover = (elementArr) => {
    for (let index = 0; index < elementArr.length; index++) {
        const element = elementArr[index];
        element.addEventListener('click', (e) => {
            e.preventDefault();
            updateStat(elementArr, element);
        });
        element.addEventListener('mouseover', (e) => {
            e.preventDefault();
            updateStat(elementArr, element);
        });

    }
}

// define async fetch function, 
// return a Promise
// async function fetch_json(url){
//     let respone = await fetch(url);
//     let data = await respone.json();
//     return data;
// }