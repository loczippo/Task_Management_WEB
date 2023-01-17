import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function RegisterView(): ReactJSXElement {
  const [viewPasswords, setViewPassword] = useState(false);
  const [displayViewPasswords, setDisplayViewPasswords] = useState(false);

  const handlerViewPassword = () => {
    viewPasswords === false ? setViewPassword(true) : setViewPassword(false);
    setTimeout(() => {
      setViewPassword(false);
    }, 1000);
  };

  const displayViewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value.length > 0
      ? setDisplayViewPasswords(true)
      : setDisplayViewPasswords(false);
  };

  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(44, 17, 56, 0.86), rgba(44, 17, 56, 0.86)), url('background.png')`,
      }}
      className="page_content min-h-screen min-w-screen relative"
    >
      <div className="flex">
        <div className="auth flex-col min-h-[45rem] sm:min-h-[40rem] w-full h-full flex justify-between tracking-normal relative">
          <div className="header items-center z-50 w-full relative pt-4 px-8 min-h-max max-w-[1800px] my-0 mx-auto justify-between flex-wrap flex text-[var(--primary-color)]">
            <a href="asdas8d4as86d4a6">
              <img
                className="w-[165px] h-[3.3rem]"
                src="https://pmpconsulting.ro/wp-content/uploads/2017/10/logo-final.png"
                alt=""
              />
            </a>
            <div className="text-right flex-grow sm:block hidden">
              <Link
                to="/login"
                className="bg-opacity-0 bg-[var(--bg-nav-login)] rounded-full  mr-[6px] py-4 px-6 duration-200 transition-all ease"
              >
                <span className="text-[var(--white-text)] text-[12.5px] lg:inline hidden">
                  Already signed up?
                </span>
                <span className="pl-2 pr-[2px] text-[var(--white-text)] opacity-100 text-[12.5px] font-medium">
                  Log in
                </span>
                <ArrowRightAltIcon className="teamsIcon text-[var(--white-text)]" />
              </Link>
            </div>
          </div>
          <div className="body px-2 items-center flex justify-center my-0 mx-auto mb-[5.5rem] sm:mb-10 h-full sm:w-[35rem]">
            <main className="py-4 relative z-10">
              <form
                className="opacity-100 transform-none bg-[var(--white-100)] rounded-lg m-auto py-16 pb-12 px-16 sm:px-20 pt-8 duration-75 transition-all  max-w-max sm:max-w-max"
                action=""
              >
                <h1 className="text-4xl text leading-[48px] mb-4 text-center text-[var(--black-text)] font-medium">
                  Create your Project Plan account
                </h1>
                <p className="break-normal text-xl tracking-[-.0125em] leading-6 mt-[-0.5rem] text-center text-[var(--gray-text)] font-medium">
                Please add your work email and select a password to sign up and start your free 14-day trial.
                </p>
                <div className="mt-2">
                  <div className="flex">
                    <div className="relative items-stretch flex flex-1 flex-col">
                      <div className="items-stretch flex-col overflow-hidden">
                        <label
                          htmlFor="email"
                          className="text-[10px] uppercase font-medium"
                        >
                          Email
                        </label>
                        <div className="flex flex-1 relative">
                          <input
                            type="text"
                            placeholder="Type email here...."
                            className="pl-2 text-sm border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 w-full rounded-md"
                          />
                        </div>
                      </div>
                      <div className="items-stretch flex-col overflow-hidden p-0">
                        <label
                          htmlFor="password"
                          className="text-[10px] uppercase font-medium"
                        >
                          Password
                        </label>
                        <div className="flex flex-1 relative">
                          <input
                            placeholder="Minimum 8 characters..."
                            minLength={8}
                            onChange={(e) => displayViewPassword(e)}
                            type={viewPasswords ? "text" : "password"}
                            className="pl-2 text-sm border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 w-full rounded-md"
                          />
                          <div
                            className="absolute right-3 top-2 text-[var(--gray-text)]"
                            onClick={handlerViewPassword}
                          >
                            {displayViewPasswords ? (
                              viewPasswords ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="items-stretch flex-col overflow-hidden p-0">
                        <label
                          htmlFor="password"
                          className="text-[10px] uppercase font-medium"
                        >
                          RePassword
                        </label>
                        <div className="flex flex-1 relative">
                          <input
                            placeholder="Repassword..."
                            minLength={8}
                            onChange={(e) => displayViewPassword(e)}
                            type={viewPasswords ? "text" : "password"}
                            className="pl-2 text-sm border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 w-full rounded-md"
                          />
                          <div
                            className="absolute right-3 top-2 text-[var(--gray-text)]"
                            onClick={handlerViewPassword}
                          >
                            {displayViewPasswords ? (
                              viewPasswords ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="items-stretch flex-col overflow-hidden mt-2">
                        <div className="flex flex-1 relative justify-center items-center">
                          <input
                            type="checkbox"
                            className="pl-2 mr-3 text-sm border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-5"
                          />
                          <span className="w-full text-[12.5px] ">Yes, I have read and I do agree with Project Management <Link to="/term" className="text-[12.5px] text-[var(--button-icon-color)] underline">Terms of Service</Link> and <Link to="/privacy" className="text-[12.5px] text-[var(--button-icon-color)] underline">Privacy Policy</Link>.</span>
                        </div>
                      </div>
                      
                      <div className="items-stretch flex-col overflow-hidden p-0 mt-4">
                        <button
                          type="button"
                          className="rounded-md py-3 mt-4 leading-4 bg-[var(--button-icon-color)] w-full text-sm text-[var(--white-text)]"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center flex justify-center items-center pt-6 md:hidden">
                <div className="bg-opacity-0 bg-[var(--bg-nav-login)] rounded-full p-3">
                  <span className="pl-2 pr-[2px] text-[var(--white-text)] opacity-100 text-[12.5px] font-medium">
                    Log in
                  </span>
                  <ArrowRightAltIcon className="teamsIcon text-[var(--white-text)]" />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterView;
