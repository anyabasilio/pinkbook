const React = require('react');
const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardTitle = require('material-ui/lib/card/card-title');
const CardText = require('material-ui/lib/card/card-text');

export default class DiaryContainer extends React.Component {
    render() {
        const { user, diary } = this.props;
        var authorName = user ? (user.firstName + ' ' + user.lastName) : '-';
        return (
            <Card className="diary-container">
               <CardHeader
                 title={diary.title}
                 subtitle={authorName + ', ' + diary.createdDate}
                 avatar="http://lorempixel.com/100/100/nature/"
               />
               <CardMedia><img src="http://lorempixel.com/600/337/nature/" /></CardMedia>
               <CardText>{diary.content}</CardText>
            </Card>
        );
    }
}
