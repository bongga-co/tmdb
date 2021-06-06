import styled from "styled-components"
import dims from 'presentation/theme/dims'

export const Content = styled.main`
    min-height: calc(100vh - ${dims.header} - ${dims.footer});
`