export default function List() {
  let product = ['Tomato', 'Pasta', 'Coconut']

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        product.map((a, i)=>{
          return (
            <div className="food">
              <h4>{ product[i] } $40</h4>
            </div>      
          )
        })
      }
    </div>
  );
}
