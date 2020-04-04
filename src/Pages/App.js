import React from 'react';
import { ProductList } from 'Pages/ProductList';
import { ProductDetail } from 'Pages/ProductDetails';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Navbar } from './Navbar';
import { Cart } from './Cart';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      
      <Layout style={ styles.layoutStyle }>
      <Router>
      <Header> <Navbar/>   </Header>
      <Content>
      
        <Switch>
          <Route path="/" component={ProductList} exact />
          <Route path="/details" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
        </Switch>
     
      </Content>
      <Footer>Footer</Footer>
      </Router>

    </Layout>
    </div>
   
  );
}


const styles = {
  layoutStyle: {
      minHeight: '100vh'
  }
}

export default App;
