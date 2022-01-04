import React, { useEffect } from "react"
import './styles.css';
import { IoMdTrash, IoIosEye } from 'react-icons/io'

type Iitems = {
    id: Number,
    nome: String,
    descricao: String,
    data: String
}

export default function Item() {

    const [item, setItem] = React.useState<Iitems[]>([]);

    // Fetch Items
    useEffect(() => {
        fetch('http://localhost:3333/items', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setItem(data)
        })
    }, [])


    // Remove items
    function handleClickRemove(id: Number, nome: String) {

        if (confirm(`Você realmente quer deletar o TODO: "${nome}"`)) {
            fetch(`http://localhost:3333/items/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        } else {
            // Do nothing!
        }
    }

    return (
        <>
            <div className="containerItems">
                <form>
                    {item.map((v, i) => (
                        <ul className="listItem" key={i}>
                            <li>
                                <div>
                                    <h2>{v.nome}</h2>
                                    <p>{v.descricao}</p>
                                    <span>{v.data}</span>
                                    <span> | {v.id}</span>
                                </div>
                                <div className="checked">
                                    <button type="submit" onClick={() => handleClickRemove(v.id, v.nome)}>
                                        <IoMdTrash size={20} />
                                    </button>
                                    <button>
                                        <IoIosEye size={20} />
                                    </button>
                                    <span className="checkmark"></span>
                                </div>
                            </li>
                        </ul>
                    ))}
                </form>
            </div>
        </>
    )
}