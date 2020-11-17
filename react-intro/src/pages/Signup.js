import React from 'react';
import SignupForm from '../components/SignupForm';
// const Signup = () => {
//     return (
//         <React.Fragment>

//         </React.Fragment>
//     );

// };
// export default Signup;


class Signup extends React.Component {

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

    render() {
        const propsObj = {
            inputHandler: this.inputHandler,
            title: 'SignUp',
            data: {
                email:'',
                pass:'',
            },
            datarr:[]
        };
        return(
            <React.Fragment>
                <SignupForm
                onSubmit={this.onSubmitHandler}
                pageName="Signup"
                {...propsObj}
            />
            </React.Fragment>
        );
    }
}

export default Signup;
