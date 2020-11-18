import React from 'react';
import SignupForm from '../components/SignupForm';
// const Signup = () => {
//     return (
//         <React.Fragment>

//         </React.Fragment>
//     );

// };
// export default Signup;

// Re-render happens ONLY when state or props are changed||updated
// If the state or prop of parent component is updated all the child component will re-render
class Signup extends React.Component {    
    constructor(props) {
        super(props)
    
        this.state = {
            data:[],
            page: "Page",
            title: "SignUp",
            phoneNumber: 98765456788,
            someOtherData: {

            }
        }
    }

    onSubmitHandler = (event) => {
        if(event) {
            console.log('INSIDE IF CLASS BLOCK')
            event.preventDefault();
            console.log(event);
        }
        alert('onSubmitHandler')   
    }

    inputHandler = (e) => {
        console.log(e.target.value);
    }

    onCancel = () => {
        // Wrong way
        // this.state.title = "Some Other Title";

        // Correct way
        this.setState({
            page: "New Page",
            title: "Some Other Title",
        });
    }

    render() {
        const propsObj = {
            inputHandler: this.inputHandler,
            title: this.state.title,
            // data: {
            //     email:'',
            //     pass:'',
            // },
            // datarr:[]
        };
        console.log(this.state)
        return(
            <React.Fragment>
                <h1>{this.state.page}</h1>
                <SignupForm
                    onSubmit={this.onSubmitHandler}
                    onCancel={this.onCancel}
                    pageName="Signup"
                    {...propsObj}
                    title={this.state.title}
                />
            </React.Fragment>
        );
    }
}

export default Signup;
