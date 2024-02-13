import Box from "@mui/material/Box";

const Header = () => {
    return(
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090a',
            }}
        />
    )
}

export default Header;