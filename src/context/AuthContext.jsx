import { useContext, useState, createContext, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';
import { account } from '../appwrite/config';
import { ID } from 'appwrite';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetail = await account.get();
      console.log(accountDetail);
      setUser(accountDetail);
    } catch (err) {
      if (err.code == 401) {
        Swal.fire({
          toast: true,
          icon: 'error',
          text: 'Invalid username or Email',
          timer: 4000,
          position: 'top',
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          toast: true,
          icon: 'error',
          text: 'Unable to Access Server',
          timer: 4000,
          position: 'top',
          showConfirmButton: false,
        });
      }
    }
    setLoading(false);
  };

  const logoutUser = () => {
    account.deleteSession("current");
    setUser(null);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.username
      );

      // Logs use in after creating account
      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetail = await account.get();
      setUser(accountDetail);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const googleSignIn = async () => {
    account.createOAuth2Session(
      'google',
      'http://localhost:3000/home',
      'http://localhost:3000/login'
    );
    const userDetails = account.get();
    setUser(userDetails);
  };

  const deleteUser = async (userId) => {
    try {
      await Swal.fire({
        icon: 'warning',
        title: 'Delete Account ?',
        text: 'Are you sure you want to delete your account.',
        confirmButtonText: 'Yes, delete it',
        confirmButtonColor: '#2563eb',
        cancelButtonText: 'No',
        cancelButtonColor: '#d33',
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // users.delete(userId);
          logoutUser();
        }
      });
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const checkUserStatus = async () => {
    try {
      let accountDetail = await account.get();
      setUser(accountDetail);
    } catch (err) {}
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    registerUser,
    logoutUser,
    deleteUser,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div className='w-[100vw] h-[100vh] grid items-center justify-center bg-gray-50 overflow-hidden anmate-load'>
          <div className='text-center app-text-color justify-items-center grid gap-4 mx-auto'>
            <div className='flex text-5xl gap-2 items-center'>
              <Icon
                icon='mingcute:group-line'
                className='w-15 h-15 text-green-600'
              />
              <div className="font-bold ml-2 text-green-600">Joblier</div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
