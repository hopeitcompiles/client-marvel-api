import cardStyle from '../../assets/css/HeroCard.module.css'
import { Link } from 'react-router-dom';

export function HeroCard({hero}) {
  return (
    <li>
      <div className={cardStyle.card}>
        <Link to={"/heroes/"+hero.id} className="text-decoration-none text-body">
          <div  className={cardStyle.imagecontainer}>
              <div className={cardStyle.first}>
                <span className="h7">
                    <div className="d-flex justify-content-between align-items-center"><i className="fa fa-bookmark"></i></div>
                </span>
              </div> 
              <img src={hero.thumbnail.path+"."+hero.thumbnail.extension} className={"img-fluid rounded "+cardStyle.thumbnailimage} alt={hero.name}/>
          </div>
        </Link>
        <div className="product-detail-container p-2">
          <Link to="#" className="text-decoration-none text-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className={cardStyle.heroname}>{hero.name}</h5>
              </div>
          </Link>
        </div>
        <div className="product-detail-container pb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className={cardStyle.cardtext}> {hero.comics.available} comics</h5>
            </div>
        </div>
      </div>
    </li>
  );
}
