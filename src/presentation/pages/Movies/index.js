import { useEffect, useState } from 'react'
import { Box, Flex } from "@rebass/grid"
import { useHistory } from 'react-router-dom'
import { MovieList } from "presentation/components/MovieList"
import { Searcher } from "presentation/components/Searcher"
import { Spinner } from "presentation/components/Spinner"
import { useLocalStorage } from 'hooks/storage'
import api from 'utils/api'

const Movies = () => {
    const history = useHistory()
    const [favorites, setFavorites] = useState([])
    const [movies, setMovies] = useState([])
    const [loading, setLoanding] = useState(false)
    const [savedFavorites, saveFavorites] = useLocalStorage('favorites')

    useEffect(() => {
        setFavorites(savedFavorites)
    }, [savedFavorites])

    const toggleFavoritesIcon = (data, item, shouldSplice = false) => {
        let fav = data
        const idx = data.findIndex(i => i.id === item.id)
        
        
        if (idx !== -1) {
            if (shouldSplice) {
                fav.splice(idx, 1)
            } else {
                fav[idx].favorited = !fav[idx].favorited
            }
        } else {
            fav = [...fav, { ...item, favorited: true }]
        }

        return fav
    }

    const searchMovie = async (text) => {
        if (text!== null && typeof text !== 'undefined' && text.trim() === '') {
            setMovies([])
            return
        }
        
        setLoanding(true)
        const resp = await api.getMovies(text)

        setLoanding(false)
        
        if (resp && resp.data) {
            const data = resp.data.results
            setMovies(data)
        } else {
            setMovies([])
        }
    }

    const handleFavorites = (e, item) => {
        e.stopPropagation()
        
        let fav = toggleFavoritesIcon(favorites, item, true)
        let mov = toggleFavoritesIcon(movies, item)
        
        setMovies(mov)
        setFavorites(fav)
        saveFavorites(fav)
    }

    const displaySearcher = () => {
        return (
            <Flex mb={4} width={1} justifyContent={['center', 'center', 'flex-end']}>
                <Searcher onChange={value => searchMovie(value)} />
            </Flex>
        )
    }

    const displayMovies = (movies, favorites) => {
        if (loading) {
            return <Spinner show />
        }

        return (
            <Box>
                {movies.length === 0 ? <h2>Favorites</h2> : null}
                {movies.length === 0 && favorites.length === 0 && (
                    <Flex py={5} justifyContent='center' alignItems='center'>
                        <p>No available movies</p>
                    </Flex>
                )}
                <MovieList
                    data={movies.length === 0 ? favorites : movies}
                    onDetail={(e, item) => history.push(`/movies/${item.id}`)}
                    onFavorited={handleFavorites}
                />
            </Box>
        )
    }

    return (
        <Box p={4}>
            {displaySearcher()}
            {displayMovies(movies, favorites)}
        </Box>
    )
}

export default Movies