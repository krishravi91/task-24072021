// 1. Create an XHR Object
var request=new XMLHttpRequest();
// 2. Open a Connection 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
// 3. Send a Connection
request.send();
// 4. Once data has been received successfully, we have to convert the data
request.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    /*for(i=0;i<data.length;i++)
    {
        console.log(data[i].name+", "+data[i].capital+", "+data[i].flag);
    }*/
    var iPopulation = data.filter((ele)=>ele.population<200000);
    console.log(iPopulation);

    var iRegion = data.filter((ele)=>ele.region=="Asia");
    console.log(iRegion);

    var iCurrencies = data.filter((ele)=>ele.currencies[0].code=="USD");
    console.log(iCurrencies);
    
    var reducer = data.reduce((accumulator, ele) => {
        return accumulator + ele.population
    },0);
    console.log(reducer);



}
