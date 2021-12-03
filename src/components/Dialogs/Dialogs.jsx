import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: "Vasia", },
        { id: 2, name: "Petia", },
        { id: 3, name: "Sveta", },
        { id: 4, name: "Ura", },
        { id: 5, name: "Kiril", },
        { id: 6, name: "Artem", }
    ]

    let messages = [
        { id: 1, message: "Hello", },
        { id: 2, message: "How are you", },
        { id: 3, message: "Welcome", },
        { id: 4, message: "Welcome, How are you", },
        { id: 5, message: "Hello", },
        { id: 6, message: "coool men", }
    ]

    let dialogsElements = dialogs.map((d) => <DialogItems name={d.name} id={d.id} />)
    // [Эквивалент той функции что с верху 
    //     <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItems name={dialogsData[2].name} id={dialogsData[2].id} />
    // ]
    let messageElements = messages.map((m) => <Message message = {m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialog}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;