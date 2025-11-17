import React from 'react'
import './App.css'

export default function App() {

  const dis="---------------";
  
   let FullName=[{ Name:"Praveen" , Dob:"Aug" , LastName:"Kasturi"},
    {Name:"Madhuri", Dob:"Dec" , LastName:"somisetty"},
    {Name: "universal", Dob:"Endless" , LastName:"Product"}
  ]
  
  return (
    <div>
   
      {FullName.map(
        (abc)=>(
        
          <div>
          {abc.Name}
          {abc.Dob}
          {abc.LastName}
          <br></br>
          
         </div>
         )
      )
      }
      
      
      
    
      {dis}
      <img src="https://tse3.mm.bing.net/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"/><br/>

       {dis}

       <table className="table">
  <thead>
    <th> col</th>
    <th> name</th>
    <th>lastname</th>
    <th> direction</th>
    <th>image</th>
  </thead>
  <tbody>
    <tr className="table-active">
      <th scope="row">1</th>
      <td>praveen</td>
      <td>kasturi</td>
      <td> @demo</td>
      <img src="https://images.pexels.com/photos/31284696/pexels-photo-31284696/free-photo-of-vibrant-sunflower-in-a-thai-field-captured-in-daylight.jpeg?auto=compress&cs=tinysrgb&w=1600" width="300px" height="300px"/>
    </tr>
    <tr>
      <th scope="row" >2</th>
      <td>madhuri</td>
      <td>somisetty</td>
      <td>@media</td>
      <img src="https://th.bing.com/th/id/OIP.TgJEW6Ysv9iIuU8M6d4avgHaEo?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" height="300px" width="300px"/>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td >@social</td>
      <img src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" height="300px" width="300px"/>
    </tr>
  </tbody>
</table>

<div className="container text-center">
  <div className="row">
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
  </div>
</div>


    </div>

  )

}