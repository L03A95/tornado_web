import '../styles/Menu.css'
import MenuCard from './menuCard'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Menu () {

    const [menu, setMenu] = useState([])
    const [apiInfo, setApiInfo] = useState(false)

    useEffect(() => {
        axios.get('https://tornado-api.vercel.app/')
        .then((res) => {setMenu(res.data); setApiInfo(true)})
        .catch((err) => console.log(err))
    },[])
    

    return (
        <>
            <h1 className='menu_title'>~Menú~</h1>
            <div>
                <section className='section_wrapper'>
                    <span className='section_title'>Entrada</span>
                    {menu.map((m : any) => {
                        if(m.category == 'entrada' && m.active) {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                    {apiInfo ? null 
                    : <><MenuCard name='cargando' description='' image='' price={0}/> 
                        <MenuCard name='cargando' description='' image='' price={0}/>
                        <MenuCard name='cargando' description='' image='' price={0}/>
                    </>}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Parrilla</span>
                    {menu.map((m : any) => {
                        if(m.category == 'parrilla' && m.active) {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                    {apiInfo ? null 
                    : <><MenuCard name='cargando' description='' image='' price={0}/> 
                        <MenuCard name='cargando' description='' image='' price={0}/>
                        <MenuCard name='cargando' description='' image='' price={0}/>
                    </>}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Dulces</span>
                    {menu.map((m : any) => {
                        if(m.category == 'dulces' && m.active) {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                    {apiInfo ? null 
                    : <><MenuCard name='cargando' description='' image='' price={0}/> 
                        <MenuCard name='cargando' description='' image='' price={0}/>
                        <MenuCard name='cargando' description='' image='' price={0}/>
                    </>}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Cafetería</span>
                    {menu.map((m : any) => {
                        if(m.category == 'cafeteria' && m.active) {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                    {apiInfo ? null 
                    : <><MenuCard name='cargando' description='' image='' price={0}/> 
                        <MenuCard name='cargando' description='' image='' price={0}/>
                        <MenuCard name='cargando' description='' image='' price={0}/>
                    </>}
                </section>

                <section className='section_wrapper'>
                    <span className='section_title'>Bebidas</span>
                    {menu.map((m : any) => {
                        if(m.category == 'bebidas' && m.active) {
                            return <MenuCard name={m.name} description={m.description} image={m.image} price={m.price} />
                        }
                    })}
                    {apiInfo ? null 
                    : <><MenuCard name='cargando' description='' image='' price={0}/> 
                        <MenuCard name='cargando' description='' image='' price={0}/>
                        <MenuCard name='cargando' description='' image='' price={0}/>
                    </>}
                </section>
            </div>
        </>
    )
}