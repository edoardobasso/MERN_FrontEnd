import React, { Component } from 'react'
import { Button, Form} from "react-bootstrap"

 class Cities extends Component {
    
    state={
        isLoaded:false,
        allCities:[],
        searchQuery: "",
    }
    componentDidMount(){
        this.setState({isLoaded:true})
        fetch("http://localhost:5000/cities/all")
        .then(results => results.json())
        .then(cities=> this.setState({allCities:cities}))
    }
    change =() =>{
        this.setState({searchQuery:this.search.value})
        }
    render() {
       const {searchQuery} =this.state
       const cities= this.state.allCities
       .filter(city => {
           let param= this.state.searchQuery.toLowerCase()
           return city.name.toLowerCase().startsWith(param)
       })
       .map((city, index)=>{
       
        return (
         <div key={index} style={{backgroundImage: `url(${city.img})`, width: "300px", height: "300px",perspective: "1000px", backgroundSize:"cover"}}> 
             <h1> {city.name} </h1>
              <p> {city.country}</p>
            </div>
       )
            
        }) 
        return (
            <div>
                <Form inline >
                <input style={{ padding:"3px",margin:"10px",border: "3px solid #00B4CC", bordeRadius: "5px 0 0 5px", position:"relative", right:"-98px"}}
                    placeholder="Search Cities!"
                    ref={input => this.search = input}
                    onChange={()=>this.change()}
                    />
                     </Form>
                    
            <div  style={{ height:"550px", overflow:"auto", flexWrap: "wrap", color: "#ffffff", display:"flex", justifyContent:"center", alignItems:"center"}}>
     
            {cities}
        </div>
    <div>
    <Button
    href="/" style={{overflow:"auto", backgroundColor:"#ffffff", borderColor:"#ffffff"}} ><img src="/images/homeIcon.png"  alt="homeicon"style={{ backgroundColor:"#ffffff", height:"30px" , width:"30px"}}/>
    </Button>
    </div>
    </div>
        )
}

}

 export default Cities

      


