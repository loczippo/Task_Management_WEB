import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function LoginView(): ReactJSXElement {
    return (
        <div className="page_content box-border min-h-full min-w-full relative bg-[var(--primary-color)]">
            <div className="flex">
                <div className="auth flex-col min-h-[100vh] w-full flex justify-between tracking-normal relative">
                    <div className="header items-center z-50 w-full relative py-4 px-8 min-h-max max-w-[1800px] my-0 mx-auto justify-between flex-wrap flex text-[var(--primary-color)]">
                        <a href="asdas8d4as86d4a6"><img className="w-[165px] h-[3.3rem]" src="https://pmpconsulting.ro/wp-content/uploads/2017/10/logo-final.png" alt="" /></a>
                        <div className="text-right flex-grow sm:block hidden">
                            <a href="asdasdasd456" className="bg-opacity-0 bg-[var(--bg-nav-login)] rounded-full  mr-[6px] py-4 px-6 duration-200 transition-all ease">
                                <span className="text-[var(--white-text)] text-[12.5px] lg:inline hidden">Don't have an account?</span>
                                <span className="pl-2 pr-[2px] text-[var(--white-text)] opacity-100 text-[12.5px] font-medium">Signup</span>
                                <ArrowRightAltIcon className="teamsIcon text-[var(--white-text)]"/>
                            </a>
                        </div>
                    </div>
                    <div className="body items-center flex justify-center my-0 mx-auto max-w-[1444px] h-full">
                        <main className="py-4 px-8 relative z-10">
                            <form className="opacity-100 transform-none bg-[var(--white-text)] rounded-lg m-auto p-16 duration-75 transition-all w-[480px]" action="">
                                <div className="hidden sm:block">
                                    <h1 className="text-4xl text leading-[48px] mb-4 text-center text-[var(--black-text)] font-medium">Get Planning!</h1>
                                    <p className="text-xl tracking-[-.0125em] leading-6 mt-[-0.5rem] text-center text-gray-500">Log in to your Workspace account.</p>
                                    <div className="mt-10 mb-3">
                                        <div className="flex">
                                            <div className="relative items-stretch flex flex-1 flex-col"></div>
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