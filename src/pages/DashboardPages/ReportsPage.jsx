import { useMemo, useRef, useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

const reportData = {
  monthly: {
    label: 'Monthly',
    comparison: [
      { data: [18, 24, 20, 27], label: 'Generated', color: '#3f51f5' },
      { data: [12, 19, 17, 23], label: 'Completed', color: '#ffb020' },
    ],
    trend: [22, 29, 25, 34],
    cards: [
      { label: 'Reports Generated', value: '89' },
      { label: 'Completed', value: '71' },
      { label: 'Active Users', value: '45' },
      { label: 'Pending Tasks', value: '18' },
    ],
  },
  quarterly: {
    label: 'Quarterly',
    comparison: [
      { data: [35, 44, 24, 34], label: 'Generated', color: '#3f51f5' },
      { data: [51, 6, 49, 30], label: 'Completed', color: '#ffb020' },
    ],
    trend: [28, 38, 34, 52],
    cards: [
      { label: 'Reports Generated', value: '137' },
      { label: 'Completed', value: '104' },
      { label: 'Active Users', value: '45' },
      { label: 'Pending Tasks', value: '08' },
    ],
  },
  yearly: {
    label: 'Yearly',
    comparison: [
      { data: [88, 112, 96, 124], label: 'Generated', color: '#3f51f5' },
      { data: [74, 98, 82, 111], label: 'Completed', color: '#ffb020' },
    ],
    trend: [86, 108, 94, 128],
    cards: [
      { label: 'Reports Generated', value: '420' },
      { label: 'Completed', value: '365' },
      { label: 'Active Users', value: '58' },
      { label: 'Pending Tasks', value: '55' },
    ],
  },
};

const ReportsPage = () => {
  const reportRef = useRef(null);
  const [reportPeriod, setReportPeriod] = useState('quarterly');
  const [showFilters, setShowFilters] = useState(false);
  const [generatedAt, setGeneratedAt] = useState('');

  const activeReport = useMemo(() => reportData[reportPeriod], [reportPeriod]);

  const handleExport = () => {
    reportRef.current?.scrollIntoView({ block: 'start' });
    window.print();
  };

  const handleGenerate = () => {
    setGeneratedAt(new Date().toLocaleString());
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
              Report analytics overview with export, generate, and filter controls.
            </Typography>
            {generatedAt ? (
              <Typography variant="caption" color="text.secondary">
                Last generated: {generatedAt}
              </Typography>
            ) : null}
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
            <Button variant="contained" startIcon={<DownloadRoundedIcon />} onClick={handleExport}>
              Export
            </Button>
            <Button variant="outlined" startIcon={<RefreshRoundedIcon />} onClick={handleGenerate}>
              Generate
            </Button>
            <Button variant="outlined" startIcon={<FilterAltRoundedIcon />} onClick={() => setShowFilters((open) => !open)}>
              Filter
            </Button>
          </Stack>
        </Box>

        {showFilters ? (
          <Paper className="no-print" elevation={0} sx={{ border: '1px solid #e5e7eb', p: 2 }}>
            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel id="report-period-label">Report Period</InputLabel>
              <Select
                labelId="report-period-label"
                label="Report Period"
                value={reportPeriod}
                onChange={(event) => setReportPeriod(event.target.value)}
              >
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="quarterly">Quarterly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        ) : null}

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
              {activeReport.label} Overview
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
              {activeReport.cards.map((item) => (
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
                  {activeReport.label} Report Output
                </Typography>
                <BarChart
                  height={360}
                  xAxis={[{ scaleType: 'band', data: ['Q1', 'Q2', 'Q3', 'Q4'], label: 'Quarters' }]}
                  series={activeReport.comparison}
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
                    series={[{ data: activeReport.trend, label: 'Activity', color: '#1976d2' }]}
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
