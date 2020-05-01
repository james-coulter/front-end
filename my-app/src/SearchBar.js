import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import './SearchBar.css';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .required("Song Title is required."),
    artist: yup
    .string()
    .required("Artist is required"),
})



const Login = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        artist: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        artist: "",
    });

    const [login, setLogin] = useState([]);

    const [buttonDisabled, setButtonDisabled] = useState(true);


    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => {
            setButtonDisabled(!valid);
        })
    },[formState])




    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post("https://spottysuggester.herokuapp.com/test/recommendations/json", formState)
            .then(res => {
                setLogin([...login, res.data]);
                console.log("success", login);
                console.log(res);
                console.log(res.data);
                Object.keys(res.data).map((login) => {setLogin.push(login)})

            setFormState({
                name:"", 
                artist:"",
            });
        })
        .catch(err => console.log(err.response))
    }

    const validateChange = event => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid =>{
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                });
            });
    };
    const onInputChange = event => {
        event.persist();
        const newFormData= {
            ...formState,
            [event.target.name] : event.target.value
        }
        validateChange(event);
        setFormState(newFormData)

      };
    //   console.log(errors)


    return (
        <div className='largeContainer'>
        <form className='search-form' onSubmit={handleSubmit}>
            <div className="inputsContainer">
            <div className="heading">
            <h2>Start Here</h2>
            </div>
            <div className='searchInputs'>
            <label>
            <input placeholder="Song" className="user-input" type="text" value={formState.name} onChange={onInputChange} name='name'/>
            </label>
            <label>
            <input placeholder="Artist" className="pass-input" type="text" value={formState.artist} onChange={onInputChange} name='artist'/>
            </label>
            <div className='errors'>
            {errors.name.length > 0 ? (<p className='errors'>{errors.name}</p>) : null}
            </div>
            <div className='errors'>
            {errors.artist.length > 0 ? (<p className='errors'>{errors.artist}</p>) : null}
            </div>
            <button data-cy='submit' className='submit' disabled={buttonDisabled}>let's go</button>
            </div>
            </div>
        </form>

        {/* <div className='returnedArray'>
        <pre id='text'>{JSON.stringify(login, null, 2)}</pre>
        </div> */}
        </div>
    )
}

export default Login


