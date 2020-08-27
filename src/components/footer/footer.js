import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../footer/footer.css'
class Footer extends React.Component {
    state = {}
    render() {
        return (
            <div className="footer">

                Connect with us on &nbsp;
                <i className="fa fa-facebook-f" id="fb" style={{ color: "darkblue" }}></i> &nbsp;/ &nbsp;
                <i className="fa fa-linkedin" id="ln" style={{ color: "rgb(100, 100, 202)" }}></i>&nbsp; /&nbsp;
                <i className="fa fa-instagram" id="insta" style={{ color: "rgb(231, 16, 52)" }}></i>&nbsp; /&nbsp;
                <i className="fa fa-pinterest-square" id="pin" style={{ color: "rgb(150, 11, 34)" }}></i>
            &nbsp;
            &nbsp;
            &emsp; &emsp;
            For any queries Dial: 1800-123-333 (toll-free number)
            </div>
        );
    }
}

export default Footer;