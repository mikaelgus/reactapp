import {Button, Grid, Typography} from '@mui/material';
import useForm from '../hooks/FormHooks';

const UploadForm = () => {
  const alkuarvot = {
    title: '',
    descrition: '',
    file: '',
  };

  const doUpload = async () => {
    try {
      console.log('doUpload');
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    alkuarvot
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h1" variant="h2" gutterBottom>
          Login
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
          <input type="file" name="file" accept="image/*, video/*, audio/*" />
          <Button fullWidth color="primary" type="submit" variant="contained">
            Login
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
UploadForm.protoTypes = {};

export default UploadForm;
