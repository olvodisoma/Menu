import {React,useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const Categories=({categories,ourMenus,setOurMenus})=> {
    const [items,setItems] = useState(ourMenus)

    const handleClick=(ctg)=>{
        if(ctg=='all'){
            setOurMenus(items)
            return
        }
        let newArr=items.filter(obj=>obj.category==ctg)
        setOurMenus(newArr)

    }

    return (
        <div className='d-flex justify-content-center'>
            <ButtonGroup aria-label="Basic example">
            {categories.map((item,index)=>(
                <Button key={index} variant="warning" onClick={()=>handleClick(item)}>{item}</Button>
            ))}
            </ButtonGroup>
        </div>
    )
}
