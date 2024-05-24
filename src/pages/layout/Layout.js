import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import S from './style';
// 폰트 어썸
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// 아이콘들
import {faHouse, faSearch, faBell, faUser, faClipboard} from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
    return (
        <S.Backgournd>
            {/* 중앙으로 띄우기 */}
            <S.Wrapper>
                <S.Header>
                    <Link to={"/"}>Grace Todo</Link>
                    {/* 여기가 레이아웃/헤더 */}
                </S.Header>
                <S.Main>
                    <Outlet/>
                     {/* 메인페이지 */}
                </S.Main>
                <S.Nav>
                    {/* 여기는 네비게이션 */}
                    {/* 현재 active한 link */}
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faHouse} className='icon'/>
                        <p>피드</p>
                    </NavLink>

                    <NavLink to={'/search'}>
                        <FontAwesomeIcon icon={faSearch} className='icon'/>
                        <p>검색</p>
                    </NavLink>

                    <NavLink to={'/bell'}>
                        <FontAwesomeIcon icon={faBell} className='icon'/>
                        <p>알림</p>
                    </NavLink>

                    <NavLink to={'/todo'}>
                        <FontAwesomeIcon icon={faClipboard} className='icon'/>
                        <p>할일</p>
                    </NavLink>

                    <NavLink to={'/My'}>
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <p>My</p>
                    </NavLink>
                </S.Nav> 
            </S.Wrapper>
        </S.Backgournd>
    );
};

export default Layout;