import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import SideNav from '../SideNav/SideNav';               // kolla så sökvägen stämmer
import { Outlet } from 'react-router-dom';
import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage';
// import Player from '../Player/Player';               // om ni har en Player-komponent
// import MobileNav from '../MobileNav/MobileNav';      // om ni har en MobileNav-komponent

const Dashboard = ({ spotifyApi }) => {
  // ✅ rätt användning av useState
  const [token, setToken] = useState(getAccessTokenFromStorage());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onMount = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }

      await spotifyApi.setAccessToken(token);
      setIsLoading(false);
    };

    onMount();
  }, [token, spotifyApi]); // ✅ beroenden

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {!isLoading && (
        <Box sx={{ flex: 1, overflowY: 'auto', display: 'flex' }}>
          <SideNav spotifyApi={spotifyApi} token={token} />
          <Outlet /> {/* Här renderas Home (din TA-sida) */}
        </Box>
      )}

      {/* Kommentera dessa tills komponenterna finns */}
      {/* {token && !isLoading && <Player spotifyApi={spotifyApi} />} */}
      {/* {token && !isLoading && <MobileNav />} */}
    </Box>
  );
};

export default Dashboard;
