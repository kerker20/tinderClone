import React, { useState, useEffect } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
const axios = require('axios');

function TinderCards() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`http://localhost:8001/tinder/cards`);

            setPeople(req.data);
        }

        fetchData();

    }, [])




    console.log(people);


    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };



    return (

        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (

                    <TinderCard
                        className="swipe"
                        key={CharacterData.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            <p className="name">{person.name}<span><FiberManualRecordTwoToneIcon color="error"></FiberManualRecordTwoToneIcon></span></p>
                            <parent className="imageBox">
                                <div className="emote">
                                    <img className="portrait" src="https://img.mobilelegends.com/group1/M00/00/68/Cq2Ixlvz1VaAVl2PAALyUg6GWL41980224" width="150" />
                                </div>
                                <img className="portraitHover" src="https://i.pinimg.com/originals/e0/46/47/e046472bee90c66f7e4977081e58a202.png" width="100" />
                            </parent>
                        </div>
                    </TinderCard>

                ))}
            </div>
        </div>
    );

}

export default TinderCards;
