const NewTask = () => {
    return(
        <div className="flex justify-center items-center">
            <table className="w-full">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Task Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Creating Activity Management</td>
                        <td>Creating an application in next js to track my activity in one place</td>
                        <td className="text-center"> <span className="bg-slate-300 text-slate-700 p-1 rounded text-md">Pending</span></td>
                        <td className="text-center"><span>urgent</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NewTask;