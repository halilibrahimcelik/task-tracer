import React from 'react'

const AddTask = () => {
  return (
    <section>

    <form  className=>
        <div>
            <label htmlFor="task">Task</label>
             <input type="text" id='task' />
        </div>
 <div>
     <label htmlFor="date">Day&Time</label>
     <input type="date" />
 </div>

 <button>Save Task</button>


    </form>

    </section>
  )
}

export default AddTask