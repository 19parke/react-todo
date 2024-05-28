import React from 'react';
import useInput from '../../hooks/useInput';
import S from './style';

// todos={todos}
// getTodos={getTodos}
// setIsTodoUpdate={setIsTodoUpdate}
// isTodoUpdate={isTodoUpdate} ==> props로 넘겨주기

const TodoInsert = ({todos,getTodos, setTodos}) => {
    const [value, onChangeValue, setValue] = useInput("")
    // Enter를 쳤을 때 confirm 창을 띄워서
    // 이대로 추가 하시겠습니까? 로직을 만들기

    // CRUD
    // 투두리스트 추가, POST

    // {
    //     "id": "1", 타입이 문자열임 
    //     "title": "todo 리스트 프로젝트 아싸 성공",
    //     "content": "이해하면 정말 쉬운 서버와의 통신",
    //     "userId": "홍길동",
    //     "isChecked": false
    //  },


    const onKeyUpAddTodo = async(e) => {
        if(e.key==='Enter'){
            // 확인 코드
            if(!window.confirm('이대로 추가 하시겠습니까?')) return;

            // console.log('사용자가 엔터를 누름')
            // console.log(value)

            await fetch('http://localhost:4000/todo', {
                method:'POST', 
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({
                    id : (todos.length+1).toString(),
                    title: value,
                    isChecked: false
                })
            }).then((response)=>{
                if(!response.ok) return console.log(`Error ${response}`)
                getTodos().then(setTodos)
                setValue("")
                //의존성 배열 : setIsTodoUpdate(!isTodoUpdate)
            })
        }
    }



    return (
        <div>
            <S.Input type='text' placeholder='할 일을 추가해 볼까요?' value={value} onChange={onChangeValue} onKeyUp={onKeyUpAddTodo}/>
        </div>
    );
};

export default TodoInsert;