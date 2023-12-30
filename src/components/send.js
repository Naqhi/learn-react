import { useState } from "react"

const Send = ()=>{
   const [first, setFirst] = useState('welcome visitors naqhi');
   return(
      <div className="flex">
         <h1>{first}</h1>
         <div>
            <button onClick={()=>setFirst('thank you for subscribing')}>Subscribe</button>
         </div>
      </div>
   )
}
export default Send;