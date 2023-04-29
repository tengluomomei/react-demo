import React, {useState} from 'react'

function Demo9(props){
    const [list,setList] = useState([]);
    const [checkAll,setCheckAll] = useState(false);

    // 创建
    const addFun = (e)=>{
      if(e.keyCode === 13){
        setList([...list, {id: Date.now(), content: e.target.value,ischecked: false}])
      }
    }

    // 单选
    const checkedItem = (id)=>{
      let oldList = [...list]
      oldList.forEach(item =>{
        if(item.id === id){
          item.ischecked = !item.ischecked 
        }
      })
      setList(oldList)

      // 选中的长度等于list的长度
      const checkedLength = list.filter(item => item.ischecked).length
      if(checkedLength === list.length){
        setCheckAll(true)
      }else{
        setCheckAll(false)
      }
    }

    // 删除
    const delteItem = (id)=>{
      let oldList = list.filter(item => item.id !== id)
      setList(oldList)
    }

    // 全选
    const changeAllFun = (e)=>{
      let oldList = [...list]
      oldList.map(item =>
        item.ischecked = e.target.checked
      )
      setList(oldList)
      setCheckAll(e.target.checked)
    }
    
    return(
      <div style={{'marginTop': '100px'}}>
        <input type="text" placeholder="请输入" onKeyUp={(e)=>{addFun(e)}}/><br/>

        <hr/>
        全选<input type="checkbox"
              checked={checkAll}
              onChange={(e)=>{changeAllFun(e)}}
              />
        <ul>
          {list.map(item =>{
              return (
                <li key={item.id}>
                  <input type="checkbox"
                    onChange={()=>{checkedItem(item.id)}}
                    checked={item.ischecked}
                    value={item.ischecked}/>
                  {item.content}
                  <button onClick={()=>{delteItem(item.id)}}>删除</button>
                </li>
              )
            }
          )}
        </ul>
      </div>
    )
  }

export default Demo9