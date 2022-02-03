import { FaSpider   as Spinner } from 'react-icons/fa';
import style from './../assets/css/Loading.module.css'
export function Loading() {
  return (
    <div className={style.spinner}>
      <Spinner className={style.spinning} size={50}/>
    </div>
  )
}

