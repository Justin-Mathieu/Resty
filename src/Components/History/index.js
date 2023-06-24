import { useReducer, useState } from "react";

function historyReducer(initialState, action) {
    switch (action.type) {
        case 'add':
            return { ...}
    }
}

function History(props) {
    console.log(props.history);


    return (
        <>

            <li>{props.history}</li>
        </>

    )


}

export default History;