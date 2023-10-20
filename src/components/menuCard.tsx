import menu_blank from '../images/menu_blank.png'
import '../styles/menuCard.css'

type menuProps = {
    name: string,
    description: string | null,
    image: string | null,
    price: number
}

export default function MenuCard({name, description, image, price } : menuProps): JSX.Element {

    if (name == "cargando") {
        return (
        <div className='card_wrapper'>
            <div className='text_container'>
                <span className='card_name_loading'></span>
                <div>
                    <p className='card_description_loading'></p>
                    <p className='card_description_loading'></p>
                    <p className='card_description_loading'></p>
                </div>

                
                <span className='card_price_loading'></span>
            </div>
            <img src={image ? image : menu_blank} className='card_img'/>
        </div>
        )}

    else {
        return (
        <div className='card_wrapper'>
            <div className='text_container'>
                <span className='card_name'>{name}</span>
                <p className='card_description'>{description ? description : 'No hay descripción...'}</p>
                <span className='card_price'>${price}</span>
            </div>
            <img src={image ? image : menu_blank} className='card_img'/>
        </div>
    )}
}