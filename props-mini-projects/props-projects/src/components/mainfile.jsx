import Userdetails from "./userdetails.jsx";

function mainfile(){
    return(
    <div>
        <h1 className="bg-amber-950">User-Details</h1>
        <div  id="maindiv">
        <Userdetails 
      name="Aanjali" 
      age={20} 
      salary="20,000" 
      description="she is software developer working in MNC company" 
      jobtitle="Software Developer" 
      position="She is trainee" 
      />
      <Userdetails 
      name="Sonam" 
      age={22} 
      salary="60,000" 
      description="she is software engineer working in Natwest-Group" 
      jobtitle="Software Engineer" 
      position="She is senior-software-engineer" 
      />
      <Userdetails 
      name="Monika" 
      age={24} 
      salary="40,000" 
      description="she is operation manager working in Genpect" 
      jobtitle="Operation-Manager" 
      position="She is Manager" 
      />
    </div>
</div>
     
    )
}

export default mainfile;