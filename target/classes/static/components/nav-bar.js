const React = require('react');
const AppBar = require('material-ui/lib/app-bar');

export default class NavBar extends React.Component {
    render() {
        var userName = this.props.user ? this.props.user.firstName + ' ' + this.props.user.lastName : '-';
        return (
            <div className="nav-bar">
                <AppBar
                    title="Pinkbook"
                    iconElementLeft={<span className="material-icons">favorite</span>}
                />
            </div>
        );
    }
}
