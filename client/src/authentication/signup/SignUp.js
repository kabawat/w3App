import React, { useEffect, useState } from 'react'
import './style.css'
import { BsArrowLeft } from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi'
import { MdOutlineDownloadDone } from 'react-icons/md';
import { FormContainer, Input } from './SignUp.style';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
const SignUp = () => {
    const socket = useSelector(state => state.socketController)
    const Navigate = useNavigate()
    useEffect(() => {
        const logout = async () => {
            await axios.get('http://localhost:2917/logout', {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:2917/',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
            })
        }
        logout()
    }, [])
    // login form  handal 
    const [loginData, SetLoginData] = useState({
        user: '',
        pwd: ''
    })
    const loginHandaler = (event) => {
        const { name, value } = event.target
        SetLoginData({
            ...loginData,
            [name]: value
        })
    }

    const [loginCls, SetLoginCls] = useState({
        user: 'f_row',
        pwd: 'f_row'
    })

    // Login Username Handale 
    const UserNameHandalBlur = (event) => {
        if (event.target.value !== '') {
            SetLoginCls({
                ...loginCls,
                user: 'f_row last focus'
            })
        } else {
            SetLoginCls({
                ...loginCls,
                user: 'f_row last'
            })
        }
    }

    const UserNameHandalFocus = () => {
        SetLoginCls({
            ...loginCls,
            user: 'f_row last focus'
        })
    }

    // login pwd handale 
    const loginPwdHandalBlur = (event) => {
        if (event.target.value !== '') {
            SetLoginCls({
                ...loginCls,
                pwd: 'f_row last focus'
            })
        } else {
            SetLoginCls({
                ...loginCls,
                pwd: 'f_row last'
            })
        }
    }

    const loginPwdHandalFocus = () => {
        SetLoginCls({
            ...loginCls,
            pwd: 'f_row last focus'
        })
    }

    // login submit handal 
    const [loginValid, SetLoginValid] = useState(false)
    const loginHandal = async (event) => {
        const { user, pwd } = loginData
        event.preventDefault()
        if (user !== '' && pwd !== '') {
            await axios.post('http://localhost:2917/login', loginData, {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:2917/',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
            }).then((result) => {
                console.log(result);
                SetLoginValid(true)
                setTimeout(() => {
                    Navigate('/')
                }, 1000)
            })
        } else {
            if (pwd === '' && user === '') {
                SetLoginCls({
                    user: 'f_row last shake',
                    pwd: 'f_row last shake'
                })
                setTimeout(() => {
                    SetLoginCls({
                        user: 'f_row last',
                        pwd: 'f_row last'
                    })
                }, 300);

            } else if (pwd === '') {
                SetLoginCls({
                    ...loginCls,
                    pwd: 'f_row last shake'
                })
                setTimeout(() => {
                    SetLoginCls({
                        ...loginCls,
                        pwd: 'f_row last'
                    })
                }, 300);
            } else if (user === '') {
                SetLoginCls({
                    ...loginCls,
                    user: 'f_row last shake'
                })
                setTimeout(() => {
                    SetLoginCls({
                        ...loginCls,
                        user: 'f_row last'
                    })
                }, 300);
            }
        }
    }
    // forget Password
    const [mainClass, SetMainClass] = useState('formBox level-login')
    const [Forgot, SetForgot] = useState(false)
    const pwdForgot = (value) => {
        SetForgot(value)
        if (value) {
            SetMainClass('formBox level-login level-forget')
        } else {
            SetMainClass('formBox level-login')
        }
    }

    const [ForgotCls, SetForgotCls] = useState('f_row last')
    const ResetBlurHandle = (event) => {
        if (!event.target.value) {
            SetForgotCls('f_row last')
        }
    }

    const ResetFocusHandle = (event) => {
        SetForgotCls('f_row last focus')
    }

    // Forgot change handaler 
    const [forgotEmail, SetForgotEmail] = useState('')
    const ForgotHandalChange = (event) => {
        SetForgotEmail(event.target.value);
    }

    // forgot submit handal 
    const [ForgotDone, SetForgotDone] = useState(false)
    const ForgotHandal = (event) => {
        event.preventDefault()
        if (!forgotEmail) {
            SetForgotCls('f_row last shake')
            setTimeout(() => {
                SetForgotCls('f_row last')
            }, 300)
        } else {
            SetForgotDone(true)
        }
    }

    // register form 
    const [regForm, SetRegForm] = useState(false)
    const regTag = (value) => {
        SetRegForm(value)
        if (value) {
            if (Forgot) {
                SetMainClass('formBox level-forget level-reg')
            } else {
                SetMainClass('formBox level-login level-reg')
            }
        } else {
            if (Forgot) {
                SetMainClass('formBox level-login level-reg-revers level-forget')
            } else {
                SetMainClass('formBox level-login level-reg-revers')
            }
        }
    }

    // register form controll 
    const [regHandal, setRegHandal] = useState({
        user: '',
        email: '',
        pwd: ''
    })
    const HandalRegChange = (event) => {
        const { name, value } = event.target
        setRegHandal({
            ...regHandal,
            [name]: value
        })
    }
    const [RegCls, SetRegCls] = useState({
        user: '',
        email: '',
        pwd: ''
    })

    const RegHandleBlur = (event) => {
        const { name, value } = event.target
        if (value) {
            SetRegCls({
                ...RegCls,
                [name]: 'focus'
            })
        } else {
            SetRegCls({
                ...RegCls,
                [name]: ''
            })
        }
    }
    const RegHandleFocus = (event) => {
        const { name } = event.target
        SetRegCls({
            ...RegCls,
            [name]: 'focus'
        })
    }

    const [RegBtn, setRegBtn] = useState(false)
    const RegHandleSubmit = async (event) => {
        event.preventDefault()
        if (regHandal.user && regHandal.email && regHandal.pwd) {
            setRegBtn(true)
            try {
                await axios.post('http://localhost:2917/signup', regHandal, {
                    headers: {
                        'Content-Type': 'application/json',
                        'withCredentials': true
                    },
                    withCredentials: true,
                    credentials: 'same-origin',
                }).then((result) => {
                    setRegHandal({
                        user: '',
                        email: '',
                        pwd: ''
                    })
                    SetRegCls({
                        user: '',
                        email: '',
                        pwd: ''
                    })
                    regTag(!regForm)
                }).catch((error) => {
                    throw error.response
                })
            } catch (error) {
                alert(error.data.massage)
            }

        } else {
            if (!regHandal.user && !regHandal.email && !regHandal.pwd) {
                SetRegCls({
                    user: 'shake',
                    email: 'shake',
                    pwd: 'shake'
                })
                setTimeout(() => {
                    SetRegCls({
                        user: '',
                        email: '',
                        pwd: ''
                    })
                }, 300)
            } else if (!regHandal.user && !regHandal.email) {
                SetRegCls({
                    ...RegCls,
                    user: 'shake',
                    email: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        user: '',
                        email: '',
                    })
                }, 300)
            } else if (!regHandal.email && !regHandal.pwd) {
                SetRegCls({
                    ...RegCls,
                    pwd: 'shake',
                    email: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        pwd: '',
                        email: '',
                    })
                }, 300)
            } else if (!regHandal.user && !regHandal.pwd) {
                SetRegCls({
                    ...RegCls,
                    user: 'shake',
                    pwd: 'shake'
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        user: '',
                        pwd: ''
                    })
                }, 300)
            } else if (!regHandal.user) {
                SetRegCls({
                    ...RegCls,
                    user: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        user: '',
                    })
                }, 300)
            } else if (!regHandal.pwd) {
                SetRegCls({
                    ...RegCls,
                    pwd: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        pwd: '',
                    })
                }, 300)
            } else if (!regHandal.email) {
                SetRegCls({
                    ...RegCls,
                    email: 'shake',
                })
                setTimeout(() => {
                    SetRegCls({
                        ...RegCls,
                        email: '',
                    })
                }, 300)
            }
        }
    }

    return (
        <FormContainer>
            <div className={mainClass} >
                <div className="box boxShaddow"></div>
                <div className="box loginBox">
                    <h2>LOGIN</h2>
                    <form className="form" onSubmit={loginHandal}>
                        <div className={loginCls.user}>
                            <label>Username</label>
                            <Input type="text"
                                className="input-field"
                                name='user'
                                value={loginData.user}
                                onChange={loginHandaler}
                                onBlur={UserNameHandalBlur}
                                onFocus={UserNameHandalFocus} />
                            <u></u>
                        </div>
                        <div className={loginCls.pwd}>
                            <label>Password</label>
                            <Input type="pwd"
                                className="input-field"
                                name='pwd'
                                value={loginData.pwd}
                                onChange={loginHandaler}
                                onBlur={loginPwdHandalBlur}
                                onFocus={loginPwdHandalFocus} />
                            <u></u>
                        </div>
                        <button className={loginValid ? "chat_btn active" : "chat_btn"}><span>GO</span><u></u>
                            <MdOutlineDownloadDone />
                        </button>
                        <div className="f_link">
                            <button className="resetTag" type='button' onClick={() => pwdForgot(true)}>Forgot your pwd?</button>
                        </div>
                    </form>
                </div>
                <div className="box forgetbox">
                    <button className="back icon-back" onClick={() => pwdForgot(false)}>
                        {/* <ArrowBackIcon /> */}
                        {/* <FiArrowLeft/> */}
                        <BsArrowLeft />
                    </button>
                    <h2>Reset Password</h2>
                    <form className="form" onSubmit={ForgotHandal}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        <div className={ForgotCls}>
                            <label>Email Id</label>
                            <Input type="text"
                                className="input-field"
                                value={forgotEmail}
                                onChange={ForgotHandalChange}
                                onBlur={ResetBlurHandle}
                                onFocus={ResetFocusHandle}
                            />
                            <u></u>
                        </div>
                        <button className={ForgotDone ? "chat_btn active" : "chat_btn"}><span>Reset</span><u></u>
                            <MdOutlineDownloadDone />
                        </button>
                    </form>
                </div>
                <div className="box registerBox">
                    <span className="reg_bg"></span>
                    <h2>Register</h2>
                    <form className="form" onSubmit={RegHandleSubmit}>
                        <div className={`${RegCls.user} f_row`}>
                            <label>Username</label>
                            <Input type="text"
                                className="input-field"
                                name='user'
                                value={regHandal.user}
                                onChange={HandalRegChange}
                                onFocus={RegHandleFocus}
                                onBlur={RegHandleBlur} />
                            <u></u>
                        </div>
                        <div className={`${RegCls.email} f_row`}>
                            <label>Email</label>
                            <Input type="email"
                                className="input-field"
                                name='email'
                                value={regHandal.email}
                                onChange={HandalRegChange}
                                onFocus={RegHandleFocus}
                                onBlur={RegHandleBlur} />
                            <u></u>
                        </div>
                        <div className={`${RegCls.pwd} f_row last`}>
                            <label>Password</label>
                            <Input type="pwd"
                                className="input-field"
                                name='pwd'
                                value={regHandal.pwd}
                                onChange={HandalRegChange}
                                onFocus={RegHandleFocus}
                                onBlur={RegHandleBlur} />
                            <u></u>
                        </div>
                        <button className={RegBtn ? "chat_btn-large active" : "chat_btn-large"}>NEXT</button>
                    </form>
                </div>
                <button href="#" className="regTag icon-add" onClick={() => regTag(!regForm)}>
                    <BiPlus />
                </button>
            </div>
        </FormContainer >
    )
}

export default SignUp