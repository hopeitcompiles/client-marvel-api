import {HeroCard} from './marvel/HeroCard';
import { useEffect, useState } from 'react';
import style from "./../assets/css/ResultsGrid.module.css"
import { getHeroes } from '../utils/ApiClient';
import { Loading } from './Loading';
import {useQuery} from './../hooks/useQuery'


export function Results() {
    const [isLoading, setIsLoading ]=useState(true);
    const [ heroes, setHeroes ] = useState([]);
    const query = useQuery();
    const search=query.get("search");
    const resultados=[];
    useEffect(()=>{
        setIsLoading(true);
        const parameter=search ? "&nameStartsWith="+search:"";
        // console.log(parameter);
        getHeroes(parameter).then(data => {
            setIsLoading(false);
            setHeroes(data.data.results.filter(function(value){
                return value.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
            }))//agrega resultados cuya foto está disponible
        });
    },[search])
    if(isLoading){
        return <Loading/>
    }
    if(heroes.length==0){
        return <div>
             <br/><br/>
            <center><h1>Nothing to show</h1></center>
        </div>
    }
    return (
        <ul className={style.gridContainer}>
            {
                heroes.map((hero) =>(
                    <HeroCard key={hero.id} hero={hero}/>
                ))
            }
        </ul>
    );
}
