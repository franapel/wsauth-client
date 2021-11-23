import { io } from 'socket.io-client'
import { useEffect, useMemo, useState } from 'react'
import ChatComp from '../components/Chat'

const WS_URL = process.env.WS_URL || 'http://localhost:80'

const Chat = ( { user } ) => {

    const [msgs, setMsgs] = useState([])

    const socket = useMemo(() => io(WS_URL), [])

    useEffect(() => {
        socket.on('connect', () => {
            socket.emit('authenticate', user ? {token: user.token} : {token: 'no token'})
            console.log(socket.id) // 'G5p5...'
        })
        socket.on('msg-response', (resMsg) => {
            setMsgs(prev => [...prev, resMsg])
        })
    }, [socket, user])

    const emitMsg = (msg) => socket.emit('msg', msg)

    

    return (
        <div>
            <div>{user ? 'conectado' : 'desconectado'}</div>
            <ChatComp user={user} msgs={msgs} setMsgs={setMsgs} emitMsg={emitMsg}/>
        </div>
    )
}

export default Chat