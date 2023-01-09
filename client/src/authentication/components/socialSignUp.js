import React from 'react'
import facebook from '../../Assets/form/facebook.png'
import whatsapp from '../../Assets/form/whatsapp.png'
import insta from '../../Assets/form/insta.png'
import twitter from '../../Assets/form/twitter.png'

const SocialSignUp = () => {
    return (
        <div className="sign_in_social">
            <p>
                Or Sign in with social platforms
            </p>
            <ul>
                <li id="insta"><img src={insta} alt="" /></li>
                <li id="wapp"><img src={whatsapp} alt="" /></li>
                <li id="face"><img src={facebook} alt="" /></li>
                <li id="twt"><img src={twitter} alt="" /></li>
            </ul>
        </div>
    )
}

export default SocialSignUp