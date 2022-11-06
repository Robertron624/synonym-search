import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <div className='container-fluid fixed-top'>
        <div className="row bg-info py-3">
            <div className='col-md px-5 app__name'><p className='mb-0'>Synonym searcher!</p></div>
        </div>
        <div className="social col-md">
            <i className="fa fa-facebook" aria-hidden="true"></i>
        </div>
    </div>
  )
}
