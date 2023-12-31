import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DropDown from '../Components/About_Components/DropDown';
import Avatar from '../Components/Homes_Page_Components/Avatar';
import Tag from '../Components/Homes_Page_Components/Tags';
import Carrousel from '../Components/Homes_Page_Components/Carrousel';
import Banner from '../Components/Banner';
import Rates from '../Components/Homes_Page_Components/Rate_Stars';
import '../Styles/HomesLocation.scss';
import Error from './Error';
import Footer from '../Components/Footer';

export default function LocationPage() {
    const [location, setLocation] = useState({ tags: [], rating: '', equipments: [], pictures: [], host: { name: '', picture: '' } });

    const { id } = useParams();

    useEffect(
        function () {
            fetch('/Datas/HomeList.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].id === id) {
                            setLocation(data[i]);
                            console.log('reponse ok');
                        }
                    }
                })
                .catch(console.log['error on APi']);
        },
        [id]
    );

    if (location.id === id) {
        return (
            <>
                {
                    <div className="BigContent">
                        <Banner />
                        <div className="body_location_page">
                            <div className="BigContent_ShowCarrousel">
                                <Carrousel img={location.pictures} />
                            </div>
                            <div className="LABIGROW">
                                <div className="LABIGCOLONNE">
                                
                                    <h1 className="BigContent_TitleHost_Titre">{location.title}</h1>
                                    <p className="BigContent_TitleHost_SubTitle">{location.location}</p>
                                    <div className="BigContent_Tags">
                                        {location.tags.map((tag) => (
                                            <Tag content={tag} key={tag} />
                                        ))}
                                    </div>
                                </div>
                                <div className="LABIGCOLONNERIGHT">
                                    <Avatar name={location.host.name} picture={location.host.picture} />
                                    <Rates rateNum={location.rating} />
                                </div>
                            </div>

                            <div className="BigContent_PartTwo">
                                <div className="BigContent_PartTwo_Left">
                                    <DropDown title="Description" content={location.description} />
                                </div>
                                <div className="BigContent_PartTwo_Right">
                                    <DropDown
                                        title="Equipement"
                                        content={
                                            <div>
                                                {location.equipments.map((equipment) => (
                                                    <div key={equipment}>{equipment}</div>
                                                ))}
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }{' '}
                <Footer />
            </>
        );
    } else {
        return <>{<Error />}</>;
    }
}