
import { AdminMenuItem } from "../components/common/user-management";

export const TableColumn = [
    {
        field: "id", headerName: "ID", width: 50, headerAlign: "center"
    },
    {
        field: "firstName", headerName: "FIRST NAME",  headerAlign: "center", flex: 1,
    },
    {
        field: "lastName", headerName: "LAST NAME",  headerAlign: "center", flex: 1
    },
    {
        field: "email", headerName: "EMAIL",  headerAlign: "center", flex: 1
    },

    {
        field: "role", headerName: "ROLE",  headerAlign: "center", width: 90,
    },
    {
        field: "status", headerName: "STATUS",  headerAlign: "center", width: 90,
    },

    {
        field: "action", headerName: "ACTION",  headerAlign: "center",  flex: 1,
        renderCell: () => {
            return (
                <>
                    <AdminMenuItem />
                </>
            )
        }
    }
]








export const tableData = [
    {
        id: 1,
        firstName: "Bright",
        lastName: "Smart",
        email: "bright@tingo.com",
        role: "Editor",
        status: "Online",
    },

    {
        id: 2,
        firstName: "Smart",
        lastName: "Godwin",
        email: "smart@tingo.com",
        role: "Super Admin",
        status: "Offline",
    },

    {
        id: 3,
        firstName: "Smart",
        lastName: "Godwin",
        email: "smart@tingo.com",
        role: "Super Admin",
        status: "Offline",
    },

    {
        id: 4,
        firstName: "Smart",
        lastName: "Godwin",
        email: "smart@tingo.com",
        role: "Super Admin",
        status: "Offline",
    },
    {
        id: 5,
        firstName: "Smart",
        lastName: "Godwin",
        email: "smart@tingo.com",
        role: "Super Admin",
        status: "Offline",
    },
    {
        id: 6,
        firstName: "Smart",
        lastName: "Godwin",
        email: "smart@tingo.com",
        role: "Super Admin",
        status: "Offline",
    },

    {
        id: 7,
        firstName: "Smart",
        lastName: "Godwin",
        email: "smart@tingo.com",
        role: "Super Admin",
        status: "Offline",
    },

    {
        id: 8,
        firstName: "Smart",
        lastName: "Godwin",
        email: "smart@tingo.com",
        role: "Super Admin",
        status: "Offline",
    },
]