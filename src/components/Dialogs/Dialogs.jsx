import React from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map((d) => <DialogItems name={d.name} id={d.id} />)
    // [Эквивалент той функции что с верху 
    //     <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItems name={dialogsData[2].name} id={dialogsData[2].id} />
    // ]
    let messageElements = props.state.messages.map((m) => <Message message = {m.message}/>)

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