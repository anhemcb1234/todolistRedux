import {useState} from 'react'

function Test1() {
    const [list, setList ] = useState(() => {
        let listnumbers = localStorage.getItem('numbers')
        return JSON.parse(listnumbers) ?? []
      });

    const [number, setNumber ] = useState();
    const [listFind, setListFind] = useState([])
    const [find, setFind] = useState()
    const handleClick = () => {
        setList(pre => {
            let newArray = [...pre, number];
            localStorage.setItem('numbers', JSON.stringify(newArray))
            return newArray
        })
        setNumber('')
    }
    const hadnleClear = () => {
        localStorage.removeItem('numbers')
        setList([])
    }
    const handleFind = () => {
        let listnumbers = localStorage.getItem('numbers')
        let findNumbers = JSON.parse(listnumbers);
        for(let i in findNumbers) {
            if(findNumbers[i] == find) {
                setListFind(pre => [...pre,[i]])
            }
        }

    }
    return (
        <div>
            <input 
                style={{margin:10}}
                onChange={e => setNumber(e.target.value)}
                value={number}
            />  
            <input 
                style={{margin:10}}
                onChange={e => setFind(e.target.value)}
                value={find}
            />
            <div
                style={{margin:10}}
            >{list.map(x => <div>{x}</div>)}
            </div>
            <div>
                <p>Vi tri can tim la: </p>
                <p>{listFind.map(x => <div>{x}</div>)}</p>
            </div>
            <button style={{margin:10}} onClick={handleClick}>Click</button>
            <button style={{margin:10}} onClick={handleFind}>Find</button>
            <button style={{margin:10}} onClick={hadnleClear}>Clear</button>

        </div>
    )
}
export default Test1