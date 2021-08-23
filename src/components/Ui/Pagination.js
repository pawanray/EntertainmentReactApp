import React, { useState } from 'react';

export default function Pagination({ countOfPages = 10, setPage }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    const renderPageNumbers = (pageNumbers, countOfPages) => {
        return (
            <ul>
                {
                    pageNumbers.map(number => {

                        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
                            console.log(number, currentPage)
                            return (
                                <li
                                    id={number}
                                    className={number === currentPage ? 'active' : null}
                                    onClick={(e) => { setPage(e.target.id); setCurrentPage(+e.target.textContent) }}
                                >
                                    {number}
                                </li>
                            );
                        }
                        else {
                            return null
                        }

                    })}
            </ul>
        );
    };

    const prevHandler = () => {
        setCurrentPage(currentPage - 1);
        setPage(currentPage - 1);
        if ((currentPage - 1)%pageNumberLimit===0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }
    const nextHandler = () => {
        setCurrentPage(currentPage + 1);
        setPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    const buildComponent = () => {
        const pageNumbers = [];
        for (let i = 1; i <= countOfPages; i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="pagination">
                <button onClick={prevHandler} disabled={currentPage === 1 ? true : false}>Prev</button>
                {renderPageNumbers(pageNumbers, countOfPages)}
                <button onClick={nextHandler} disabled={currentPage === countOfPages ? true : false}>Next</button>
            </div>
        );
    };


    return (
        <div>
            {
                buildComponent()
            }
        </div>
    )
}