import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Produto from './pages/produto'
import Detalhe from './pages/detalheProduto/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" component={Produto} />
            <Route path="/detalhe" component={Detalhe} />

            </Switch>
        </BrowserRouter>
    )
}
