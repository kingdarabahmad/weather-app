

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb1c7a4505mshed5bc0b38392007p1515c9jsn9b0ae6e75402',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
	

const temperature= document.querySelector(".temp")
const tempImg= document.querySelector(".conditionImg").firstElementChild


let target="delhi"

document.querySelector("input").addEventListener("change",(event)=>{
  target=event.target.value
})


const searchButton= document.querySelector("button")

searchButton.addEventListener("click",()=>{

  const url =`https://weatherapi-com.p.rapidapi.com/current.json?q=${target}`
  

  async function myPromise(){

    const response= await fetch(url, options)
    if(!response.ok){
      throw new Error("unable to fetch some error is there")
    }
    const data= await response.json()
    
    return data
    
  }
  myPromise()
  .then((myData)=>{
    const {current:{temp_c,condition:{icon}}}=myData
     temperature.textContent=`${temp_c}\u00B0 C`
     tempImg.setAttribute("src",icon)
  })
  .catch((error)=>{
    temperature.textContent=error
  })
    
})

