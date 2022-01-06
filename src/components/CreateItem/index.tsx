import React from "react";
import './styles.scss'
export default function CreateItem() {

    const [values, setValues] = React.useState({
        nome: "",
        descricao: "",
        data: new Date()
    })

    const onChagemItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmiteValues = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetch('http://localhost:3333/items', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(values)
        })

    }

    return (
        <>
            <div className="formWrapper">
                <form onSubmit={onSubmiteValues}>
                    <input onChange={onChagemItem} name="nome" type="text" />
                    <textarea className="textarea" onChange={onChagemItem} name="descricao" type="text" />
                    <button type="submit">+</button>
                </form>
            </div>
        </>
    )
}