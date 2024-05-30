import React from 'react';
import S from './style';
import { useForm } from 'react-hook-form'
import BasicButton from '../../components/button/BasicButton';
import BasicInput from '../../components/input/BasicInput';
import Input from '../../components/input/style';

const SignUp = () => {

    // hookForm 사용하기 
    // register - id, pw 분류
    // handleSubmit - form데이터가 보내졌을 때 , onSubmit될때 handleSubmit을 사용할지 말지를 결정하는 것
    // getValues - 이메일값들을 과 같은 값들을 가져오는 것
    // formState - form의 상태에 따라 처리해주려고 하는 것
    const {register, handleSubmit, getValues, 
        formState : {isSubmitting, isSubmitted, errors}
    } = useForm({mode: "onChange"})


    //email 정규식 문법
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    return (
        // submit이 되었을 때 들어오는 값들 data로 받는다
        <S.Form onSubmit={handleSubmit(async (data)=>{
            // 들고 온 form 데이터를 fetching하기 위한 로직
            // 검증을 모두 완료한 데이터를 여기로 들고 온다. 즉, 양식에 모두 검증된 것을 여기로 fetch로 post날리면 회원가입 된 것이다.
            // console.log(data)

            // http://localhost:4000/users경로로 회원가입 시키기
            // {
            //     "email" : "이메일", 
            //     "password" : "password"
            // }

            // const {email, password} = data;

            await fetch('http://localhost:4000/users', {
                method: 'POST', 
                headers: {
                    // 내가 보낼 때 json 타입으로 보낼건데 json인지 확인해줘, 브라우저 단에서 확인하고 아니면 막아줌
                    'Content-Type' : 'application/json'
                }, 
                // 그래서 Json형태로 만들어주기, 여러개니까 객체{}
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                })
            })
            .then((res)=> res.json())
            // 제대 로 됐으면 상태 코드들이 온다.(200)
            .then(console.log)
            .catch(console.error)

        })}>

            {/* email 로직 , label- style컴포넌트로 만들기 위해*/}
            <S.Label htmlFor="email">
                <S.Title>이메일</S.Title>
                {/* 원래는 BasicInput을 사용했는데, 이 때 size, shape와 같이 여러 값들을 넘기는데 register 값을 넘길때 reference오류가 생김 그래서 기본 Input으로 바꿔서 사용 */}
                <Input
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    type="text" id='email'
                    placeholder='아이디를 입력하세요.'
                    // onChange 모드로 했으므로 input의 id값, 즉 input에 넣은 값이 123이 되면 검증해주는 것
                    {...register('email', {
                        required : true,
                        pattern : {
                            // 패턴을 지키지 않으면 넘어가지 않게끔
                            value : emailRegex
                        }
                    })}
                />
                {/* 있을 수도 있고 없을 수도 있는데, register에서 email로 등록했기 때문에 혹시 email하는 것 중에서 에러가 발생했으면 위의 부분에서 처리해줄래? 없으면 안 나와도 되고 */}
                {/* error가 나면 true 가 아닌 emailRegex가 아닌 required로 들어간다 */}
                {errors?.email?.type === 'required' && (
                    <S.ConfirmMessage>이메일을 입력해주세요</S.ConfirmMessage>
                )}
                {/* 패턴을 제대로 지키지 않은 에러 */}
                {errors?.email?.type === 'pattern' && (
                    <S.ConfirmMessage>이메일 양식에 맞게 입력해주세요</S.ConfirmMessage>
                )}
            </S.Label>

            {/* password 만들기 */}
            <S.Label htmlFor="password">
                    <S.Title>비밀번호</S.Title>
                    <Input
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    type="password" id="password"
                    placeholder='비밀번호를 입력하세요.'
                    {...register("password", {
                        required : true,
                        pattern : {
                            value : passwordRegex
                        }
                    })}
                    />
                    {errors?.password?.type === 'required' && (
                        <S.ConfirmMessage>비밀번호를 입력해주세요</S.ConfirmMessage>
                    )}
                    {errors?.password?.type === 'pattern' && (
                        <S.ConfirmMessage>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.</S.ConfirmMessage>
                    )}

            </S.Label>

            {/* password Confirm 만들기 */}
            <S.Label htmlFor="passwordConfirm">
                    <S.Title>비밀번호 확인</S.Title>
                    <Input
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    type="password" id="passwordConfirm"
                    placeholder='비밀번호를 다시 입력하세요.'
                    {...register("passwordConfirm", {
                        required : true,
                        validate : {
                            matchPassword : (value) => {
                                const {password} = getValues();
                                console.log(value, password, value === password)
                                return value === password;
                            }
                        }
                    })}
                    />
                    {errors?.passwordConfirm && (
                        <S.ConfirmMessage>비밀번호를 확인해주세요</S.ConfirmMessage>
                    )}

            </S.Label>

            {/* submit 버튼 */}
            <BasicButton 
                size={"full"} shape={"small"} variant={"black"} color={"white"}
                // onClick이 되었을 때 데이터를 submit시켜줘야 하므로 그것을 처리해주는 것
                disabled={isSubmitting}
            >회원가입</BasicButton>
        </S.Form>
    );
};

export default SignUp;