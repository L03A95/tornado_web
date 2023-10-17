import '../styles/Menu.css'
import MenuCard from './menuCard'
// import menus from './hardMenus.js'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Menu () {

    const [menu, setMenu] = useState([])
    // const apiUrl = process.env.REACT_APP_API_URL

    useEffect(() => {
        // setMenu(menus)
        axios.get('https://tornado-api.vercel.app/')
        .then((res) => setMenu(res.data))
        
    },[])

    return (
        <>
            <h1 className='menu_title'>~Menú~</h1>
            <div>
                <section className='section_wrapper'>
                    <span className='section_title'>Entrada</span>
                    {menu.map((m : any) => {
                        if(m.category == 'entrada') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Parrilla</span>
                    {menu.map((m : any) => {
                        if(m.category == 'parrilla') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Dulces</span>
                    {menu.map((m : any) => {
                        if(m.category == 'dulces') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Cafetería</span>
                    {menu.map((m : any) => {
                        if(m.category == 'cafeteria') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Bebidas</span>
                    {menu.map((m : any) => {
                        if(m.category == 'bebidas') {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                </section>
            </div>
        </>
    )
}