import { faCheck, faPen, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import S from './style';

// props 받기
const Todo = ({todo, getTodos, setTodos}) => {      // 의존성 배열 : props로 isTodoUpdate, setIsTodoUpdate 추가
    // console.log(todo, getTodos)

    // 비구조화 할당
    const {id, title} = todo;
    // useState(false)로 하면 readonly , 다시 되돌려 놓을 수 없다. 그래서 isChecked 값으로 변경
    const [isChecked, setIsChecked]  = useState(todo.isChecked);
    // 수정중인지 아닌지의 상태
    const [isEdit, setIsEdit] = useState(false);
    // input의 상태
    const [inputValue, setInputValue] = useState(title);

    // Edit을 변경할 수 있는 함수
    // 수정모드
    const handleEdit = () => {
        // 상태값을 반대로 바꿔주는 함수
        setIsEdit(!isEdit)
    }
    // console.log(isEdit)
    
    // 타이틀 수정
    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }


    // 수정완료
    // fetch PUT 메서드를 이용한 title 수정
    const onChangeUpdateTodo = async() => {
        // GET빼고 나머지는 옵션이 필요함
        await fetch(`http://localhost:4000/todo/${id}`, {
            method: 'PUT',

            // 수정으로 들고가려는 애가 누군지, 정보가 무엇인지
            headers: {
                // 들고가려는 데이터 형식이 json으로 보낼 것
                'Content-Type' : 'application/json'
            },
            // body에서 들고가는 값들을 json으로 변환
            body: JSON.stringify({
                ...todo,
                // 화면에 뿌려지고 있는 값인 inputValue가져가기
                title: inputValue
            })
            // 클릭 완료 후 response
        }).then((response)=>{
            console.log(response)
            // response중 ok값이 true이므로 사용가능, 혹은 상태(status) 번호(200)이용
            if(!response.ok) return console.log(`error ${response}`)
            // onChangeInput(inputValue) --> 에러
            setIsEdit(!isEdit)
            // 의존성 배열 : setIsTodoUpdate(!isTodoUpdate) , isTodoUpdate가 true로 바뀌니 TodoContainer에 있는 useEffect안의 함수 다시 실행
            // sideEffect 잡기, 쿼리 다시 날리기
            getTodos().then(setTodos)

        })
    }


    //CRUD
    //UPDATE = PUT, 체크리스트 수정 (example 찜하기 버튼에 이용)
    // 비동기 함수 fetch임을 알림 = async
    const handleChecked = async() => {
        // setIsChecked(!isChecked)
        await fetch(`http://localhost:4000/todo/${id}`, {
            method: 'PUT', 
            // put에서는 이 데이터의 정보를 보내줘야 한다.
            headers: {
                'Content-Type' : 'application/json'
            }, 
            // fetch가 요청이 됐을 때, 이 body에 json으로 stringify로 json화 시켜서 데이터를 보낼 것인데 
            // 그 때 {객체} 값으로 todo를 들고 갈 것이다. (spread문법으로 다 들고 갈 것이다.)
            body: JSON.stringify({
                // 객체를 위한 문법 : spread
                // 객체의 모든 값들을 다 가져와서 있을 때는 그대로 두고 바뀌는 값을 수정, 없는 건 추가
                ...todo,
                // 내가 바꾸고 싶은 값
                isChecked: !isChecked
            })
        }).then((response)=>{
            console.log(response);
            if(!response.ok) return console.log(`error ${response}`)
            setIsChecked(!isChecked)
        })
    }




    // DELETE, 투두리스트 삭제
    const handleRemoveTodo = async() => {
        if(window.confirm('정말로 삭제하시겠습니까?')){
            console.log(id)
            // fetch DELETE요청
            // 해당 아이디 삭제
            // 10분

            // 삭제이기 때문에 받을 response가 없어서 await를 써줄 필요는 없지만 비동기라는 것을 알려주기 위해 await , async적어주기
            // 문자열 안에서 
            await fetch(`http://localhost:4000/todo/${id}`,{
                // method를 안쓰면 기본적을 GET
                // 그래서 다른 것을 하고 싶으면 옵션들을 설정해줘야 하고 여러 옵션이 있기 때문에 객체값
                method: 'DELETE'
            }).then((response)=>{
                // 정상이면 정상코드
                // response에서 만약에 상태가 정상 코드가 들어오면
                if(response.ok){
                    // [**중요**]삭제버튼 눌러도 바로 없어지지 않는 이유 (쿼리가 반영이 안되는 이유) : 
                    /*
                        A. Todo Container에서 useEffect에서 sideEffect가 발생하는데 , 의존성 배열([])이 빈 배열이다. 
                        그래서 의존성 배열이 딱 한번만 반영이 되는 것이다. 
                        그런데 fetch를 이미 한 번 불러왔다. fetch 최초 한번, mount 됐을 때 불려왔다. 
                        그러고 나서 todo 페이지에서 fetch를 날렸을 때 그 이후에 내가 불러온 todo가 상태가 바뀐적이 한 번이라도 있나?
                        그렇다고 다시 한 번 fetch를 날렸나? NOO 
                        왜? 의존성 배열이 빈배열이니까 mount 됐을 때 이후로 이 코드가 실행되지 않음 => TodoContainer B. 읽으시오

                        C. 업데이트 하기 위해서 만들어 놓은 함수 다시 fetch요청 날려야 한다. 
                        도는 dispatch : 상태를 변경해 줄 수 있는 로직을 통해 todo의 상태값이 변화했을 때 다시 한 번 fetch를 날릴 수 있도록
                        의존성 배열을 줘야 한다. 
                    */
                    console.log('정상적으로 삭제가 완료 되었습니다.', response)
                    // D. getTodos에서 가져온 애를 set해줘야 하니 ===> 다시 한번 fetch 요청을 보내서 업데이트 된 버젼은 가져오는 것 
                    // 해결책은 setTodos, 함수 로직에서 한 번 더 실행해주게끔 해주는 것
                    // 리액트는 상태가 바뀌어야 업데이트가 되기 때문에 상태를 바꿔줄 수 있는 로직이나 , return 값들 이용해서
                    getTodos().then(setTodos) //fetch를 다시 날려줄 수 있는 쿼리가 필요한것 
                }
            })

        }
    }

    return (
        // TodoContainer에서 ul태그를 만들었으니 그 안의 li태그
        <S.Li>
            <S.Wrapper>
                {/* 변경해줄 수 있는 상태 handler를 만들어야 한다. (기본값이 false이니) == handleChecked*/}
                <input type="checkbox" checked={isChecked} onChange={handleChecked}/>
                {isEdit ? (
                    <>
                        <input className='update-input' type="text" value={inputValue} onChange={onChangeInput}/>
                    </>
                ) : (
                    <>
                        {/* true인 것만 클래스 name주기, class도 연산 가능하다는 것을 기억! */}
                        <S.Title className={isChecked ? "complete" : ""}>
                            {title}
                        </S.Title>
                    </>
                )}

            </S.Wrapper>
            <S.Wrapper>
                {/* 상태에 따라 */}
                {isEdit ? (
                    // fragment처리 <></> : True일때
                    <>
                        <S.Button onClick={onChangeUpdateTodo}><FontAwesomeIcon icon={faCheck} className='check'/></S.Button>
                        <S.Button onClick={handleEdit}><FontAwesomeIcon icon={faX} className='exit'/></S.Button>
                    </>
                ) : (
                    // False일때
                    <>
                        <S.Button onClick={handleEdit}><FontAwesomeIcon icon={faPen} className='pen'/></S.Button>
                    </>
                ) }
                <S.Button onClick={handleRemoveTodo}><FontAwesomeIcon icon={faTrash} className='trash'/></S.Button>
            </S.Wrapper>
        </S.Li>
    );
};

export default Todo;