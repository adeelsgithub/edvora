import React from "react";
import {HeaderContainer, Header, Logo, Profile, ProfileName,ProfileImage, RideNav, Nav
, FilterLogo
} from "./Styled/App.styled";

import logo from "./assets/logo.png";
import filter from "./assets/filter.png";


function App() {

  let [rides,setRides] = React.useState(() => {

   fetch('https://assessment.api.vweb.app/rides',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(results => results.json())
    .then(data => {
      setRides(data);
    });

  });

  let [pastRides,setPastRides] = React.useState([]);
  let [futureRides,setFutureRides] = React.useState([]);

  let [profile, setProfile] = React.useState(()=>{
    fetch('https://assessment.api.vweb.app/user',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(results => results.json())
    .then(data => {
      setProfile(data);
    });
  })

  function pastAndFuture(data){
    data = data.slice(0,10);
    data = data.split("/");

    var dateArr = data;
    var inputDate = new Date('"' + dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0] + '"').setHours(0, 0, 0, 0);
    
    var toDay = new Date().setHours(0, 0, 0, 0);
    
    if(inputDate > toDay){
      // future
      return false;
    }else if(inputDate== toDay){  
      console.log("Date is equal to today");
    }else{
      //Past
      return true;

    }

  }

 
    React.useEffect(()=>{
      console.log("ALL RIDES", rides)

      if(rides){

        if(pastRides.length <= 0 && futureRides.length <=0){
          rides.forEach(element => {
            let result = pastAndFuture(element.date);
  
            // if false then future else past
            if(result){
              setPastRides((previous)=>[...previous, element]);
            }
            else{
              setFutureRides((previous)=>[...previous, element]);
            }
          });
        }else{
          console.log("Already Added");
        }
        
      }

    },[rides]);
 

  return (
    <>
      <HeaderContainer>
        <Header>
          <Logo src={logo} />
            <Profile>
            <ProfileName>{profile?.name}</ProfileName>
            <ProfileImage src={profile?.url}/>
          </Profile>
        </Header>
      </HeaderContainer>

    <Nav>
      <RideNav>
        <a>Nearest rides</a>
        <a>Upcoming rides ({futureRides.length})</a>
        <a>Past rides ({pastRides.length})</a>
      </RideNav>
      <FilterLogo src={filter} />
    </Nav>

      <div>
          <h1>LIST</h1>
      </div>
    </>
  );
}

export default App;
