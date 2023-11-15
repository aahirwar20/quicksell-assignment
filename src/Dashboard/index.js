import {useState, useEffect} from "react"
import Display from "./Display/index.js"
import { priority, status} from "./const.js"
import Group from "./Group/index.js"
import icons from "./Icon/icon.js"
import './index.css'


function Dashboard(){
    const [groupKey, setGroupKey] = useState('status')
    const [tickets, setTickets] = useState([])
    const [users, setUsers] = useState([])
    const [todo, setTodo] = useState({})
    const [keys, setKeys] = useState({ priority: priority, status: status, userId :[]})
 
    useEffect(()=>{
        fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then((Response) => Response.json())
        .then((data)=>{
            console.log(data)
            setTickets(data.tickets)
            setUsers(data.users)
            setKeys((keys)=>{ return {...keys, userId: data.users}})
        })
        .catch((err)=>{
            console.log(err)
        })
        
    },[])

    function handleGroupKey(value){ 
        setGroupKey(value)
    } 

    useEffect(()=>{
        const currTodo = Object.groupBy(tickets, ticket => ticket[groupKey])
        setTodo(currTodo)
    },[tickets, groupKey])

    return (
        <>
           <div className="nav-bar">
               <Display groupKey ={groupKey} handleGroupKey ={handleGroupKey}/>
           </div>
           <div className="group-list">
                {keys[groupKey].map((data)=>
                    <div key={data.id} >
                        <Group icons = {icons} list ={todo[data.id]} title={data.name} users={users} id ={data.id} Key = {groupKey}/>
                    </div>
                )}
           </div>
        </>
        
    )
}

export default Dashboard