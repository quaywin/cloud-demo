import { connect } from 'react-redux';
import Files from '../components/Files';
import { toggleMenu } from '../reducers/app';

const mapStateToProps = state => ({
  files: state.files,
});

const mapDispatchToProps = {
  toggleMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(Files);
