import '../style/chat.css'

const Chat = ({ user, msgs, setMsgs, emitMsg }) => {

    const sendMsg = () => {
        const newMsg = {
            sender: 'client',
            content: document.getElementById('chat-input').value
        }
        setMsgs(prev => [...prev, newMsg])
        emitMsg(newMsg)
    }

    return (
        <div className='container'>
            {msgs.map((msg, i) => <div key={i} className={`${msg.sender}-msg`}>{msg.content}</div>)}
            <input type='text' id='chat-input' name='chat-input'
                placeholder='Escribe aquí tu mensaje' />

            {user ?
                <button onClick={sendMsg}>Enviar</button>
                :
                <button disabled>Debes estar autenticado para enviar mensajes</button>
            }

        </div>
    )
}

export default Chat