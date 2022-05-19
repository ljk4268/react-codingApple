import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCount } from './../store'

function Cart(){

  let state = useSelector((state)=> state )
  let dispatch = useDispatch()

  let cart = state.cart

  return(
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>

          {
            cart.map(function(a, i){
              return(
                <tr key={i}>
                  <td>{cart[i].id}</td>
                  <td>{cart[i].name}</td>
                  <td>{cart[i].count}</td>
                  <td>
                    <button onClick={()=>{
                      dispatch(changeCount(cart[i].id))
                    }}>+</button>
                  </td>
                </tr>
              )
            })
          }
          
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart