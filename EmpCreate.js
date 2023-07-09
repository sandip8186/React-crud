import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [lastName, lastchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [age, agechange] = useState("0");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);

    var Array = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, lastName, email, phone, age, active };



        if (empdata.age == 0) {
           console.log("if age=0 then dont save");
        }
        else {
            console.log(empdata);
            fetch("http://localhost:8000/employee", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(empdata)
            }).then((res) => {
                alert('Saved successfully.')
                navigate('/');
            }).catch((err) => {
                console.log(err.message)
            })
        }

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>FirstName</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>LastName</label>
                                            <input required value={lastName} onMouseDown={e => valchange(true)} onChange={e => lastchange(e.target.value)} className="form-control"></input>
                                            {lastName.length == 0 && validation && <span className="text-danger">Enter the lastName</span>}
                                            
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required value={email} onChange={e => emailchange(e.target.value)} pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" className="form-control"></input>
                                            {email.length == 0 && validation && <span className="text-danger">Enter the email</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input required pattern="[7-9]{2}[0-9]{8}" value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                            {phone.length == 0 && validation && <span className="text-danger">Enter the phone</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-3 mt-2" >
                                        <div >
                                            
                                        <label>Age</label>&nbsp; <select class="form-select" required value={age} onMouseDown={e => valchange(true)} onChange={e => agechange(e.target.value)}>

                                                <option value={0}>select AGE</option>
                                                {Array.map(i => (
                                                    <option>{i}</option>
                                                ))
                                                }
                                            </select>
                                            {age == 0 && validation && <span className="text-danger">Please Select Age</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>

                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;