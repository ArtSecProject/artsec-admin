

import {  ProjectMenuItem } from "../components/common";

export const TableColumn = [
    {
        field: "id", headerName: "ID", width: 50, headerAlign: "center"
    },
    {
        field: "title", headerName: "TITLE",  headerAlign: "center", flex: 1,
    },
    {
        field: "url", headerName: "PROJECT IMAGE",  headerAlign: "center", flex: 1
    },
    {
        field: "category", headerName: "CATEGORY",  headerAlign: "center", width: 90,
    },
    {
        field: "tag", headerName: "TAG",  headerAlign: "center", width: 85,
    },
    {
        field: "thumbnailUrl", headerName: "AUTHOR",  headerAlign: "center", width: 95,
    },

    {
        field: "action", headerName: "ACTION",  headerAlign: "center",  flex: 1,
        renderCell: () => {
            return (
                <>
                    <ProjectMenuItem />
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