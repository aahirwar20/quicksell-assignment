import { useState } from 'react';
import './index.css'
import MaterialIcon from 'material-icons-react';

function Display( Props){
    const [visible , setVisible] = useState(false);
    
    return(
        <>
            <div className="display" onClick={()=>{setVisible((data)=>!data)}}>
                <MaterialIcon icon ="menu"/>
                <p> Display</p>
                <MaterialIcon icon ="expand_more"/>
            </div>
            <div className='display-box' style={{display : visible?"block":"none"}}>
                <div className='grouping'>
                    <div className='label'>
                        <label>
                            Grouping
                        </label>
                    </div>
                    <div className='value'>
                        <select value={Props.groupKey} onChange={(e)=>{Props.handleGroupKey(e.target.value)}}>
                            <option value="status">Status</option>
                            <option value="userId">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                </div>
                <div className='ordering'>
                    <div className='label'>
                        <label> 
                            Ordering
                        </label>
                    </div>
                    <div className='value'>
                        <select >
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                </div>
                    
                    
            </div>
        </>
    )
}
export default Display