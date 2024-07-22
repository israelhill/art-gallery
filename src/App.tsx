import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import './App.css'

function App() {
  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <input type="file" hidden onChange={e => console.log(e.target.files?.item(0))}/>
      </Button>
    </>
  )
}

export default App
