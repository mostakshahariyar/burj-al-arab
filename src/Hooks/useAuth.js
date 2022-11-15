import { useContext } from 'react';
import { AuthProviderContex } from '../components/Contex/Authcontex';

const useAuth = () => {
        return useContext(AuthProviderContex);
};

export default useAuth;