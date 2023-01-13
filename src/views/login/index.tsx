import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

function LoginView(): ReactJSXElement {
    return (
        <div className="page_content box-border min-h-full min-w-full relative bg-[var(--primary-color)]">
            <div className="flex">
                <div className="auth flex-col min-h-[100vh] w-full flex justify-between tracking-normal relative">
                    <div className="header items-center z-50 w-full relative py-4 px-8 min-h-max max-w-[1800px] my-0 mx-auto justify-between flex-wrap flex text-[var(--primary-color)]">
                        <a href="asdas8d4as86d4a6"><img className="w-[165px] h-[3.3rem]" src="https://pmpconsulting.ro/wp-content/uploads/2017/10/logo-final.png" alt="" /></a>
                        <div className="text-right flex-grow sm:block hidden">
                            <span className="mr-[-35px] text-[var(--white-text)] text-[12.5px]">Don't have an account?</span>
                            <a href="asdasdasd456" className="bg-opacity-5 bg-[var(--bg-nav-login)] rounded-full  mr-[6px] py-4 px-6 duration-200 transition-all ease">
                                <span className="px-4 text-[var(--white-text)] opacity-100 text-[12.5px]">Signup</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginView;