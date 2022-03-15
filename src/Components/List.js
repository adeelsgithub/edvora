import React from "react";
import {ListContainer,MapImage,Lists,ListText, Span, CityBox, CityAndState,TextP} from "../Styled/List.styled";

function List(props){
    return (

        <>
            <ListContainer>
                <MapImage src={props.mapImage} />
                <Lists>
                    <div><ListText>Ride Id : <Span> {props.id} </Span></ListText></div>
                    <div><ListText>Origin Station : <Span>{props.originCode}</Span></ListText></div>
                    <div><ListText>station_path :<Span> {JSON.stringify(props.sp)}</Span></ListText></div>
                    <div><ListText>Date : <Span>{props.date}</Span></ListText></div>
                    <div><ListText>Distance : <Span>{props.distance}</Span></ListText></div>
                </Lists>
                <CityBox>
                    <CityAndState>
                        <TextP>{props.city}</TextP>
                    </CityAndState>
                    <CityAndState>
                        <TextP>{props.state.split('').slice(0,7).join('')}</TextP>
                    </CityAndState>
                </CityBox>
            </ListContainer> 
        </>
    );
}


export default List;
