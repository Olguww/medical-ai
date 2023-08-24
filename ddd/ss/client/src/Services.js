import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router';

export default function ServicesPage() {
    const navigate = useNavigate();
    return (
        <>
            <Grid container>
                <Grid item xs={6} sx={{p: 4, boxSizing: 'border-box'}}>
                    <Paper>
                        <LocalShippingIcon style={{fontSize: '2000%'}} />
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => navigate('/')}
                        >
                            Kargo ile teslim
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={6} sx={{p: 4, boxSizing: 'border-box'}}>
                    <Paper>
                        <UnarchiveIcon style={{fontSize: '2000%'}} />
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => navigate('/iletisim')}
                        >
                            Gel Al
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}