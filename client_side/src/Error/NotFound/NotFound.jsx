import NF from '../../assets/Images/NotFound/404 Error-rafiki.svg'
import './NotFound.scss'

const NotFound = () => {
    return (
        <div className='container'>
            <img src={NF} alt="not-found" />
            <p>Cette page n'est pas disponible , dans nos serveurs , veuillez vérifier les liens ou visiter la page d'accueil</p>
            <a href='/'>Retour à l&#39;accueil</a>
        </div>
    )
}

export default NotFound