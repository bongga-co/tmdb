import styled from "styled-components"
import PropTypes from 'prop-types'
import { Box } from "@rebass/grid"
import { Fade } from "presentation/components/Fade"
import { BASE_IMAGE_URL } from "utils/constants"
import { Fav } from "presentation/components/Icons"

const Container = styled(Box).attrs({ p: 2 })`
    cursor: pointer;
    position: relative;

    &:hover {
        transition: all 0.5s ease-out;
        transform: scale(1.1);
    }

    & div svg {
        fill: red;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 15;
    }
`

export const Movie = ({ data, onDetail, onFavorited }) => (
    <Fade>
        <Container onClick={onDetail}>
            <img
                src={`${BASE_IMAGE_URL}/${data.poster_path}`}
                alt={data.title}
                height={200}
            />
            <p>{data.title}</p>
            <Box onClick={onFavorited}>
                <Fav color={data.favorited ? 'red' : '#eee'} />
            </Box>
        </Container>
    </Fade>
)

Movie.propTypes = {
    data: PropTypes.object,
}

Movie.defaultProps = {
    data: [],
}