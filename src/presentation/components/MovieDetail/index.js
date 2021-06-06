import { Box } from "@rebass/grid"
import { BASE_IMAGE_URL } from "utils/constants"

export const MovieDetail = ({ data }) => (
    <Box p={2}>
        <Box>
            {data.poster_path && (
                <img
                    src={`${BASE_IMAGE_URL}${data.poster_path}`}
                    alt={data.title}
                    height={400}
                />
            )}
        </Box>
        <Box mt={2}>
            <h2>{data.title}</h2>
        </Box>
        <Box mt={2}>
            <p>{data.overview}</p>
        </Box>
        {data.genres && (
            <Box mt={3}>
                <h4>Genres</h4>
                <span>{data.genres.map(item => item.name).join(', ')}</span>
            </Box>
        )}
        <Box mt={3}>
            <h4>Language</h4>
            <span>{data.original_language}</span>
        </Box>
    </Box>
)