import { Box } from "@mui/material";

const Footer: React.FC = () => {
  return <Box
  component="div"
  sx={{
    Width: "100%",
    marginTop: '30px',
    backgroundColor: '#078080',
    color: '#232323',
    width: "100%",
    height: "50px",
    alignItems: 'center',
    display: 'flex',
  }} 
  >
    <div style={{marginInline: 'auto'}}>FOOTER</div>
  </Box>
}

export default Footer