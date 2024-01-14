import React from 'react'

const MainActivity = ({ children }) => {
    return (
        <div className='col-lg-10' style={{ height: '100vh' }}>
            {children}
        </div>
    )
}

export default MainActivity