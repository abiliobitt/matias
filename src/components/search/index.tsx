import { ChangeEvent, FC, useState } from "react"

type SearchBarProps = {
    searchFunction: (text: string) => any
}

const SearchBar: FC<SearchBarProps> = ({searchFunction}) => {
    const [value, setValue] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value
        setValue(text)
        if( text.length > 3){
            searchFunction(text)
        }
    }

    return(
        <>
        <input type="text" name="searchbar" onChange={(e) => handleChange(e)} value={value}/>
        </>
    )
}

export default SearchBar