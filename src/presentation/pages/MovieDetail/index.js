import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { MovieDetail as Detail } from 'presentation/components/MovieDetail'
import { Spinner } from "presentation/components/Spinner"
import { Fade } from 'presentation/components/Fade'
import api from 'utils/api'

const MovieDetail = ({ match }) => {
    const [loading, setLoanding] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        const id = match.params.id

        const getMovieDetail = async (id) => {
            setLoanding(true)
            const resp = await api.getMovieDetail(id)

            setLoanding(false)
            
            if (resp && resp.data) {
                const data = resp.data
                setData(data)
            } else {
                setData({})
            }
        }

        getMovieDetail(id)
    }, [match.params.id])
    
    return (
        <Fade p={4}>
            {loading && <Spinner show />}
            {!loading && <Detail data={data} />}
        </Fade>
    )
}

export default withRouter(MovieDetail)