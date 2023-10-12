import '../styles/Menu.css'
import MenuCard from './menuCard'
import menus from './hardMenus.js'
import {useState, useEffect} from 'react'

export default function Menu () {

    const [menu, setMenu] = useState([])


    useEffect(() => {
        setMenu(menus)
    },[])

    return (
        <>
            <h1 className='menu_title'>Menú</h1>
            <div>
                <section className='section_wrapper'>
                    <span className='section_title'>Entrada</span>
                    {menus.map((m : any) => {
                        if(m.category == 'entrada') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Parrilla</span>
                    {menus.map((m : any) => {
                        if(m.category == 'parrilla') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Dulces</span>
                    {menus.map((m : any) => {
                        if(m.category == 'dulces') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Cafetería</span>
                    {menus.map((m : any) => {
                        if(m.category == 'cafeteria') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Vinos</span>
                    {menus.map((m : any) => {
                        if(m.category == 'vinos') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>
            </div>
        </>
    )
}