import { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import users from '../../assets/users.json';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'First name', flex: 1, minWidth: 140 },
  { field: 'lastName', headerName: 'Last name', flex: 1, minWidth: 140 },
  { field: 'email', headerName: 'Email', flex: 1.5, minWidth: 220 },
  { field: 'username', headerName: 'Username', flex: 1, minWidth: 140 },
  { field: 'role', headerName: 'Role', width: 120 },
  { field: 'gender', headerName: 'Gender', width: 110 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => (
      <Box
        component="span"
        sx={{
          px: 1.25,
          py: 0.5,
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 700,
          color: params.value === 'Active' ? '#166534' : '#991b1b',
          bgcolor: params.value === 'Active' ? '#dcfce7' : '#fee2e2',
        }}
      >
        {params.value}
      </Box>
    ),
  },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

const defaultFilters = {
  role: '',
  gender: '',
  status: '',
};

const emptyUser = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  contactNumber: '',
  password: '',
  role: 'Member',
  gender: 'Male',
  status: 'Active',
  age: '',
};

const UsersPage = () => {
  const [rows, setRows] = useState(() =>
    users.map((user) => ({
      ...user,
      fullName: `${user.firstName} ${user.lastName}`.trim(),
    })),
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState(defaultFilters);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [newUser, setNewUser] = useState(emptyUser);
  const [formErrors, setFormErrors] = useState({});

  const filteredRows = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return rows.filter((row) => {
      const matchesSearch =
        !search ||
        [row.firstName, row.lastName, row.email, row.username].some((value) =>
          String(value ?? '').toLowerCase().includes(search),
        );
      const matchesRole = !filters.role || row.role === filters.role;
      const matchesGender = !filters.gender || row.gender === filters.gender;
      const matchesStatus = !filters.status || row.status === filters.status;

      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [filters.gender, filters.role, filters.status, rows, searchTerm]);

  const handleFilterChange = (field) => (event) => {
    setFilters((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilters(defaultFilters);
  };

  const validateUserField = (field, value) => {
    if (!String(value).trim()) {
      return 'This field is required.';
    }

    switch (field) {
      case 'username':
        if (/\s/.test(value)) {
          return 'Username must not contain spaces.';
        }
        break;
      case 'contactNumber':
        if (!/^\d{11}$/.test(value)) {
          return 'Contact number must be exactly 11 digits.';
        }
        break;
      case 'age':
        if (!/^\d+$/.test(value)) {
          return 'Age must contain numbers only.';
        }
        break;
      case 'password':
        if (value.length < 8) {
          return 'Password must be at least 8 characters.';
        }
        break;
      default:
        break;
    }

    return '';
  };

  const handleAddUserOpen = () => {
    setNewUser(emptyUser);
    setFormErrors({});
    setOpenAddUser(true);
  };

  const handleAddUserClose = () => {
    setOpenAddUser(false);
  };

  const handleNewUserChange = (field) => (event) => {
    const value = event.target.value;

    setNewUser((current) => ({
      ...current,
      [field]: value,
    }));

    setFormErrors((current) => ({
      ...current,
      [field]: validateUserField(field, value),
    }));
  };

  const handleAddUserSubmit = (event) => {
    event.preventDefault();

    const nextErrors = Object.entries({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      username: newUser.username,
      contactNumber: newUser.contactNumber,
      password: newUser.password,
      age: newUser.age,
    }).reduce((accumulator, [field, value]) => {
      const error = validateUserField(field, value);

      if (error) {
        accumulator[field] = error;
      }

      return accumulator;
    }, {});

    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      return;
    }

    const nextId = rows.length ? Math.max(...rows.map((row) => row.id)) + 1 : 1;

    setRows((current) => [
      ...current,
      {
        id: nextId,
        ...newUser,
        contactNumber: newUser.contactNumber,
        password: newUser.password,
        age: Number(newUser.age),
        fullName: `${newUser.firstName} ${newUser.lastName}`.trim(),
      },
    ]);

    setOpenAddUser(false);
    setNewUser(emptyUser);
    setFormErrors({});
  };

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h5" sx={{ color: '#111827', fontWeight: 700 }}>
          Users
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Search by name, email, or username, filter the list, and add a new user.
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', p: 2, width: '100%' }}>
        <Stack spacing={2}>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: {
                xs: '1fr',
                md: 'minmax(220px, 1.6fr) repeat(3, minmax(160px, 1fr)) auto auto',
              },
              alignItems: 'end',
            }}
          >
            <TextField
              label="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="First name, last name, email, or username"
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel id="role-filter-label">Role</InputLabel>
              <Select
                labelId="role-filter-label"
                label="Role"
                value={filters.role}
                onChange={handleFilterChange('role')}
              >
                <MenuItem value="">All roles</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Editor">Editor</MenuItem>
                <MenuItem value="Member">Member</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="gender-filter-label">Gender</InputLabel>
              <Select
                labelId="gender-filter-label"
                label="Gender"
                value={filters.gender}
                onChange={handleFilterChange('gender')}
              >
                <MenuItem value="">All genders</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="status-filter-label">Status</InputLabel>
              <Select
                labelId="status-filter-label"
                label="Status"
                value={filters.status}
                onChange={handleFilterChange('status')}
              >
                <MenuItem value="">All status</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>

            <Button variant="outlined" onClick={handleReset} sx={{ height: 56 }}>
              Reset
            </Button>

            <Button variant="contained" onClick={handleAddUserOpen} sx={{ height: 56 }}>
              Add User
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary">
            Showing {filteredRows.length} of {rows.length} users
          </Typography>

          <Box sx={{ height: 560, width: '100%' }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              disableRowSelectionOnClick
              sx={{
                border: 0,
                '& .MuiDataGrid-columnHeaders': {
                  bgcolor: '#f8fafc',
                  color: '#111827',
                  fontWeight: 800,
                },
              }}
            />
          </Box>
        </Stack>
      </Paper>

      <Dialog open={openAddUser} onClose={handleAddUserClose} fullWidth maxWidth="sm">
        <DialogTitle>Add User</DialogTitle>
        <Box component="form" onSubmit={handleAddUserSubmit}>
          <DialogContent sx={{ display: 'grid', gap: 2, pt: 1 }}>
            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
            <TextField
              label="First name"
              value={newUser.firstName}
              onChange={handleNewUserChange('firstName')}
              required
              fullWidth
              error={Boolean(formErrors.firstName)}
              helperText={formErrors.firstName || ''}
            />
            <TextField
              label="Last name"
              value={newUser.lastName}
              onChange={handleNewUserChange('lastName')}
              required
              fullWidth
              error={Boolean(formErrors.lastName)}
              helperText={formErrors.lastName || ''}
            />
          </Box>

          <TextField
            label="Email"
            type="email"
            value={newUser.email}
            onChange={handleNewUserChange('email')}
            required
            fullWidth
            error={Boolean(formErrors.email)}
            helperText={formErrors.email || ''}
          />

          <TextField
            label="Username"
            value={newUser.username}
            onChange={handleNewUserChange('username')}
            required
            fullWidth
            error={Boolean(formErrors.username)}
            helperText={formErrors.username || 'Username must not contain spaces.'}
          />

          <TextField
            label="Contact Number"
            value={newUser.contactNumber}
            onChange={handleNewUserChange('contactNumber')}
            required
            fullWidth
            inputProps={{ inputMode: 'numeric', maxLength: 11 }}
            error={Boolean(formErrors.contactNumber)}
            helperText={formErrors.contactNumber || 'Enter exactly 11 digits.'}
          />

          <TextField
            label="Password"
            type="password"
            value={newUser.password}
            onChange={handleNewUserChange('password')}
            required
            fullWidth
            error={Boolean(formErrors.password)}
            helperText={formErrors.password || 'Use at least 8 characters.'}
          />

          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' } }}>
              <FormControl fullWidth>
                <InputLabel id="new-role-label">Role</InputLabel>
                <Select
                  labelId="new-role-label"
                  label="Role"
                  value={newUser.role}
                  onChange={handleNewUserChange('role')}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Editor">Editor</MenuItem>
                  <MenuItem value="Member">Member</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="new-gender-label">Gender</InputLabel>
                <Select
                  labelId="new-gender-label"
                  label="Gender"
                  value={newUser.gender}
                  onChange={handleNewUserChange('gender')}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="new-status-label">Status</InputLabel>
                <Select
                  labelId="new-status-label"
                  label="Status"
                  value={newUser.status}
                  onChange={handleNewUserChange('status')}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField
              label="Age"
              type="number"
              value={newUser.age}
              onChange={handleNewUserChange('age')}
              required
              fullWidth
              error={Boolean(formErrors.age)}
              helperText={formErrors.age || 'Use numbers only.'}
            />
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={handleAddUserClose} variant="outlined">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save User
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Stack>
  );
};

export default UsersPage;
