import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { LoginAccount } from "../../interfaces/account/account.interface";
import { AccountService } from "../../services";
import { useForm } from "react-hook-form";
import { getAxiosErrorResponse } from "../../utils/cupcake";

function LoginView(): ReactJSXElement {
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

  

  const handlerOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInputOTP(e.target.value);
    }
  };

  const [isInputOTP, setInputOTP] = useState("");

  const [isOTP, setOTP] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<LoginAccount>({
  });

  const loginAccount = useMutation({
    mutationFn: (body: LoginAccount) => {
      return AccountService.login(body);
    },
  });

  const handlerLogin = (data: LoginAccount) => {
    // setOTP(true);
    setDisplayViewPasswords(false);

    loginAccount.mutate(data, {
      onSuccess: (response) => {
        console.log("Login thành công ", response.data);
      },
      onError: (error) => {
        console.log(getAxiosErrorResponse(error))
      },
    });
  };

  return (
    <div className="page_content min-h-screen min-w-screen relative bg-[var(--primary-color)]">
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
                to="/register"
                className="bg-opacity-0 bg-[var(--bg-nav-login)] rounded-full  mr-[6px] py-4 px-6 duration-200 transition-all ease"
              >
                <span className="text-[var(--white-text)] text-[12.5px] lg:inline hidden">
                  Don't have an account?
                </span>
                <span className="pl-2 pr-[2px] text-[var(--white-text)] opacity-100 text-[12.5px] font-medium">
                  Signup
                </span>
                <ArrowRightAltIcon className="teamsIcon text-[var(--white-text)]" />
              </Link>
            </div>
          </div>
          <div className="body px-2 items-center flex justify-center my-0 mx-auto mb-[5.5rem] sm:mb-10 mt-10 h-full">
            <main className="py-4 relative z-10">
              <form
                className="opacity-100 transform-none bg-[var(--white-100)] rounded-lg m-auto py-16 pb-12 px-16 sm:px-20 pt-8 duration-75 transition-all  max-w-max sm:max-w-max"
                action="POST"
                onSubmit={handleSubmit(handlerLogin)}
              >
                <h1 className="text-4xl text leading-[48px] mb-4 text-center text-[var(--black-text)] font-medium">
                  Get Planning!
                </h1>
                <p className="text-xl tracking-[-.0125em] leading-6 mt-[-0.5rem] text-center text-[var(--gray-text)] font-medium">
                  Log in to your Workspace account.
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
                            readOnly={isOTP}
                            type="text"
                            placeholder="Type email here...."
                            className="pl-2 text-sm border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 w-full rounded-md"
                            {...register("email")}
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
                            readOnly={isOTP}
                            placeholder="Minimum 8 characters..."
                            minLength={8}
                            // onChange={(e) => displayViewPassword(e)}
                            type={viewPasswords ? "text" : "password"}
                            className="pl-2 text-sm border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 w-full rounded-md"
                            {...register("password", {onChange(event) {
                              displayViewPassword(event);
                            },})}
                          />
                          <div
                            className="absolute right-3 top-2 text-[var(--gray-text)]"
                            onClick={handlerViewPassword}
                          >
                            {displayViewPasswords ? (
                              viewPasswords ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon/>
                              )
                            ) : null}
                          </div>
                        </div>
                      </div>
                      {isOTP ? (
                        <div className="items-stretch flex-col overflow-hidden p-0">
                          <label
                            htmlFor="otp"
                            className="text-[10px] uppercase font-medium"
                          >
                            Otp
                          </label>
                          <div className="flex flex-1 relative">
                            <input
                              value={isInputOTP}
                              onChange={(e) => handlerOTP(e)}
                              type="text"
                              placeholder="OTP required..."
                              maxLength={5}
                              className="pl-2 text-sm border border-[var(--gray-text)] focus:outline-none focus:border-[var(--button-icon-color)] h-10 rounded-md"
                            />
                          </div>
                        </div>
                      ) : null}
                      <div className="items-stretch flex-col overflow-hidden p-0 mt-4">
                        <button
                          className="rounded-md py-3 mt-4 leading-4 bg-[var(--button-icon-color)] w-full text-sm text-[var(--white-text)]"
                        >
                          {!isOTP ? "Log in" : "Continue to log in"}
                        </button>
                      </div>
                      {loginAccount.isError && (
                          <p className="mt-2 text-sm text-red-600">
                            <span className="font-medium"></span>
                            <>
                              {
                                getAxiosErrorResponse(loginAccount.error)
                                  .message
                              }
                            </>
                          </p>
                        )}
                      <div className="items-stretch flex-col overflow-hidden p-0">
                        <button
                          type="button"
                          className="rounded-md py-3 mt-4 leading-4  w-full text-sm text-[var(--gray-text)] border border-[var(--gray-text)]"
                        >
                          Log in with SSO
                        </button>
                      </div>
                      <div className="text-center pt-8 flex-col overflow-hidden p-0">
                        <Link
                          to=""
                          className="font-medium text-sm text-[var(--button-icon-color)]"
                        >
                          Forgoten password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center flex justify-center items-center pt-6 md:hidden">
                <div className="bg-opacity-0 bg-[var(--bg-nav-login)] rounded-full p-3">
                  <span className="pl-2 pr-[2px] text-[var(--white-text)] opacity-100 text-[12.5px] font-medium">
                    Signup
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

export default LoginView;
