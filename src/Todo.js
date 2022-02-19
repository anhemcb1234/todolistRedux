import {useState} from 'react';
import Edit from './Edit';

function Todo() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const listJobs = localStorage.getItem('job')
    return JSON.parse(listJobs) ?? []
  })
  const [edit, setEdit] = useState(true)
  const [edits, setEdits] = useState(false)
  const [editJob, seteditJob] = useState('')


  const handleAdd = () => {
    setJobs(pre => {
      const newJob = [...pre, job];

      localStorage.setItem('job',JSON.stringify(newJob))

      return newJob
    })
    setJob('')
}
const listJobs = localStorage.getItem('job')

  const handleDele = (index) => {
    const data = JSON.parse(listJobs)
    data.splice(index, 1);
    localStorage.setItem('job',JSON.stringify(data))
    setJobs(data)
  }
  const handleClear = () => {
    localStorage.removeItem('job')
    setJobs([])
    setJob('')
  }
  const handleEdit = (index) => {
    setEdit(!edit)
    setEdits(!edits)
  }
  const hanleDone = (index) => {
    const data = JSON.parse(listJobs)
    seteditJob(editJob)
    data.splice(index,1,editJob)
    localStorage.setItem('job',JSON.stringify(data))
    setEdit(!edit)
    setEdits(!edits)
    setJobs(data)
  }
  return (
    <div className="App" style={{padding:32}}>
       <input
       type='text'
        onChange={e => setJob(e.target.value)} 
        value={job} 
        style={{margin:10}}   
       />
       <button onClick={handleAdd}>Add</button>
       <button onClick={handleClear}>Clear All</button>
       <ul>
          {jobs.map((x, index) => 
          <li key={index}>
            {edit && x}
            {edits && 
            <span>
              {x}
              <input type='text' onChange={e => seteditJob(e.target.value)}/>
              <button onClick={() => hanleDone(index)}>Done</button>
           </span>
            }
          <button style={{margin:10}} onClick={() => handleDele(index)}>Delete</button>
          <button style={{margin:10}} onClick={() => handleEdit(index)}>Edit</button>
          </li>)}
       </ul>
       

    </div>
  );
}


export default Todo