import PropTypes from 'prop-types'
import React,{ useState } from 'react'
import "./style.scss"


function Button(props){
  let {type, children, onClick} = props
  return (
    <div className='ml-button'>
      <span className={type} onClick={onClick}>{children}</span>
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'danger', 'info','default']),
  children: PropTypes.node
}

Button.defaultProps = {
  type: 'default',
  children: '按钮'
}


function ModalHeader(props){
  let {title, closeable, onCancle} = props
  return (
    <>
      <h2>{title}</h2>
      <div onClick={onCancle}>{closeable && 'X'}</div>
    </>
  )
}

function ModalFooter(props){
  let {type, onCancle, onCofirm} = props
  // 渲染函数
  const renderFun = ()=>{
    let btns = []
    switch (type) {
      case 'confirm':
        btns= [
          <div key="1" className='text-rgt'>
            <Button type="primary" key="1" onClick={onCofirm}>确定</Button> 
            <Button type="danger" key="2" onClick={onCancle}>取消</Button>
          </div> 
        ]
        break;
      case 'danger':
          btns= [
            <Button type="danger" key="1" onClick={onCancle}>取消</Button>
          ]
          break; 
        case 'info':
          btns= [
            <Button type="primary" key="1" onClick={onCancle}>我知道le</Button>
          ]
          break;
        default:
          btns= [
            <Button type="primary" key="1" onClick={onCancle}>我知道le</Button>
          ]

    }
    return btns
  }
  return (
    renderFun()
  )
}

function Modal(props){
  let {children, visiable, onCancle} = props

  // 遮罩层点击
  const handelLayer = (e)=>{
    console.log(e.target)
    console.log(e.currentTarget)
    if(e.target.dataset.self === 'layer'){
      onCancle()
    }
  }

  return (
    <div>
      <div className="ml-layer" style={{display: visiable ? 'block': 'none'}} data-self="layer" onClick={(e)=>{handelLayer(e)}}>
        <div className="ml-modal">
          <header>
              <ModalHeader {...props}></ModalHeader>
          </header>
          <main>
              {children}
          </main>
          <footer>
            <ModalFooter {...props}></ModalFooter>
          </footer>
        </div>
      </div>
    </div>
  ) 
}

Modal.propTypes = {
  title: PropTypes.node,
  closeable: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(['danger','info','confirm']),
  visiable: PropTypes.bool,
  onCancle: PropTypes.func,
  onCofirm: PropTypes.func,
}

Modal.defaultProps = {
  title: '顶部',
  closeable: true,
  children: '主体内容默认文字',
  type: 'info',
  visiable: false,
  onCancle: ()=>{},
  onCofirm: ()=>{},
}



function PageA() {
  let [visiable, setVisiable] = useState(false)
  const submitFun = ()=>{
    console.log('请求接口')
    setVisiable(false)
  }

  return (
    <div>
      <button onClick={()=>{setVisiable(true)}}>open modal</button>
      <Modal
        title={<span style={{color:'blue'}}>添加todolist</span>}
        closeable
        type='confirm'
        visiable={visiable}
        onCancle={()=>{setVisiable(false)}}
        onCofirm={()=>{submitFun()}}
      >
        <div>
          <p>请添加todolist</p>
          <input type="text"/>
        </div> 
      </Modal>
    </div>
  )
}

export default PageA;

