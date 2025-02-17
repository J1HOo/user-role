import {Navigate} from "react-router-dom";


// 세션에 저장되어 있는 정보에 따라 접근 권한을 설정하는 컴포넌트
const ProtectedRoute = ({children, allowedRoles}) => {

    // session 에 저장된 user 정보를 가져오기 위해 localStorage.getItem("user")를 사용
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    // 로그인이 되어 있지 않을 경우 로그인 페이지로 이동
    if (!user) {
        return <Navigate to="/login" />;
    }

    // 현재 로그인 되어 있지만 사용자의 역할이 허용된 역할 리스트에 존재 하지 않을 경우 접근 불가
    if (!allowedRoles.includes(user.role)) {
        alert("접근 권한이 없습니다.");
        return <Navigate to="/" />; // 접근 권한이 없을 경우 홈으로 이동
    }

    return children; // 로그인이 되어 있고 사용자의 역할이 허용된 역할 리스트에 존재할 경우 접근 허용
}

export default ProtectedRoute;