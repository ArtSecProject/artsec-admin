
import { CommentMenuItem } from "../components/common/comment";

export const TableColumn = [
    {
        field: "id", headerName: "ID", width: 50, headerAlign: "center"
    },
    {
        field: "title", headerName: "COMMENT",  headerAlign: "center", flex: 1,
    },

    {
        field: "thumbnailUrl", headerName: "AUTHOR",  headerAlign: "center", flex: 1,
    },

    {
        field: "date", headerName: "DATE",  headerAlign: "center", width: 130,
    },

    {
        field: "action", headerName: "ACTION",  headerAlign: "center",  flex: 1,
        renderCell: () => {
            return (
                <>
                    <CommentMenuItem />
                </>
            )
        }
    }
]








export const tableData = [
    {
        id: 1,
        title: "Title",
        postImg: "Post Image",
        author: "Author",
        date: "Date",
        action: "Action"
    },

    {
        id: 2,
        title: "Title",
        postImg: "Post Image",
        author: "Author",
        date: "Date",
        action: "Action"
    },

    {
        id: 3,
        title: "Title",
        postImg: "Post Image",
        author: "Author",
        date: "Date",
        action: "Action"
    },

    {
        id: 4,
        title: "Title",
        postImg: "Post Image",
        author: "Author",
        date: "Date",
        action: "Action"
    },
    {
        id: 5,
        title: "Title",
        postImg: "Post Image",
        author: "Author",
        date: "Date",
        action: "Action"
    },

    {
        id: 6,
        title: "Title",
        postImg: "Post Image",
        author: "Author",
        date: "Date",
        action: "Action"
    },

    {
        id: 7,
        title: "Title",
        postImg: "Post Image",
        author: "Author",
        date: "Date",
        action: "Action"
    },

    {
        id: 8,
        title: "Title",
        postImg: "Post Image",
        author: "Author",
        date: "Date",
        action: "Action"
    },
]