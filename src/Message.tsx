function Message () {
    const name = 'Eric James';
    if (name)
        return <h1>Welcome {name}!</h1>
    return <h1>Hello I'm Eric James</h1>
}

export default Message;