import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    /**
     * 
     * @param {*} formProps.input
     * @param {*} formProps.label
     *  
     */
    // Changed to function becuse 'this' needs to reference to StreamCream class
    renderInput = ({input, label, meta}) => {    
        // console.log(meta);
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        // console.log({...input});
        // console.log(input);
        return (
        // <input 
        //     onChange={formProps.input.onChange}  
        //     value={formProps.input.value} 
        // />
        // ...is equal to
        // <input {...formProps.input} />
        // even simpler version...

            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        // console.log(formValues);
        console.log(this.props);
        this.props.onSubmit(formValues);
    }
    
    render() {
        // Has many more props due to Redux-Form
        // console.log(this.props);
        return (
            <form 
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "Title is required";
    }

    if(!formValues.description) {
        errors.description = "Description is required";
    }

    return errors;
};

export default reduxForm({
    form: "streamFrom",
    validate
})(StreamForm);
