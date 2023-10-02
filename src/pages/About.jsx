import React from 'react';
import Button from "../components/UI/button/Button";
import {Link} from "react-router-dom";


const About = () => {
    return (
        <div className={"aboutPage"}>

           <h1>
               🎉 Веселье в каждом костюме! 🎉
           </h1>


            <div className={"main_description"}>
                <p>
                    Друзья, готовьтесь к настоящему карнавалу детского воображения! У нас есть для вас секретный ингредиент для незабываемых вечеринок и веселых моментов - это наши невероятные детские костюмы!
                </p>
            </div>


            <div className={"rec1"}>
                <p>
                    1. 🚀 Путешествие в мир фантазий: С нашими костюмами дети смогут стать супергероями, принцессами, космическими путешественниками и даже динозаврами! Ведь в каждом костюме — своя удивительная история.
                </p>
                <img src="https://herts.ankle-biters.co.uk/wp-content/uploads/sites/6/2020/12/memories.jpg"
                     alt="kidsPartyPic"/>
            </div>


            <div className={"rec2"}>
                <img src="https://media.timeout.com/images/103714484/750/422/image.jpg" alt=""/>
                <p>
                    2. 🌈 Разнообразие и качество: Мы гордимся огромным выбором костюмов для мальчиков и девочек всех возрастов. Каждый костюм проходит тщательный отбор, чтобы дети чувствовали себя уверенно и весело!
                </p>
            </div>


            <div className={"rec3"}>

                <p>
                    3. 🎁 Праздники без хлопот: Наши костюмы подарят улетные вечеринки без лишних забот для родителей. Прокатите детские мечты прямо к себе домой!
                </p>
                <div>
                    <img src="https://lakelandmom.com/wp-content/uploads/2021/09/Birthday-Party-Places-Lakeland-Florida.jpg"
                         alt="kidsPartyPic"/>
                </div>

            </div>


            <div className={"bottom_description"}>
                <p>
                    Не упустите шанс превратить любой праздник в настоящее приключение! Сделайте заказ сейчас и подарите своим детям праздник, полный радости и веселья!
                </p>
            </div>


        </div>
    );
};

export default About;