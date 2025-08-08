import React from 'react'

function SideBar({arrowPadding , sidebarLeft}) {
  return (
    <>
      <div className="sidebar" style={{
         transform:`translateX(${sidebarLeft})`
      }}>
        <div className="sidebarArrow" style={{
         paddingTop:arrowPadding,
        }}>
        <img src="/img/arrow.png" alt="arrow" />
        </div>
        <div className="sidebarBox">
         <a className="headline">
         </a>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <a className="headline">
         </a>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
            <div className="shortline">
         </div>

         <a href='' className="headline">
         </a>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <a href='' className="headline">
         </a>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <div className="shortline">
         </div>
         <a href='' className="headline">
         </a>
        </div>
      </div>
    </>
  )
}

export default SideBar
