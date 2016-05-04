const React = require('react');
const ReactDOM = require('react-dom');
const injectTapEventPlugin = require('react-tap-event-plugin');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const client = require('./client');

const NavBar = require('./components/nav-bar');
const RecentDiaryList = require('./components/recent-diary-list');
const CreateDiary = require('./components/create-diary');
const Theme = require('./material-ui-theme');

injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: null, diaries: []};
    }

    getChildContext() {
        return {muiTheme: ThemeManager.getMuiTheme(Theme)}
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/users/1'}).done(response => {
            this.setState({user: response.entity});
        });
        client({method: 'GET', path: '/api/diaries'}).done(response => {
            this.setState({diaries: response.entity._embedded.diaries.filter(diary => diary.userId == 1)});
        });
    }

    render() {
        return (
            <div>
                <NavBar user={this.state.user}/>
                <div className="main-container">
                    <RecentDiaryList user={this.state.user} diaries={this.state.diaries}/>
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
