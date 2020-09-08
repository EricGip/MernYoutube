import React, { useState } from "react";
import Dropzone from "react-dropzone";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  }
}));

const Private = [
  { value: 0, label: "Public" },
  { value: 1, label: "Private" },
];

const gameChoices = [
  { value: 0, label: "Film & Animation" },
  { value: 0, label: "Autos & Vehicles" },
  { value: 0, label: "Music" },
  { value: 0, label: "Pets & Animals" },
  { value: 0, label: "Sports" }
];

function VideoUpload() {
  const classes = useStyles();

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const [Categories, setCategories] = useState("Film & Animation");
  const [Privacy, setPrivacy] = useState(0);

  const onTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  }

  const onDescriptionChange = (event) => {

    setDescription(event.currentTarget.value);
  }

  const onCategoryChange = (event) => {

    setCategories(event.currentTarget.value);
  }

  const onPrivacyChange = (event) => {

    setPrivacy(event.currentTarget.value);
  }

  const onSubmit = (event) => {
    console.log(Title + " " + Description + " " + Categories + " " + Privacy)
  }

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <DialogTitle>Video Upload Page!</DialogTitle>
      </div>
      <form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Dropzone multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {/* <Icon className="fa fa-plus-circle" color="primary" /> */}
                {/* <Icon className="fa fa-plus-circle" color="secondary" /> */}
                Click here to add a video!
                {/* <Icon style={{ fontSize: 30 }}>add_circle</Icon> */}
              </div>
            )}
          </Dropzone>
        </div>

        <TextField
          id="outlined-full-width"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Enter title here"
          helperText="helper text "
          // this is what makes it full width
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
          onChange= {onTitleChange}
        />
        <TextField
          id="outlined-full-width"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Enter description here"
          helperText="helper text"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
          onChange= {onDescriptionChange}

        />

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Game
          </InputLabel>
          <NativeSelect
            onChange={onCategoryChange}
          >
            {gameChoices.map((item, index) => (
              <option key={index} value={item.label}>
                {item.label}
              </option>
            ))}
          </NativeSelect>
          <FormHelperText></FormHelperText>
        </FormControl>

        <br />
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Privacy
          </InputLabel>
          <NativeSelect
          onChange = {onPrivacyChange}
          >
            {Private.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </NativeSelect>
          <FormHelperText> </FormHelperText>
        </FormControl>

        <br />
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          onClick={onSubmit}
        >
          Upload
        </Button>
      </form>
    </div>
  );
}

export default VideoUpload;