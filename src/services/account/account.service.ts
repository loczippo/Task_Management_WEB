import { RegisterAccount } from "../../interfaces";
import axios from 'axios'

class AccountService {
  u = (path: string): string => process.env.REACT_APP_API_URL + path;

  register = async (registerDto: RegisterAccount): Promise<RegisterAccount> => {

    await axios({
        method: 'POST',
        url: this.u(`/users`),
        data: registerDto
      })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
        })
    return registerDto;
  };
  
}

export default new AccountService();
