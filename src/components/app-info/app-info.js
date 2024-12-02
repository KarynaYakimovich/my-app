import "./app-info.css";

const AppInfo = ({employees, promotion, comment, comm}) => {

    return (
        <div className="app-info">
            <h1>Process insurance</h1>
            <h2>How many employees: {employees}</h2>
            <h2>Promotion: { promotion}</h2>
            <h2>Comment: {comm}</h2>
            <input onChange={comment}/>
        </div>
    )
}

export default AppInfo;