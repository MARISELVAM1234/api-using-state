import axios from "axios";
import React ,{useState , useEffect} from 'react'



const Axdata = () => {
    const[todos ,setTodos ] = useState([])
    useEffect(()=>{
        getTodos() // did mount
        } , [])


        
//get  method - to get value in fatch (read only purpose)
const getTodos = async () =>{
    const res = await axios.get ('https://jsonplaceholder.typicode.com/posts/')
    console.log(res);
    setTodos(res.data)
}
console.log(todos);
  return (
    <div>
        
    </div>
  )
}

export default  Axdata