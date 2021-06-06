import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import { Movie } from 'presentation/components/Movie'

export const MovieList = ({ data , onDetail, onFavorited }) => {
    return (
        <Flex flexWrap='wrap' justifyContent={['center', 'space-between', 'space-between']}>
            {data.map((item) => (
                <Movie
                    key={item.id}
                    data={item}
                    onDetail={e => onDetail(e, item)}
                    onFavorited={e => onFavorited(e, item)}
                />
            ))}
        </Flex>
    )
}

MovieList.propTypes = {
    data: PropTypes.array,
}

MovieList.defaultProps = {
    data: [],
}