import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import logo from './logo.svg';

const getVariation = () => {
  const key = new Date().toISOString().slice(0, 10) as string;
  const variationList = JSON.parse(localStorage.getItem('variationList') || '{}') || {};

  if (!variationList[key]) {
    const variation = Math.random() * 0.4 - 0.2;
    variationList[key] = variation;
  }

  localStorage.setItem('variationList', JSON.stringify(variationList));

  return variationList[key]
}

const App = () => {
  const cashkonto = 5500;
  const formattedCashkonto = cashkonto.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

  const depot = 1250;
  const variation = getVariation() * depot;
  const depotColor = variation > 0 ? 'success.main' : 'error.main';
  const depotArrow = variation > 0 ? '▲' : '▼';
  const formattedDepotWithVariation = (depot + variation).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

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
              <Typography variant="h6" fontWeight="bold" color="success.main">{formattedCashkonto}</Typography>
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
              <Typography variant="h6" fontWeight="bold" color={depotColor}>
                <small>{depotArrow}</small>
                {formattedDepotWithVariation}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default App;
