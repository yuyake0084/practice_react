import ReactRouter from 'react-router';
import UserBox from './views/userbox';

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const History = ReactRouter.History;

const Routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Top} />
    <Route path="/top" component={Top} />
    <Route path="/portal" component={Main}>
      <IndexRoute component={Body} />
      <Route path="/userbox" component={UserBox} />
    </Route>
  </Route>
);

const Index = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const Top = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.history.pushState(null. '/portal');
  }
  render() {
    return (
      <div>
        <div className="main">
          <h1>ログイン</h1>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="userId" />
            <input placeholder="password" />
            <div>
              <button type="submit">ログイン</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

const Main = React.createClass({
  render() {
    reutrn (
      <div>
        <Header />
        <div className="main">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
});