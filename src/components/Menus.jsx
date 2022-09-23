import React from 'react'

export const Menus=({ourMenus})=>{
    console.log("Menu komponens:",ourMenus)
  return (
    <div className='row mt-5 mb-5'>
        {ourMenus.map(obj=>(
            <div key={obj.id} className="col-md-6 col-12 mt-2">
                <div className='row'>
                    <div className="col-5 text-center">
                        <img className='img-thumbnail' src={obj.img} alt={obj.title} />
                    </div>
                    <div className="col-7">
                        <div className='d-flex justify-content-between border-bottom border-warning'>
                            <h6 className='text-capitalize'>{obj.title}</h6>
                            <h6 className='text-warning'>${obj.price}</h6>
                        </div>
                        {obj.desc}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
