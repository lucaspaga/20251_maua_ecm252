import React, { useState, useEffect } from 'react'
import {Button} from 'primereact/button'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext'
import axios from 'axios'
import striptags from 'striptags'



const Busca = () => {

    const[termoDeBusca, setTermoDeBusca] = useState('')
    const [resultados, setResultados] = useState([])
    
    // useEffect(() => {
    //     console.log("Executando todas as vezes...")
    // })

    // useEffect(() => {
    //     console.log('Executando somente uma vez...')
    // }, [])



    useEffect( () => {
        const buscar = async () =>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: termoDeBusca
                }
            }
        )
        setResultados(data?.query?.search)
        console.log(data)
        }

        const timeoutID = setTimeout(() => {
            if(termoDeBusca)
                buscar()
        }, 500)
        
        return () => {clearTimeout(timeoutID)} 

    }, [termoDeBusca])


    return (
        <div>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search">
                </InputIcon>
                <InputText 
                placeholder="Buscar"
                onChange={(e) => setTermoDeBusca(e.target.value)} 
                value={termoDeBusca}/>
            </IconField>
            {
                resultados?.map((resultado) => {
                    return(
                        <div key={resultado.pageid}
                        className='my-2 border border-1 border-400'>
                            <div
                            className='border-bottom border border-1 border-400 p-3 text-center font-bold'>
                                {resultado.title}
                                <span>
                                    <Button 
                                    icon="pi pi-send"
                                    className='ml-3 p-button-rounded p-button-secondary'
                                    onClick={() => {
                                        window.open(`https://en.wikipedia.org?curid=${resultado.pageid}`)
                                    }}/>
                                </span>
                            </div>
                            <div
                            className='p-4 text-center'>
                                <span dangerouslySetInnerHTML={{__html: resultado.snippet}}>
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Busca