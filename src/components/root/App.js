import React from 'react';
import { Container } from 'reactstrap';
import Dashboard from './Dashboard';
import Navi from '../navi/Navi';
import { Route, Switch } from "react-router-dom";
import CartDetail from "../../components/cart/CartDetail";
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';

function App() {
  return (
    <div >
      <Container>
        <Navi />
        <Switch>
          
          <Route path="/" exact component={Dashboard}/>
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
          <Route path="/saveproduct" component={AddOrUpdateProduct}/>
          <Route path="/cart" exact component={CartDetail}/>
          <Route path="" component={NotFound}></Route>

        </Switch>
      </Container>
    </div>
  );
}

export default App;
