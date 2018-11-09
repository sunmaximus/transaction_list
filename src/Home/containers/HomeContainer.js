import { connect } from 'react-redux'
import HomeComponent from '../components/HomeComponent';

const mapDistpatchToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapDistpatchToProps)(HomeComponent);
