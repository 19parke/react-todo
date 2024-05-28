import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/main/Main';
import PageNotFound from '../pages/error/PageNotFound';
import Layout from '../pages/layout/Layout';
import TodoContainer from '../pages/todo/TodoContainer';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';

const router = createBrowserRouter([
    {
        // 기본 경로 설정
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/', 
                element : <Main/>
            },
            {
                path:'/todo', 
                element : <TodoContainer/>
            },
            {
                path:'/signIn', 
                element : <SignIn/>
            },
            {
                path:'/signUp', 
                element : <SignUp/>
            }
        ]
    }, {
        path : '*',
        element: <PageNotFound/>
    }
])

export default router; 

// 외부에서 사용해줘야 하기 때문에 외부에서 사용할 수 있게끔 하는 기본적 형태로 만들기 