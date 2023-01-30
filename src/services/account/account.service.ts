import { AxiosResponse } from "axios";
import { RegisterAccount, TokenData } from "../../interfaces";
import { LoginAccount } from "../../interfaces/account/account.interface";
import { http } from "../../utils";

class AccountService {

  register = async (registerDto: RegisterAccount): Promise<AxiosResponse<RegisterAccount>> => {

    return await http.post<RegisterAccount>('users', registerDto)
      
  };

  login = async (loginDto: LoginAccount) => {

    return await http.post('auth', loginDto, {
      withCredentials: true
    })
      
  };
  
}

export default new AccountService();
