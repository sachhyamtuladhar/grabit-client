import React, {Component} from 'react'
import axios from 'axios'

import {withRouter} from 'react-router-dom'

import {
    Container, Col, Form,
    FormGroup, Label, 
    Button,
  } from 'reactstrap';


import CustomInput from '../UI/Input/Input'

class LoginForm extends Component {
    state={
        loginForm: {
            name: {
                title:"Name",
                id: "",
                type: 'text',
                placeholder: 'Your Name',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 7
                },
                validity: false,
                value: '',
                touched: false
                
            },
            email: {
                title:"Email",
                id: "email",
                type: 'email',
                placeholder: 'Your E-Mail',
                validation: {
                    required: true,
                    minLength: 5
                },
                validity: false,
                value: '',
                touched: false
            },
            password: {
                title:"Password",
                id: "password",
                type: 'password',
                placeholder: 'Your E-Mail',
                validation: {
                    required: true,
                    minLength: 5
                },
                validity: false,
                value: '',
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    submitHandler = (e) => {
        this.setState({
            loading: true
        })

        e.preventDefault()

        const formData = {}

        Object.keys(this.state.loginForm).forEach((input)=>{
            formData[input] = this.state.loginForm[input].value
        })

     
        console.log(this.props)

        axios.post('/users', formData)
            .then(res=>{
                console.log(res)
                this.setState({
                    loading: false,
                    purchasing: false
                })
                this.props.history.push('/')
            })
            .catch(e=>{
                this.setState({
                    loading: false,
                    purchasing: false
                })
                console.log(e)
            })
    }

    chackValidity = (value, rules) => {
        let isValid = true;

        if(!rules)
            return

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length > rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length < rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const upDatedForm =  {...this.state.loginForm}
        const upDatedFormEntry =  {...upDatedForm[inputIdentifier]}

        upDatedFormEntry.value = event.target.value
        upDatedFormEntry.validity = this.chackValidity(upDatedFormEntry.value, upDatedFormEntry.validation)
        upDatedFormEntry.touched = true
        upDatedForm[inputIdentifier] = upDatedFormEntry

        
        let formIsValid = true
        
        Object.keys(upDatedForm).forEach(ele=>{
            formIsValid = upDatedForm[ele].validity && formIsValid
        })
        

        this.setState({
            loginForm: upDatedForm,
            formIsValid
        })
    

    }


    render(){

        const formFields = Object.keys(this.state.loginForm).map(
            (inp)=>(
                <Col key={this.state.loginForm[inp].title}>
                    <FormGroup>
                    <Label>{this.state.loginForm[inp].title}</Label>
                    <CustomInput
                        type={this.state.loginForm[inp].type}
                        name={this.state.loginForm[inp].name}
                        id={this.state.loginForm[inp].id}
                        placeholder={this.state.loginForm[inp].placeholder}

                        invalid={!this.state.loginForm[inp].validity}
                        touched={this.state.loginForm[inp].touched}

                       
                        changeHandler={(e)=>this.inputChangeHandler(e, inp)}
                    />
                    </FormGroup>
                </Col>
            )
        )
        

        return (      
            <Container className="App">
                <h2>Register</h2>
                <Form className="form">
                {formFields}
                <Button onClick={this.submitHandler}>Submit</Button>
                </Form>
           </Container>
        )
    }
}

export default withRouter(LoginForm)
