import React from "react";
import "../../App.css";
import logosrc from "../../Pictures/аллергия.png";
import {useNavigate} from "react-router-dom";
import CustomSwiper from "../CustomSwiper/CustomSwiper";

interface MainCard{
    name:string;
    categories:string[];
}

export default function MainPage(){
    const navigate = useNavigate();

    const MainPageInfo:MainCard[] = [
        {
            name: "Морепродукты",
            categories:[
                "Креветки","Семга","Мидии"
            ]
        },
        {
            name:"Овощи",
            categories:[
                "Морковь","Лук","Картошка"
            ]
        },
        {
            name: "Фрукты",
            categories:[
                "Яблоки","Бананы","Груши"
            ]
        },
        {
            name:"Другое",
            categories:[
                "Сигареты","Алоголь","Холод"
            ]
        }
    ];
    const slides:any[] = MainPageInfo.map((page)=>{
        return(
            <div className={"slide_container"}>
                <div className="slide_name">
                    {page.name}
                </div>
                <div className="slide_categories">
                    {page.categories.map((category)=>{
                        return(
                            <div className="slide_category" onClick={()=>navigate("/Detail")}>
                                {category}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })

    return(
        <div className="main">

            <div className="title">
                Аллергия Инфо
                <div className="title_shadow">
                    Аллергия Инфо
                </div>
            </div>

            <div className="img">
                <img src={logosrc} alt=""/>
            </div>

            <hr/>

            <div className="carousel">
                <CustomSwiper
                    withPagination={true}
                    withLoop={false}
                    slidesPerView={0.6}
                    spaceIncrement={0.12}
                    spaceBetween={20}
                    items={slides}
                />
            </div>
            <hr/>

            <div className={"text"}>
                <b style={{color: "black"}}>Аллергия</b> – хроническое заболевание, возникающее вследствие неадекватной реакции организма на попадание в него потенциально безопасных веществ. Развивается при повторном контакте с таким веществом, проявляясь все ярче и ярче с каждой последующей встречей. При отсутствии лечения приводит к осложнениям, ухудшает общее состояние пациента, снижает качество его жизни. Избежать этого поможет своевременная явка на консультацию к аллергологу и соблюдение данных специалистом рекомендаций.
            </div>

        </div>
    )
};