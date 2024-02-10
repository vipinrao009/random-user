import axios from "axios"
import "./RandomUser.css"
import { useEffect, useState } from "react";
function RandomUser(){
     const [randomUser,setRandomUser] = useState()

    async function getRandomUser(){
        const res =await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
        const resResult = res.data.results[0]
        console.log(resResult);
        setRandomUser({
            FirstName:resResult.name.first,
            LastName:resResult.name.last,
            Gender:resResult.gender,
            Image:resResult.picture.large,
            Phone:resResult.phone
        })
    }

    useEffect(()=>{
        getRandomUser()
    },[])
    return(
        <div className="randomuser">
         { randomUser && (
              <div className="containor">
                 <div className="image">
                    <img src={randomUser.Image}/>
                 </div>
                 <div className="details">
                    <p>{randomUser.FirstName}  {randomUser.LastName}</p>
                    <p>{randomUser.Gender}</p>
                    <p>{randomUser.Phone}</p>
                 </div>
              </div>
         )}
        </div>
    )
}

export default RandomUser