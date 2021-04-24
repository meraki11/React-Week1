import React from 'react';

export default class LogIn extends React.Component {
    render() {
        return (
            <div className="flex-container">
                <form>
                    <h3>Log In</h3>
                    <br />
                    <ul>
                        <li>
                            <label>Username:</label>
                            <input type="text" id="userName" placeholder="Please enter Username"></input>
                        </li>
                        <br />
                        <li>
                            <label>Password:</label>
                            <input type="text" id="password" placeholder="Please enter Password"></input>
                        </li>
                        <br />
                        <li className="Button">
                            <input type="submit" value="Submit"></input>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}
