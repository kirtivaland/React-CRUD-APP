import React from 'react';

import Content from '../../components/content/content.component';
import FormInput from '../../components/form-input/form-input.component'


import CustomButton from '../../components/custom-button/custom-button.component';

class AddBlog extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            author: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ title: '', author: '' })
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <Content>
                <div className="sign-in">
                    <h2>Add Blog</h2>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="title" label="Title" type="text" value={this.state.title} handleChange={this.handleChange}  required />
                        
                        <FormInput name="author" label="Author" type="text" value={this.state.author} handleChange={this.handleChange} required />

                        <CustomButton type="submit">Save</CustomButton>
                    </form>
                </div>
            </Content>
        )
    }
}

export default AddBlog;