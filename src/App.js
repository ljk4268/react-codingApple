import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import bg from './bg.png';
import data from './Data';
import {Routes, Route, useNavigate, Outlet, Link} from 'react-router-dom'
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart'


function App() {

  let [shoes, setShose] = useState(data)
  let navigate = useNavigate();
  let [count, setCount] = useState(0);


  return (
    <div className="App">

      
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')'}}></div>

            <div className="container">
              <div className="row">
                {
                  shoes.map(function(a, i){
                    return(
                        <Card  shoes={shoes[i]} i={i} key={i} />
                    )
                  })
                }
              </div> 
            </div>
            <button onClick={()=>{
              setCount(count += 1);

              if(count == 1){
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{ 
                  let more = [...shoes]
                  let moreShose = more.concat(결과.data)
                  setShose(moreShose);
                })
                .catch((error)=>{ console.log(error) }); 
              } else if ( count == 2) {
                axios.get('https://codingapple1.github.io/shop/data3.json')
                .then((결과)=>{ 
                  let more1 = [...shoes]
                  let moreShose1 = more1.concat(결과.data)
                  setShose(moreShose1);
                })
                .catch((error)=>{ console.log(error) });
              } else if ( count ==3 ){
                alert('더 이상 상품이 없습니다. ')
              }

              }}>더보기{count}/2</button>

              
          </>
        }/>
    
    <Route path='/detail/:id' element={ <Detail shoes={shoes}/> }/>

    <Route path='*' element={<div>없는 페이지에요.</div>}/>

    <Route path='/cart' element={<Cart />} />

      </Routes>


    </div>
  );
}


function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) +'.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
