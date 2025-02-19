

const AdminPage = ({user}) => {
    return (
        <div>
        <h1>Admin Page</h1>
        <p>환영합니다. {user.userName} 님</p>
        </div>
    );
}

export default AdminPage;