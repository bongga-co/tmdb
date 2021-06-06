import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Spinner } from 'presentation/components/Spinner'

const Movies = lazy(() => import('presentation/pages/Movies'))
const MovieDetail = lazy(() => import('presentation/pages/MovieDetail'))
const NotFound = lazy(() => import('presentation/pages/NotFound'))

export const Routes = () => (
    <Suspense fallback={<Spinner show={true} />}>
        <Switch>
            <Redirect exact from="/" to="/movies" />
            <Route exact path='/movies' component={Movies} />
            <Route exact path='/movies/:id' component={MovieDetail} />
            <Route component={NotFound} />
        </Switch>
    </Suspense>
)