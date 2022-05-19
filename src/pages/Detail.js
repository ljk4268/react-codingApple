import { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";
import {Nav} from 'react-bootstrap';
import { addItem } from '../store'
import { useDispatch } from "react-redux";



function Detail(props){

  let {id} = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id );
  let [popUp, setPopUp] = useState(true);
  let [result, setResult] = useState('');
  let [탭, 탭변경] = useState(0);
  let [fade2, setFade2] = useState('');

  let dispatch = useDispatch()

  function CheckNum(e){
    setResult(e.target.value)
    if(isNaN(result) == true){
      alert('경고창')
      e.target.value = ''
      e.target.focous()
    }
  }

  useEffect(()=>{
    let a = setTimeout(()=>{ setFade2('end') },100)
    
    return()=>{
      clearTimeout(a)
      setFade2('')
    }
  },[])

  return(
    <div className={'container start' + fade2}>
      
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + `${Number(id) + 1}` + ".jpg" }width="100%" />
        </div>
        <div className="col-md-6">
        <input type="text" onChange={(e)=>{CheckNum(e)}}></input>
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem({id : `${찾은상품.id}`, name : `${찾은상품.title}`, count : 1}))
          }}>주문하기</button> 
        </div>
      </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav> 

        <TabContent 탭={탭}/>

    </div> 
  )
}

function TabContent({탭}){
  
  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{ setFade('end') },100)
    
    return()=>{
      clearTimeout(a)
      setFade('')
    }
  },[탭])

  return ( <div className={'start ' + fade}>
    {[<div>내용0</div>, <div>내용1</div>,<div>내용2</div> ][탭]}
  </div> )
  
}

export default Detail