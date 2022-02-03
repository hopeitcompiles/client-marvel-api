import hero from  "./../assets/hero.json"
import styles from "./../assets/css/HeroDetail.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHeroById } from "../utils/ApiClient";
import { Loading } from "../components/Loading";
export function HeroDetail() {
    const {heroid} = useParams();
    const [isLoading, setIsLoading ]=useState(true);
    const [hero,setHero] = useState(null);

    useEffect(()=>{
        setIsLoading(true);
        getHeroById(heroid).then(data => {
            setIsLoading(false);
            setHero(data.data.results[0]);
        });
    },[heroid]);

    if(isLoading){
        return <Loading/>
    }
    if(!hero){
        return null;
    }

    return (
        <div className={styles.container}>
            <img className={styles.col+" "+styles.image} src={hero.thumbnail.path+"."+hero.thumbnail.extension} alt={hero.name}/>
            <div className={styles.col}>
                <p className={styles.titletext}>
                    <strong>{hero.name}</strong>
                </p>
                <p className={styles.detailtext}>
                    {hero.description}
                </p>
                <p>
                    <strong>Comics: </strong>{hero.comics.items.map(comic => comic.name).join(", ")}
                </p>
            </div>
        </div>
    );
}
