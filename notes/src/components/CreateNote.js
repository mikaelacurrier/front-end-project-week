import React, {Component} from 'react';
import axios from 'axios';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: props.notes
         }
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    createNote = event => {
        event.preventDefault();
        console.log('button clicked')
        const newNote = {
          tags: this.state.tags,
          title: this.state.title,
          textBody: this.state.textBody
        }
        axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
        .then(response => {
          this.setState({notes: response.data })
        })
        .catch(err => console.log(err))
      }
    render() { 
        return ( 
            <div>
                <form>
                    <input
                    type="text"
                    placeholder="Title"
                    name='title'
                    value={this.state.title}
                    onChange={this.changeHandler} />
                    <input
                    type="text"
                    placeholder="Content"
                    name='textBody'
                    value={this.state.textBody}
                    onChange={this.changeHandler} />
                </form>
                <button onClick={this.createNote}>Save</button>
            </div>
         );
    }
}
 
export default CreateNote;