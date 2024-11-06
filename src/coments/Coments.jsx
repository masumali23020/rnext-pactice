import React, { useEffect, useState } from 'react'
import { fetchComents } from '../utlis/fatchComents'

const Coments = ({postId}) => {
    const [coments, setComents] = useState([])
    useEffect(()=> {
        console.log("Effectomg....")

        let ignore = false

        
        async function name() {
            console.log("fatching....")
            const json  = await fetchComents(postId)
            if(!ignore){
                console.log("setting....")

                setComents(json)
            }
           
            
        }
        name()

        return ()=> {
            ignore = true
        }
       

    },[postId])
  return (
    <div>
        <ul>
            {coments.map((coment)=> <li key={coment.id}>{coment.name} </li>)}
        </ul>
    </div>
  )
}

export default Coments