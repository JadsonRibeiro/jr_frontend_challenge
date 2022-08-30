import type { NextPage } from 'next'
import { useState } from 'react'

import * as S from './styles'

const Home: NextPage = () => {
  const [username, setUsername] = useState("")

  const handleSearch = async () => {}

  return (
    <S.Container>
      <label htmlFor="search">
        Usuário
        <input type="text" name="search"/>
      </label>

      <button onClick={handleSearch}>Buscar</button>
    </S.Container>
  )
}

export default Home
