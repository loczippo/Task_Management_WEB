import { AxiosResponse } from "axios";
import { RegisterAccount, TokenData } from "../../interfaces";
import { http } from "../../utils";

class AccountService {

  register = async (registerDto: RegisterAccount): Promise<AxiosResponse<RegisterAccount>> => {

    return await http.post<RegisterAccount>('users', registerDto)
      
  };

  login = async (registerDto: RegisterAccount) => {

    return await http.post('auth', registerDto)
      
  };
  
}

export default new AccountService();
