import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoInsert from './TodoInsert';

const TodoContainer = () => {

    // http://localhost:4000/todo에 데이터를 콘솔에 찍기
    // fetch로 요청을 보내기 
    // 흐름을 따라가기 
    // 1. 요청 보내기 : fetch 또는 axios
    // 실습 5분 

    // 초기값 배열이므로 [] 
    const [todos, setTodos] = useState([])
    const [error, setError] = useState(false);

    // 의존성 배열 줘보기
    // const [isTodoUpdate, setIsTodoUpdate] = useState(false);

    // 2. 가져오기
    /*B. 내가 가져온 todo : 여기서 fetch, 최초 mount됐을 때 fetch 1번 가져왔다. 그런데 난 이 가져온 투두를 화면에 뿌리고 있다. 
     최초 한 번 가져온 투두가 현재 투두에 있는 것이다~!!
     그러고 나서 todo에서 delete쿼리를 날림. 그럼 최초 한 번 내가 만들었던 투두가 다시 fetch로 요청을 날렸나? NO 그래서 update가 안 됐다. 
     => Todo.jsx C 읽으시오
    */
    const getTodos = async() => {
        try{
            // 3. fetch 이용, 어차피 data를 주고 받아야 하기 때문에 async, await 동기 비동기 처리로 쉽게 가져오기
            // 동기 요청 보내기 -> 비동기 쭉 완료, 나 완료 했어! 똑똑 문 두드리기, 기다려줄테니까 완료 되는대로 바로 화면에 뿌려!
            const response = await fetch("http://localhost:4000/todo");
            // response json 형식이기 때문에 파싱해야 한다. 
            const datas = await response.json()
            // 하나의 함수로 종결시키기
            return datas
            // console.log(datas) 
        }catch(error){
            setError(error)
        }
    }

    // 최초에 mount됐을 때 useEffect 딱 한번 날아감
    // 의존성 배열 : useEffect가 발생했을 때 어떤 상태가 변화에 따라서 , useEffect 안에 있는 함수가 실행될 지 말지를 한 번 더 정하는 것
    useEffect(()=>{
        // 함수를 선언해놓고 사용하지 못하면 안된다. useEffect 스코프 안에서 사용, 밖에서는 실행이 안됨
        // sideEffect를 잡아야 하는데 , 밖에서 선언하면 밖에서 sideEffect가 실행되어 안 보인다 화면에
        getTodos().then(setTodos)

        // 처음에 한 번만 요청을 보내야지
    }, [])
 // }, [isTodoUpdate]) , isTodoUpdate가 원래 false인데 true이면 다시 한번 쿼리가 날라가는 것

    // 앞 것이 true여야만 뒤가 실행되니 && 사용
    console.log(todos && todos.length)

    return (

        <div>
            <TodoInsert 
                todos={todos}
                getTodos={getTodos}
                setTodos={setTodos}
                // 의존성 배열
                // setIsTodoUpdate={setIsTodoUpdate}
                // isTodoUpdate={isTodoUpdate}
            />
            {<p className='sub-title'>남은 할일 😫:{todos.length}개 </p>}
            {/* map함수 이용해서 todo 컴포넌트 만들기,  todos, getTodos props로 보내기 */}
            {/* 5분 */}

            {/* 각 "할일"은 개별적 컴포넌트 이다. 하나의 큰 컨테이너 안에 "할일" 컴포넌트들은 삭제, 수정이 각 개별적으로 되어야 하기 때문에
                반복문으로 뿌려준다. 각 개별적으로 존재하고 관리야 하는 컴포넌트 라는 것을 잊지 말것!
            */}
            <ul>
                {todos.map((todo, i)=>(
                    // 컴포넌트가 각각의 상태값을 갖는 다는 특징을 이용 - 각각의 상태를 가지고 있으니 고유 id값을 가지고 수정, 삭제 쉽다
                    // 이렇게 하지 않으면 하나의 컨테이너 안에 있는 것으로 몇번째 방 안에 있는거 이렇게 복잡하게 해야 한다.
                    // 컴포넌트 return, Todo 컴포넌트 뿌리기, 현재 todo 넘기기, 
                    <Todo key={i} todo={todo} getTodos={getTodos} setTodos={setTodos}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;