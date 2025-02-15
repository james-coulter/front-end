import React, {useState, useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
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



const SearchBar = (props) => {
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

    const [isLoading, setIsLoading] = useState(false); // for spinner


    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => {
            setButtonDisabled(!valid);
        })
    },[formState])



    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true); // for spinner
        axios
            .post("https://cors-anywhere.herokuapp.com/https://spottysuggester.herokuapp.com/recommendations/json", formState)
            .then(res => {
                setLogin(res.data);
                console.log(res);
                console.log(res.data);
                setIsLoading(false); // for spinner
                

            setFormState({
                name:"", 
                artist:"",
            });
        })
        .catch(err => {
            setIsLoading(false); // for spinner
            console.log(err.response)})
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
            <label>
            <h2>Song Title:</h2>
            <input placeholder="Song" className="user-input" type="text" value={formState.name} onChange={onInputChange} name='name'/>
            </label>
            <label>
            <h2>Artist:</h2>
            <input placeholder="Artist" className="pass-input" type="text" value={formState.artist} onChange={onInputChange} name='artist'/>
            </label>
            <div className='errors'>
            {errors.name.length > 0 ? (<p className='errors'>{errors.name}</p>) : null}
            </div>
            <div className='errors'>
            {errors.artist.length > 0 ? (<p className='errors'>{errors.artist}</p>) : null}
            </div>
            <button data-cy='submit' className='submit' disabled={buttonDisabled}>let's create</button>
            {isLoading && (
            <div>
            <h4>Please wait while our engineers are hard at work crafting the best recommendations in town.</h4>
            <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            </div>
            )}
            </div>
        </form>
        <div className="trackPlayer">
            {login.map((song)=> {
                return (
                <div className="displayedSongs">
                <AudioPlayer src={song.preview_url} onPlay={e => console.log('Playing')} />
                <h2 className='songName'>{song.name}</h2>
                <h2 className="divider">|</h2>
                <h3 className='artist'>{song.artist}</h3>
                </div>
                )
            })}
        </div>
        </div>
    )
}

export default SearchBar

