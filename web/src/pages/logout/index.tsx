import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Logout() {
    const router = useRouter();
    useEffect(() => {
        Cookies.remove('token');
        Cookies.remove('id');
    
        router.push('/login');
    }, []);
    
    return (
        <h1>Logout</h1>
    );
}