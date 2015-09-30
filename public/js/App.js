/**
 * Created by parag on 27/09/15.
 */
var NavBar = React.createClass({
    render : function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Appointment Calendar</a>
                </div>
                <div>
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Events</a></li>
                </ul>
            </div>
            </div>
        </nav>
        );
    }
});


var StaticContent = React.createClass({
    render : function() {
        return (
        <div class="jumbotron text-center">
            <h1><span className="fa fa-lock"></span>AppointMents</h1>
            <a href="/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span>login with Google</a>
        </div>
        )
    }
});

var App = React.createClass({
    render : function() {
        return (
            <div>
                <NavBar/>
                <StaticContent/>
            </div>
        );
    }
});

React.render(<App />, document.getElementById("appContainer"));