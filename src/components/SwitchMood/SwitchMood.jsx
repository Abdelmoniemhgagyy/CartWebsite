import React from 'react'
import { useEffect} from 'react'
import "./SwitchMood.css"


function SwitchMood({theme,setTheme}) {
   
    useEffect(()=>{
        if(theme === "dark"){
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        }else{
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        }
    },[theme])
   
  return (
    <div className='main-container-mood'
    onClick={()=> {
        localStorage.setItem("currentMood",theme === "dark"?"light":"dark")

        setTheme(localStorage.getItem("currentMood"))

 }}>{theme==="dark"?
                    <i class="bi bi-brightness-high-fill"></i>
                    :<i class="bi bi-moon-fill"></i>}
</div>
  )
}

export default SwitchMood