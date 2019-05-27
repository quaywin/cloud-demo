import { connect } from 'react-redux';
import { requestLogin, verifyLogin } from '../reducers/auth';
import App from '../components/App';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  requestLogin,
  verifyLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);