import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import ListButtons from './ListButtons';
import { useEffect } from 'react';
import SingleCard from './SingleCard';

const Lista = ({retriveTitle}) => {
    const [list, setList] = useState([]);
    const [listFiltered, setListFiltered] = useState([]);

    const categories = ['fantasy', 'history', 'horror', 'romance', 'scifi']
    // const categories = ['Fantasy', 'History', 'Horror', 'Romance', 'Scifi', 'Astronomia', 'Cucina']

    function handleSearch(event) {
        let value = new RegExp(event.target.value, 'i') // 'i' = 'case insensitive
        const actualState = list
        const result = actualState.filter((book) => {
            return value.test(book.title)
        })
        setListFiltered(result)
    }

    useEffect(() => {
        setListFiltered(list)
        retriveTitle(list[0] ? 'Categoria ' + list[0].category : 'Tutte le Categorie')
    }, [list])

    return (
        <>
            <input type="text" onChange={handleSearch}/>
            <ListButtons setList={setList} />

            <div className="d-flex justify-content-between flex-wrap">
            {listFiltered.map((book) => 
                <SingleCard book={book} key={book.asin} />
      
            )}
            </div>
        </>
    )
};

export default Lista;