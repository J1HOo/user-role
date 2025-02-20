import {useState} from "react";

const UserSearch = () => {
    const [userName, setUserName] = useState('');
    // 검색 결과의 경우 배열 형태
    // 검색에 대한 결과가 하나의 값이 나오지 않기 때문에 2개 이상의 값이 나온다는 가정하에 배열로 처리
    // 초기 users 값도 빈 배열 형태로 작성

    const handleSearch = () => {

    }

    return (
        <div className="usersearch-container">
            <h2>사용자 검색</h2>
            <input type="text"
                   placeholder="검색할 이름을 입력하세요."
                   value={userName}
                   onChange={(e) => setUserName(e.target.value)}/>

            <ul>
                {"검색 결과가"
                    ?
                    ( <div>존재할 경우</div> )
                    :
                    ( <div>존재하지 않을 경우</div> )}
            </ul>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default UserSearch;