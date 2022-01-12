import Navbar from "./components/Navbar";
import data from "./components/data"
import Main from "./components/Main"
export default function App() {
    const dataValues = data.map(item =>{
      return(
        <Main 
             title = {item.title}
             location ={item.location}
             googleMapsUrl = {item.googleMapsUrl}
             startDate = {item.startDate}
             endDate = {item.endDate}
             description = {item.description}
             imageUrl = {item.imageUrl}  
  />
      )
    })

    console.log(dataValues)
  return (
    <div className="App">
      <Navbar />
      {dataValues}
    </div>
  );
}




