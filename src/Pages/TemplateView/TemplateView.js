import React, { Component } from 'react'
import TemplateModel from '../../Models/TemplateModel';

// TemplateView Props:
//      activeUser={activeUser}

export default class TemplateView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeTemplateId : "",
            Template : null
        }
    }

    componentDidMount() {
        //Extracting the Template ID from window URL . 
        let id = window.location.href.split("/")[window.location.href.split("/").length - 1]   
        // Async readung from Parse Templates DB
        const templates = Parse.Object.extend('Templates');
        const query = new Parse.Query(templates);
        //Query for Template.id
        query.equalTo("id", id); 
        query.find().then((results) => {
            console.log('Templates found', results);
            let templateResult = new TemplateModel(results)
            // Updating State with Template_id; Extracted Template from Parse Template DB
            this.setState({
                activeTemplateId : id,
                Template: templateResult
            })
          }, (error) => {
            console.error('Error while fetching Templates', error);
          });

    }
    
    render() {

        const { activeUser } = this.props;


        return (
            <div classname="TemplateView">
                
            </div>
        )
    }
}
