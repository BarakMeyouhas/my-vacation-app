import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
// import { useLocation } from '../../../node_modules/react-router-dom/dist/index';
import axios from 'axios';
// import { RouteComponentProps } from 'react-router-dom';

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Card
  // Paper
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { styled } from '@mui/system';

// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { CardActionArea } from '@mui/material';


// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Allvacations = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');
  const [vacationsArray, setVacationsArray] = useState([]);
  const [userID, setUserID] = useState(null); // Initialize userID state
  const [likedVacations, setLikedVacations] = useState({});
  const [expandedCards, setExpandedCards] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch vacations
    axios
      .get('http://localhost:4000/api/v1/user/getallvacations')
      .then((response) => {
        const vacationsData = response.data;
        const sortedVacations = vacationsData.sort((a, b) => {
          const dateA = new Date(a.start.split('T')[0]);
          const dateB = new Date(b.start.split('T')[0]);
          return dateA.getTime() - dateB.getTime();
        });
        setVacationsArray(sortedVacations);
      })
      .catch((error) => {
        console.log('Error fetching vacations:', error);
      });

    // Fetch likes
    axios
      .get('http://localhost:4000/api/v1/admin/getallLikes')
      .then((response) => {
        const likes = response.data;
        console.log(likes);
      })
      .catch((error) => {
        console.log('Error fetching likes:', error);
      });

    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    } else {
      const parsedUser = JSON.parse(user);
      const fetchedUserID = parsedUser.user_id;
      // console.log('user id: ' + fetchedUserID);
      setUserID(fetchedUserID);
    }
  }, [navigate]);

  useEffect(() => {
    if (userID) {
      axios
        .get(`http://localhost:4000/api/v1/user/getUserLikes/${userID}`)
        .then((response) => {
          const userLikes = response.data;
          const likedVacationsObj = {};
          userLikes.forEach((like) => {
            likedVacationsObj[like.vacation_id] = true;
          });
          // console.log(likedVacationsObj);
          // setVacationLikes(likedVacationsObj);
          setLikedVacations(likedVacationsObj);
        })
        .catch((error) => {
          console.log('Error fetching user likes:', error);
        });
    } else {
      // console.log('User_id not available');
    }
  }, [userID]);

  const handleLikeClick = async (id) => {
    try {
      if (!userID) {
        console.error('User ID is not defined.');
        return;
      }

      const isLiked = likedVacations[id];

      if (isLiked) {
        const response = await axios.delete(`http://localhost:4000/api/v1/user/removeLikeById/${id}`);
        if (response.status === 200) {
          setLikedVacations((prevLikedVacations) => {
            const updatedLikedVacations = { ...prevLikedVacations };
            delete updatedLikedVacations[id];
            return updatedLikedVacations;
          });
        } else {
          // console.log('Failed to remove like.');
        }
      } else {
        const newLike = {
          user_id: userID,
          vacation_id: id
        };
        await axios.post('http://localhost:4000/api/v1/user/addLike', newLike);
        console.log('Like clicked for vacation ID:', id);
        setLikedVacations((prevLikedVacations) => ({
          ...prevLikedVacations,
          [id]: true
        }));
      }
    } catch (error) {
      console.log('Error:', error);
      // Handle error
    }
  };

  const handleExpandClick = (id) => {
    setExpandedCards((prevExpandedCards) => ({
      ...prevExpandedCards,
      [id]: !prevExpandedCards[id]
    }));
  };

  function formatDateWithoutTime(dateString) {
    const [date] = dateString.split('T');
    return date;
  }

  function handleVacationClick(id) {
    console.log(id);
    navigate(
      `/vacationDetails?params=${encodeURIComponent(id)}`
    );
  }

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: 2.25 }}>
        <Typography variant="h5">All Vacations</Typography>
      </Grid>
      <Grid container spacing={3} sx={{ mr: '10px', ml: '10px' }}>
        {vacationsArray.map((vacation) => (
          <Grid key={vacation.id} item xs={12} sm={6} md={4}>
            <Card onClick={() => handleVacationClick(vacation.id)} elevation={5} className="vacation-box" sx={{ display: 'flex', flexDirection: 'column', maxHeight: '450px' }}>
              <CardActionArea>
                <CardMedia sx={{ height: 140, flexGrow: 1 }} image={vacation.img} alt={vacation.destination} title={vacation.destination} />
                <CardContent sx={{ flexGrow: 1, minHeight: '90px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {vacation.destination}
                    </Typography>
                    <div
                      className="like-button"
                      tabIndex="0"
                      role="button"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleLikeClick(vacation.id);
                        }
                      }}
                      onClick={() => handleLikeClick(vacation.id)}
                    >
                      {likedVacations[vacation.id] ? <Favorite /> : <FavoriteBorder />}
                    </div>
                  </div>
                  <br></br>
                  <Typography className="vacation-dates">
                    Start: {formatDateWithoutTime(vacation.start)} | End: {formatDateWithoutTime(vacation.end)}
                  </Typography>{' '}
                  
                  <Typography variant="h5" className="vacation-price">
                    $ {vacation.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expandedCards[vacation.id]}
                  onClick={() => handleExpandClick(vacation.id)}
                  aria-expanded={expandedCards[vacation.id]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expandedCards[vacation.id]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {vacation.description}
                  </Typography>
                  <br></br>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Unique Visitor</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Sales Report</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Stack spacing={1.5} sx={{ mb: -12 }}>
            <Typography variant="h6" color="secondary">
              Net Profit
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Stack>
          <SalesColumnChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'success.main',
                    bgcolor: 'success.lighter'
                  }}
                >
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $1,430
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    78%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'primary.main',
                    bgcolor: 'primary.lighter'
                  }}
                >
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #984947</Typography>} secondary="5 August, 1:45 PM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $302
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    8%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'error.main',
                    bgcolor: 'error.lighter'
                  }}
                >
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $682
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    16%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Allvacations;
