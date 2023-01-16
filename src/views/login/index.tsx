import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function LoginView(): ReactJSXElement {


    const [viewPasswords, setViewPassword] = useState('password');
    const [displayViewPasswords, setDisplayViewPasswords] = useState(false);

    const handlerViewPassword = () => {
        viewPasswords === 'text' ? setViewPassword('password') : setViewPassword('text')
        setTimeout(() => {
            setViewPassword('password');
        }, 1000)
    }

    const displayViewPassword = (event: any) => {
        event.target.value.length > 0 ? setDisplayViewPasswords(true) : setDisplayViewPasswords(false);
    }

    const handlerLogin = () => {
        setOTP(true);
    }

    const [isOTP, setOTP] = useState(false);
    
    return (
        <div className="page_content min-h-full min-w-full relative bg-[var(--primary-color)]">
            <div className="flex">
                <div className="auth flex-col min-h-[100vh] w-full flex justify-between tracking-normal relative">
                    <div className="header items-center z-50 w-full relative pt-4 px-8 min-h-max max-w-[1800px] my-0 mx-auto justify-between flex-wrap flex text-[var(--primary-color)]">
                        <a href="asdas8d4as86d4a6"><img className="w-[165px] h-[3.3rem]" src="https://pmpconsulting.ro/wp-content/uploads/2017/10/logo-final.png" alt="" /></a>
                        <div className="text-right flex-grow sm:block hidden">
                            <a href="asdasdasd456" className="bg-opacity-0 bg-[var(--bg-nav-login)] rounded-full  mr-[6px] py-4 px-6 duration-200 transition-all ease">
                                <span className="text-[var(--white-text)] text-[12.5px] lg:inline hidden">Don't have an account?</span>
                                <span className="pl-2 pr-[2px] text-[var(--white-text)] opacity-100 text-[12.5px] font-medium">Signup</span>
                                <ArrowRightAltIcon className="teamsIcon text-[var(--white-text)]" />
                            </a>
                        </div>
                    </div>
                    <div className="body px-2 items-center flex justify-center my-0 mx-auto mb-10 h-full">
                        <main className="py-4 relative z-10">
                            <form className="opacity-100 transform-none bg-[var(--white-100)] rounded-lg m-auto py-16 px-16 sm:px-20 pt-8 duration-75 transition-all  max-w-max sm:max-w-max" action="">
                            <h1 className="text-4xl text leading-[48px] mb-4 text-center text-[var(--black-text)] font-medium">Get Planning!</h1>
                                    <p className="text-xl tracking-[-.0125em] leading-6 mt-[-0.5rem] text-center text-[var(--gray-text)] font-medium">Log in to your Workspace account.</p>
                                    <div className="mt-4 mb-3">
                                        <div className="flex">
                                            <div className="relative items-stretch flex flex-1 flex-col">
                                                <div className="items-stretch flex-col overflow-hidden">
                                                    <label htmlFor="email" className="text-[10px] uppercase font-medium">Email</label>
                                                    <div className="flex flex-1 relative">
                                                        <input type="text" placeholder="Type email here...." className="pl-2 text-[12.5px] border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 w-full rounded-md" />
                                                    </div>
                                                </div>
                                                <div className="items-stretch flex-col overflow-hidden p-0">
                                                    <label htmlFor="password" className="text-[10px] uppercase">Password</label>
                                                    <div className="flex flex-1 relative">
                                                        <input placeholder="Minimum 8 characters..." onChange={e=>displayViewPassword(e)} type={viewPasswords} className="pl-2 text-[12.5px] border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 w-full rounded-md" />
                                                        <div className="absolute right-3 top-2 text-[var(--gray-text)]" onClick={handlerViewPassword}>{(displayViewPasswords) ? (viewPasswords === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />) : null}</div>
                                                    </div>
                                                </div>
                                                {
                                                    (isOTP) ? <div className="items-stretch flex-col overflow-hidden p-0">
                                                    <label htmlFor="otp" className="text-[10px]">OTP</label>
                                                    <div className="flex flex-1 relative">
                                                        <input type="text" placeholder="OTP required..." maxLength={5} className="pl-2 text-[12.5px] border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 rounded-md" />
                                                    </div>
                                                </div>
                                                : null
                                                }
                                                <div className="items-stretch flex-col overflow-hidden p-0 mt-4">
                                                    <button type="button" onClick={handlerLogin} className="rounded-md py-3 mt-4 leading-4 bg-[var(--button-icon-color)] w-full text-sm text-[var(--white-text)]">{!(isOTP) ? 'Log in' : 'Continue to log in'}</button>
                                                </div>
                                                <div className="items-stretch flex-col overflow-hidden p-0">
                                                    <button type="button" className="rounded-md py-3 mt-4 leading-4  w-full text-sm text-[var(--gray-text)] border border-[var(--gray-text)]">Log in with SSO</button>
                                                </div>
                                                <div className="text-center pt-8 flex-col overflow-hidden p-0">
                                                    <Link to="" className="font-medium text-sm text-[var(--button-icon-color)]">Forgoten password?</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginView;