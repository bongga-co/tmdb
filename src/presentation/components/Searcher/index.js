import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { Search } from 'presentation/components/Icons'
import { useState } from 'react'

const Container = styled(Flex).attrs({
    justifyContent: 'space-between',
    alignItems: 'center',
    width: ['100%', '100%', 'auto'],
})`
    border: 1px solid #aaa;
    border-radius: 20px;
    height: 40px;
    padding: 10px;

    & input {
        outline: none;
        border: 0;
        margin-right: 5px;
        width: 100%;
    }

    & svg {
        width: 20px;
    }
`

export const Searcher = ({ onChange }) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        const val = e.target.value
        setValue(val)

        if (onChange) {
            onChange(val)
        }
    }

    return (
        <Container>
            <input
                value={value}
                placeholder='Buscar Película...'
                onChange={handleChange}
            />
            <Search />
        </Container>
    )
}