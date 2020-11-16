const Login = () => {

    const onSubmitHandler = (event) => {
        if(event) {
            console.log('INSIDE IF BLOCK')
            event.preventDefault();
            console.log(event);
        }
        alert('onSubmitHandler')   
    }

    const inputHandler = (e) => {
        console.log(e.target.value);
    }

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmitHandler();
            }}>
                <input name="email" type="text" onChange={inputHandler} />
                <input name="password" type="password" onChange={inputHandler} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
