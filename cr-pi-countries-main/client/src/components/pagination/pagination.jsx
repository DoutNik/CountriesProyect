import React, { useState } from "react";
import "./pagination.css"

export const Pagination = ({page, setPage, max}) => {
    const [input, setInput] = useState(1)

    const nextPage = () => {
        setInput(parseInt(input) + 1)
        setPage(parseInt(page) + 1)
    }

    const prevPage = () => {
        setInput(parseInt(input) - 1)
        setPage(parseInt(page) - 1)
    }

    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            setPage(parseInt(e.target.value))
            if (
                parseInt (e.target.value < 1) ||
                parseInt(e.target.value) > Math.ceil(max) ||
                isNaN(parseInt(e.target.value))
                ) {
                    setPage(1)
                    setInput(1)
                } else {
                    setPage(parseInt(e.target.value))
                }
        }
    }

    const onChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="pagination-conteiner">
            <button className="button-pagination" disabled={page === 1 || page < 1} onClick={prevPage}>prev</button>
            <input className="input-pagination" name='page' onChange={onChange} onKeyDown={(e) => onKeyDown(e)} autoComplete="off" value={input}/>
            <p> de {max}</p>
            <button className="button-pagination" disabled={page === Math.ceil(max) || page > Math.ceil(max)} onClick={nextPage}>next</button>
        </div>
    )
}