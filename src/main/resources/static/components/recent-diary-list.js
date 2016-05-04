const React = require('react');
const DiaryContainer = require('./diary-container');

export default class RecentDiaryList extends React.Component {
    render() {
        var diaries = this.props.diaries.map((diary, index) => <DiaryContainer key={index} user={this.props.user} diary={diary}/>);
        return (
            <div className="diary-list-container">
                <h3 className="page-header">Public Diaries</h3>
                {diaries}
            </div>
        );
    }
}
