import React,{ useState } from 'react'
import "./style.scss"

function Modal(props){
 
  return (
    <div>
      <div className="ml-layer">
        <div className="ml-modal">
          <header>
              顶部
          </header>
          <main>
              主体
          </main>
          <footer>
              底部 
          </footer>
        </div>
      </div>
    </div>
  ) 
}

function PageA() {
  return (
    <div>
      <button>open modal</button>
      <Modal>
        
      </Modal>
    </div>
  )
}

export default PageA;

