import {Button, CircularProgress, Grid, Typography} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

const Upload = () => {
  const [preview, setPreview] = useState('logo192.png');
  const alkuarvot = {
    title: '',
    descrition: '',
  };

  const {postMedia, loading} = useMedia();
  const navigate = useNavigate();

  const doUpload = async () => {
    try {
      console.log('doUpload');
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('title', inputs.title);
      formData.append('description', inputs.description);
      formData.append('file', inputs.file);
      const mediaData = await postMedia(formData, token);
      if (confirm(mediaData.message)) {
        navigate('/home');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    alkuarvot
  );

  useEffect(() => {
    if (inputs.file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setPreview(reader.result);
      });
      reader.readAsDataURL(inputs.file);
    }
  }, [inputs.file]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h1" variant="h2" gutterBottom>
          Upload a file
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="title"
            name="title"
            onChange={handleInputChange}
            value={inputs.title}
          />
          <textarea
            placeholder="description"
            name="description"
            onChange={handleInputChange}
            value={inputs.description}
          ></textarea>

          <input
            type="file"
            name="file"
            accept="image/*, video/*, audio/*"
            onChange={handleInputChange}
          />
          <img src={preview} alt="preview" />
          {loading ? (
            <CircularProgress />
          ) : (
            <Button fullWidth color="primary" type="submit" variant="contained">
              Upload
            </Button>
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default Upload;
