function History(props) {

    const { history, showHistory } = props;
    console.log(props);

    return (
        <>
            <ul>
                {
                    history.length ?
                        history.map((item, index) => (
                            <li key={`History - ${index}`}>
                                <button onClick={() => { showHistory(index) }}>
                                    {item.method}: {item.url}
                                </button>
                            </li>
                        ))
                        : 'zdfafdasfd'
                }
            </ul>
        </>
    )
}

export default History;