import { Header } from 'presentation/components/Header'
import { Content } from 'presentation/components/Content'
import { Footer } from 'presentation/components/Footer'

const StandardLayout = ({ children }) => (
    <>
        <Header />
        <Content>{children}</Content>
        <Footer />
    </>
)

export default StandardLayout