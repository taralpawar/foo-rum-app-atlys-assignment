import { LogIn, User } from 'lucide-react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean
}

const AppHeader: React.FC<Props> = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const isAuthPage = location.pathname === '/auth';

    const handleLoginClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        navigate('/auth');
    }

    const handleHomeClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        navigate('/');
    }
    
    return(
        <>
            <header className=" sticky top-0 z-50 bg-white">
                <div className="px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">f</span>
                    </div>
                    <h1 className="text-xl font-semibold text-gray-900">foo-rum</h1>
                </div>
                {!isAuthPage ? 
                <>
                {!props.isAuthenticated ? 
                
                <button onClick={handleLoginClick} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <span>Login</span>
                    <LogIn />
                </button> : 
                <div className='flex gap-4'>
                    <User className='rounded'/>
                    <span className='text-gray-600 hover:text-gray-900 transition-colors'>Hello User</span>

                </div>}
                </>
                : 
                <button onClick={handleHomeClick} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <span>Back to Home</span>
                </button>}
                </div>
            </header>
        </>
    )
}

export default AppHeader;