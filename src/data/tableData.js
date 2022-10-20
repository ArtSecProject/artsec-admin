

export const tableColumn = [
    { field: "id", header: "ID" },
    { field: "trnx_type", header: "Transaction Type" },
    { field: "date", header: "Date" },
    { field: "time", header: "Time" },
    { field: "status", header: "Status" },
    { field: "amt", header: "Amount ( $ )" },
]





export const tableData  = [
    {
        id: 1,
        trnx_type: "Payment to Wallet",
        date: "5th Oct. 2022",
        time: "02.02 AM",
        status: <p className="status">Success</p>,
        amt: "45.600"
    },

    {
        id: 2,
        trnx_type: "Payment to Wallet",
        date: "5th Oct. 2022",
        time: "02.02 AM",
        status: <p className="status failed">failed</p>,
        amt: "45.600"
    },

    {
        id: 3,
        trnx_type: "Payment to Wallet",
        date: "5th Oct. 2022",
        time: "02.02 AM",
        status: <p className="status">Success</p>,
        amt: "45.600"
    },
    
]