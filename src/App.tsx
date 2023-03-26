import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import logo from './logo.svg';

const App = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#EE0200', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logo} alt="logo" style={{ maxWidth: '180px', display: 'block' }} />
      </Box>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Card>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box flexGrow={1}>
                <Typography variant="body1" fontWeight="bold">Cashkonto</Typography>
                <Typography variant="body2">DE12 7869 1001 1234 20</Typography>
                <Typography variant="body2">Heitor Correa Figueiredo</Typography>
              </Box>
              <Typography variant="h6" fontWeight="bold" color="success.main">2.020,00 €</Typography>
            </Stack>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box flexGrow={1}>
                <Typography variant="body1" fontWeight="bold">Depot</Typography>
                <Typography variant="body2">DE12 7869 1001 1234 20</Typography>
                <Typography variant="body2">Heitor Correa Figueiredo</Typography>
              </Box>
              <Typography variant="h6" fontWeight="bold" color="success.main">990,00 €</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default App;
