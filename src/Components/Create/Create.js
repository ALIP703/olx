import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const date = new Date()
  const handleSubmit = () => {
    // e.preventDefault()
    console.log('one');
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
    ref.getDownloadURL().then((url) => {
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          userId: user.uid,
          url,
          createdAt: date.toDateString()
        }).then(() => {
          history.push('/');
          console.log("product successfully added");
        }).catch((e)=>{
          alert(e.message)
        })
      }).catch((e)=>{
        alert(e.message)
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            required
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => { setCategory(e.target.value) }}
            required
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" name="Price"
            value={price}
            onChange={(e) => { setPrice(e.target.value) }}
            required />
          <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <br />
          <input type="file" onChange={(e) => {
            setImage(e.target.files[0])
          }} />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
