import { useRef } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';

const ReportsPage = () => {
  const reportRef = useRef(null);

  const handlePrint = () => {
    reportRef.current?.scrollIntoView({ block: 'start' });
    window.print();
  };

  return (
    <Box
      sx={{
        '@media print': {
          '.no-print': {
            display: 'none !important',
          },
          '.print-card': {
            boxShadow: 'none !important',
            borderColor: '#d6cec2 !important',
          },
        },
      }}
    >
      <Stack spacing={3}>
        <Box className="no-print" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Box>
            <Typography variant="h5" sx={{ color: '#111827', fontWeight: 700 }}>
              Reports
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Charts and a print-ready summary for saving as PDF.
            </Typography>
          </Box>

          <Button variant="contained" startIcon={<PrintRoundedIcon />} onClick={handlePrint}>
            Print PDF
          </Button>
        </Box>

        <Box
          ref={reportRef}
          className="print-card"
          sx={{
            display: 'grid',
            gap: 2.5,
          }}
        >
          <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', p: 2 }}>
            <Typography variant="overline" sx={{ color: '#6b7280', letterSpacing: '0.2em' }}>
              Quarterly Overview
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>
              Report snapshot
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', lg: 'repeat(4, minmax(0, 1fr))' },
                gap: 1.5,
                mb: 3,
              }}
            >
              {[
                { label: 'Orders', value: '124' },
                { label: 'Revenue', value: '$18.4K' },
                { label: 'Active Users', value: '45' },
                { label: 'Pending Tasks', value: '08' },
              ].map((item) => (
                <Paper key={item.label} elevation={0} sx={{ border: '1px solid #e5e7eb', p: 1.5 }}>
                  <Typography variant="body2" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, fontWeight: 800, color: '#111827' }}>
                    {item.value}
                  </Typography>
                </Paper>
              ))}
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: 'minmax(620px, 1fr) 300px' },
                gap: 2.5,
                alignItems: 'stretch',
              }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 800 }}>
                  Quarterly Comparison
                </Typography>
                <BarChart
                  height={360}
                  xAxis={[{ scaleType: 'band', data: ['Q1', 'Q2', 'Q3', 'Q4'], label: 'Quarters' }]}
                  series={[
                    { data: [35, 44, 24, 34], label: 'Series 1', color: '#3f51f5' },
                    { data: [51, 6, 49, 30], label: 'Series 2', color: '#ffb020' },
                  ]}
                  margin={{ left: 52, right: 28, top: 36, bottom: 56 }}
                />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 800 }}>
                  User Distribution
                </Typography>
                <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', p: 1.5, height: '100%' }}>
                  <PieChart
                    height={300}
                    width={300}
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: 'Admin', color: '#1976d2' },
                          { id: 1, value: 15, label: 'Staff', color: '#ffb020' },
                          { id: 2, value: 20, label: 'Users', color: '#ff5252' },
                        ],
                        outerRadius: 98,
                        cx: 150,
                        cy: 150,
                      },
                    ]}
                  />
                </Paper>
              </Box>
              <Box sx={{ minWidth: 0, gridColumn: '1 / -1' }}>
                <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 800 }}>
                  Trend Line
                </Typography>
                <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', p: 2 }}>
                  <LineChart
                    height={300}
                    xAxis={[{ scaleType: 'point', data: ['Q1', 'Q2', 'Q3', 'Q4'] }]}
                    series={[{ data: [28, 38, 34, 52], label: 'Activity', color: '#1976d2' }]}
                    margin={{ left: 44, right: 24, top: 32, bottom: 36 }}
                  />
                </Paper>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
};

export default ReportsPage;
