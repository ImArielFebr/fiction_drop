import AdminLayout from "../../Layouts/AdminLayout";

function AdminIndex() {
    return (
        <>
            <div>
                <h2>Hi, This is Admin</h2>
            </div>
        </>
    );
}

AdminIndex.layout = (page) => <AdminLayout children={page} />;

export default AdminIndex;
