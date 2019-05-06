import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <div className='footer'>
                <hr/>
                This is react web programming assignment <br/> <br/>
                <div className='footerNotice'>sage Notice: All the Air Quality data are unvalidated at the time of publication, and due to quality assurance these data may be amended, without notice, at any time. The World Air Quality Index project has exercised all reasonable skill and care in compiling the contents of this information and under no circumstances will the World Air Quality Index project team or its agents be liable in contract, tort or otherwise for any loss, injury or damage arising directly or indirectly from the supply of this data.</div>
            </div>
        );
    }
}

export default Footer;