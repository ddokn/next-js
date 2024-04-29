import { product, helloTitle } from "./../data.js"

export default function Cart() {
  return (
    <div>
      { helloTitle }
      <h4 className="title">Cart</h4>
      {
        product.map((a, i)=>{
          return (
            <CartItem></CartItem>
          )
        })
      }
    </div>
  )
} 

function CartItem(){
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}
