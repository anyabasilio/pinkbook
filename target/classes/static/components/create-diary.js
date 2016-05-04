const React = require('react');
const TextField = require('material-ui/lib/text-field');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const ContentAdd = require('material-ui/lib/svg-icons/content/add');
const Dialog = require('material-ui/lib/dialog');
const FlatButton = require('material-ui/lib/flat-button');

export default class CreateDiary extends React.Component {
    constructor() {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {dialogOpen: false};
    }

    handleDialogOpen() {
        this.setState({dialogOpen: true});
    }

    handleDialogClose() {
        this.setState({dialogOpen: false});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newDiary = {};
        newDiary['title'] = React.findDOMNode(this.refs['title']).value.trim();
        newDiary['content'] = React.findDOMNode(this.refs['content']).value.trim();
        newDiary['createdDate'] = new Date();
        this.props.onCreate(newDiary);

        // clear out the dialog's inputs
        React.findDOMNode(this.refs['title']).value = '';
        React.findDOMNode(this.refs['content']).value = '';
    }

    onCreate(newDiary) {
        follow(client, root, ['diaries']).then(diaries => {
            return client({
                method: 'POST',
                path: diaries.entity._links.self.href,
                entity: newDiary,
                headers: {'Content-Type': 'application/json'}
            })
        }).then(response => {
            return follow(client, root, [
                {rel: 'diaries'}]);
            }).done(response => {
                this.handleDialogClose();
            });
    }

    onNavigate(navUri) {
        client({method: 'GET', path: navUri}).done(diaries => {
            this.setState({
                diaries: diaries.entity._embedded.diaries,
                links: diaries.entity._links
            });
        });
    }

    render() {
        var actions = [
          <FlatButton label="Cancel" secondary={true} onTouchTap={this.handleDialogClose} />,
          <FlatButton label="Submit" primary={true} onTouchTap={this.handleSubmit} />,
        ];
        return (
            <div>
                <Dialog title="Dialog With Actions" actions={actions} modal={true} open={this.state.dialogOpen}>
                    <TextField floatingLabelText="title" ref="title"/>
                    <TextField multiLine={true} rows={10} underlineShow={false} floatingLabelText="Diary contents" floatingLabelStyle={{lineHeight: '0px'}} ref="content"/>
                </Dialog>
                <FloatingActionButton className="floating-add-button" onClick={this.handleDialogOpen()}><ContentAdd /></FloatingActionButton>
            </div>
        );
    }
}
